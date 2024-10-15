import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { loggerService } from '../services/index.js';

export class CreateFileCommand {
  execute(fileName) {
    try {
      createWriteStream(resolve(fileName));
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
