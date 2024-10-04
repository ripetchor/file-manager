import { EOL } from 'os';
import { stdout } from 'process';

export class LoggerService {
  log(message) {
    stdout.write(message + EOL);
  }
}

export const loggerService = new LoggerService();
