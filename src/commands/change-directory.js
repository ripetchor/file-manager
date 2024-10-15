import { resolve } from 'node:path';
import { chdir } from 'node:process';
import { loggerService } from '../services/index.js';

export class ChangeDirectoryCommand {
  execute(path) {
    try {
      chdir(resolve(path));
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
