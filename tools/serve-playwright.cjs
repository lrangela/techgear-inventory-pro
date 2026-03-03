const http = require('node:http');
const { spawn } = require('node:child_process');

const nxBin = require.resolve('nx/bin/nx.js');
const host = '127.0.0.1';
const readinessPort = 4300;

const services = [
  {
    name: 'shop-web',
    url: `http://${host}:4200/login`,
    args: [
      nxBin,
      'run',
      'shop-web:serve',
      '--configuration=development',
      '--port=4200',
      `--host=${host}`,
    ],
  },
  {
    name: 'admin-panel',
    url: `http://${host}:4201/login`,
    args: [
      nxBin,
      'run',
      'admin-panel:serve',
      '--configuration=development',
      '--port=4201',
      `--host=${host}`,
    ],
  },
];

const managedChildren = [];
let readinessServer;
let shuttingDown = false;

function log(message) {
  process.stdout.write(`[playwright-serve] ${message}\n`);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isHttpReady(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (response) => {
      response.resume();
      resolve(response.statusCode !== undefined && response.statusCode < 500);
    });

    request.on('error', () => resolve(false));
    request.setTimeout(2_000, () => {
      request.destroy();
      resolve(false);
    });
  });
}

function killChildren() {
  for (const child of managedChildren) {
    if (!child.killed) {
      child.kill();
    }
  }
}

async function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  if (readinessServer) {
    await new Promise((resolve) => readinessServer.close(resolve));
  }

  killChildren();
  process.exit(code);
}

function startService(service) {
  log(`starting ${service.name}`);
  const child = spawn(process.execPath, service.args, {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('exit', (code) => {
    if (!shuttingDown && code !== 0) {
      log(`${service.name} exited before readiness with code ${code ?? 'unknown'}`);
      void shutdown(code ?? 1);
    }
  });

  managedChildren.push(child);
}

async function ensureServicesReady() {
  const runningLocally = await Promise.all(
    services.map((service) => isHttpReady(service.url))
  );

  if (runningLocally.every(Boolean)) {
    log('reusing existing local servers');
    return;
  }

  for (const service of services) {
    startService(service);
  }

  const timeoutMs = 150_000;
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const states = await Promise.all(
      services.map((service) => isHttpReady(service.url))
    );

    if (states.every(Boolean)) {
      log('all application servers are ready');
      return;
    }

    await wait(1_000);
  }

  throw new Error('Timed out waiting for application servers to become ready.');
}

async function main() {
  process.on('SIGINT', () => {
    void shutdown(0);
  });
  process.on('SIGTERM', () => {
    void shutdown(0);
  });

  await ensureServicesReady();

  readinessServer = http.createServer((request, response) => {
    if (request.url === '/health') {
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end('ok');
      return;
    }

    response.writeHead(404);
    response.end();
  });

  readinessServer.listen(readinessPort, host, () => {
    log(`readiness server listening on http://${host}:${readinessPort}/health`);
  });
}

main().catch((error) => {
  console.error(error);
  void shutdown(1);
});
