import { createReadStream, createWriteStream } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';
import { loggerService } from '../services/index.js';

export class CompressCommand {
  async execute(pathToFile, pathToDestination) {
    try {
      const pathToFileResolved = resolve(pathToFile);
      const pathToDestinationResolved = resolve(pathToDestination);

      const srcFileName = basename(pathToFileResolved);

      const readStream = createReadStream(pathToFileResolved);
      const writeStream = createWriteStream(join(pathToDestinationResolved, srcFileName + '.br'));

      await pipeline(readStream, createBrotliCompress(), writeStream);
    } catch (e) {
      loggerService.logMessage('Operation failed');
    }
  }
}
