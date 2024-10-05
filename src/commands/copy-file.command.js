import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { loggerService } from '../services/index.js';

export class CopyFileCommand {
  async execute(sourcePath, destinationPath) {
    try {
      const readStream = createReadStream(resolve(sourcePath));
      const writeStream = createWriteStream(resolve(destinationPath));
      await pipeline(readStream, writeStream);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
