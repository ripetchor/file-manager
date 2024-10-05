import { homedir } from 'node:os';
import { chdir, cwd, exit, stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import { commandsMap } from '../constants/index.js';
import { getUserName } from '../utils/index.js';
import { loggerService } from './logger.service.js';

class ReadLineService {
  #userName;

  #commands;

  #readLine;

  #loggerService = loggerService;

  constructor({ input, output, commands, userName }) {
    this.#userName = userName;
    this.#commands = commands;
    this.#readLine = createInterface({ input, output });
    this.#readLine.setPrompt('>> ');
  }

  prompt() {
    this.#readLine.prompt();
  }

  #lineHandler(line) {
    if (line.trim() === '.exit') {
      this.#stopProcess();
    }

    const [command, ...commandArgs] = line.trim().split(' ');
    const trimmedCommand = command.trim();
    const trimmedArgs = commandArgs.map((arg) => arg.trim());

    if (!this.#commands.has(trimmedCommand)) {
      loggerService.logMessage('Invalid input');
    } else {
      this.#commands.get(trimmedCommand).execute(...trimmedArgs);
    }

    this.#loggerService.logCurrentDirectory(cwd());
    this.prompt();
  }

  #stopProcess() {
    this.#loggerService.logFarewell(this.#userName);
    exit();
  }

  initialize() {
    chdir(homedir());

    this.#loggerService.logGreeting(this.#userName);
    this.#loggerService.logCurrentDirectory(cwd());

    this.prompt();

    this.#readLine.on('line', this.#lineHandler.bind(this));
    this.#readLine.on('close', this.#stopProcess.bind(this));
  }
}

export const readLineService = new ReadLineService({
  input: stdin,
  output: stdout,
  commands: commandsMap,
  userName: getUserName(),
});
