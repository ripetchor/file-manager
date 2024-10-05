import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';
import { pipeline } from 'stream/promises';
import { loggerService } from '../services/index.js';

export class MoveFileCommand {
  async execute(sourcePath, destinationPath) {
    try {
      const readStream = createReadStream(sourcePath);
      const writeStream = createWriteStream(destinationPath);
      await pipeline(readStream, writeStream);
      await rm(sourcePath);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
