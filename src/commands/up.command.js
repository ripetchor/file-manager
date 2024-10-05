import { chdir } from 'process';
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
