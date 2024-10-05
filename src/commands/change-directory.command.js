import { chdir } from 'process';
import { loggerService } from '../services/index.js';

export class ChangeDirectoryCommand {
  execute(path) {
    try {
      chdir(path);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
