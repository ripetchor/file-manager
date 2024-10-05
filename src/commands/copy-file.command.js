import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { loggerService } from '../services/index.js';

export class CopyFileCommand {
  async execute(sourcePath, destinationPath) {
    try {
      const readStream = createReadStream(sourcePath);
      const writeStream = createWriteStream(destinationPath);
      await pipeline(readStream, writeStream);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
