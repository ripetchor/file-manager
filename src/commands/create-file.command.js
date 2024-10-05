import { createWriteStream } from 'node:fs';
import { loggerService } from '../services/index.js';

export class CreateFileCommand {
  execute(fileName) {
    try {
      createWriteStream(fileName);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
