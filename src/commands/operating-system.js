import os from 'node:os';
import { osCommandsMap } from '../constants/index.js';
import { loggerService } from '../services/index.js';

export class OperatingSystemCommand {
  execute(arg) {
    try {
      const handler = osCommandsMap.get(arg);
      handler(os, loggerService);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
