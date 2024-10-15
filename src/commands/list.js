import { readdir } from 'node:fs/promises';
import { cwd } from 'node:process';
import { loggerService } from '../services/index.js';

export class ListCommand {
  async execute() {
    try {
      const dirents = await readdir(cwd(), { withFileTypes: true });
      const data = dirents.map((dirent) => ({
        Name: dirent.name,
        Type: dirent.isDirectory() ? 'directory' : 'file',
      }));
      console.table(data);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
