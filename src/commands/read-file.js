import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { loggerService } from '../services/index.js';

export class ReadFileCommand {
  async execute(pathToFile) {
    try {
      const readStream = createReadStream(resolve(pathToFile));
      readStream.on('data', (chunk) => {
        loggerService.logMessage(chunk);
      });
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
