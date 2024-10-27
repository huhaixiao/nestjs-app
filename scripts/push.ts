import { execSync, spawn } from 'child_process';

const shutdown = () => {
  const command = 'shutdown /s /t 0';
  const shutdownProcess = spawn('cmd.exe', ['/c', command]);

  shutdownProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  shutdownProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  shutdownProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

const run = async () => {
  try {
    await execSync('git push origin HEAD -f');
    shutdown();
  } catch (e) {
    setTimeout(run, 1000 * 60 * 5);
    console.log(e);
  }
};

run();
