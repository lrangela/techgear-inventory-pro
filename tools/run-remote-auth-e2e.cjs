const { spawn } = require('node:child_process');

const playwrightBin = require.resolve('@playwright/test/cli');

const child = spawn(process.execPath, [playwrightBin, 'test'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    REMOTE_AUTH_E2E: '1',
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});
