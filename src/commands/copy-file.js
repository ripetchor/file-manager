import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { loggerService } from '../services/index.js';

export class CopyFileCommand {
  async execute(sourcePath, destinationPath) {
    try {
      const srcFileName = basename(sourcePath);
      const readStream = createReadStream(resolve(sourcePath));
      const writeStream = createWriteStream(resolve(join(destinationPath, srcFileName)));
      await pipeline(readStream, writeStream);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
