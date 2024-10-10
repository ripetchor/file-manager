import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliDecompress } from 'node:zlib';
import { loggerService } from '../services/index.js';

export class DecompressCommand {
  async execute(pathToFile, pathToDestination) {
    try {
      const pathToFileResolved = resolve(pathToFile);
      const pathToDestinationResolved = resolve(pathToDestination);

      const srcFileName = basename(pathToFileResolved);

      const readStream = createReadStream(pathToFileResolved);
      const writeStream = createWriteStream(
        join(pathToDestinationResolved, srcFileName.replace('.br', '')),
      );

      await pipeline(readStream, createBrotliDecompress(), writeStream);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
