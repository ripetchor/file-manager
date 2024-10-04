import { EOL } from 'os';
import { stdout } from 'process';

export class LoggerService {
  logMessage(message) {
    stdout.write(message + EOL);
  }

  logGreeting(userName) {
    stdout.write(`Welcome to the File Manager, ${userName}!` + EOL);
  }

  logFarewell(userName) {
    stdout.write(`Thank you for using File Manager, ${userName}, goodbye!` + EOL);
  }

  logCurrentDirectory(currentDirectory) {
    stdout.write(`You are currently in ${currentDirectory}` + EOL);
  }
}

export const loggerService = new LoggerService();
