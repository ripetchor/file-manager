import { homedir } from 'node:os';
import { chdir, cwd, exit, stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import { commandsMap } from './constants/index.js';
import { loggerService } from './services/index.js';
import { getUserName } from './utils/get-user-name.js';

chdir(homedir());

const userName = getUserName();

loggerService.logGreeting(userName);
loggerService.logCurrentDirectory(cwd());

const readline = createInterface({ input: stdin, output: stdout });
readline.setPrompt('>> ');
readline.prompt();

const lineHandler = (line) => {
  if (line.trim() === '.exit') {
    loggerService.logFarewell(userName);
    exit();
  }

  const [command, ...commandArgs] = line.trim().split(' ');

  if (!commandsMap.has(command)) {
    loggerService.logMessage('Invalid input');
  } else {
    commandsMap.get(command).execute(...commandArgs);
  }

  loggerService.logCurrentDirectory(cwd());
  readline.prompt();
};

const closeHandler = () => {
  loggerService.logFarewell(userName);
  exit();
};

readline.on('line', lineHandler);
readline.on('close', closeHandler);
