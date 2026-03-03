const { spawn } = require('node:child_process');
const { resolve } = require('node:path');

const args = process.argv.slice(2);
const preloadPath = resolve(__dirname, 'node', 'max-listeners.cjs');

const child = spawn(
  process.execPath,
  ['-r', preloadPath, require.resolve('nx/bin/nx.js'), ...args],
  {
    stdio: 'inherit',
    env: process.env,
  }
);

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
