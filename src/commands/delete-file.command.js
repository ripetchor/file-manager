import { rm } from 'node:fs/promises';
import { loggerService } from '../services/index.js';

export class DeleteFileCommand {
  async execute(pathToFile) {
    try {
      await rm(pathToFile);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
