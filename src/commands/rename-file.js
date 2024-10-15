import { rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loggerService } from '../services/index.js';

export class RenameFileCommand {
  async execute(oldFilename, newFilename) {
    try {
      await rename(resolve(oldFilename), resolve(newFilename));
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
