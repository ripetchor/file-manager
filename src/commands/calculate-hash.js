import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { loggerService } from '../services/index.js';
const { createHash } = await import('node:crypto');

export class CalculateHashCommand {
  execute(pathToFile) {
    try {
      const pathToFileResolved = resolve(pathToFile);

      const readStream = createReadStream(pathToFileResolved);

      const hash = createHash('sha256');

      readStream.on('data', (chunk) => {
        hash.update(chunk);
      });

      readStream.on('end', () => {
        loggerService.logMessage(hash.digest('hex'));
      });
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
