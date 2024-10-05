import { rename } from 'node:fs/promises';
import { loggerService } from '../services/index.js';

export class RenameFileCommand {
  async execute(oldFilename, newFilename) {
    try {
      await rename(oldFilename, newFilename);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
