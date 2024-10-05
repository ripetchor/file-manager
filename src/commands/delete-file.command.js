import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loggerService } from '../services/index.js';

export class DeleteFileCommand {
  async execute(pathToFile) {
    try {
      await rm(resolve(pathToFile));
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
