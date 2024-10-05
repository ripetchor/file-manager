import { createReadStream } from 'fs';
import { loggerService } from '../services/index.js';

export class ReadFileCommand {
  async execute(pathToFile) {
    try {
      const readStream = createReadStream(pathToFile);
      readStream.on('data', (chunk) => {
        loggerService.logMessage(chunk);
      });
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
