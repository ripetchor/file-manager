import { chdir } from 'node:process';
import { loggerService } from '../services/index.js';

export class UpCommand {
  execute() {
    try {
      chdir('..');
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
