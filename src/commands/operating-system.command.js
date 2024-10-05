import os from 'node:os';
import { loggerService } from '../services/index.js';

const OS_COMMAND_ARGS_MAP = {
  '--EOL': (osModule) => {
    loggerService.logMessage(osModule.EOL);
  },
  '--cpus': (osModule) => {
    const cpusInfo = osModule.cpus();
    const cpusData = cpusInfo.map((cpu) => cpu.model);
    console.log(cpusData);
    loggerService.logMessage(`TOTAL CPUS: ${osModule.cpus().length}`);
  },
  '--homedir': (osModule) => {
    loggerService.logMessage(osModule.homedir());
  },
  '--username': (osModule) => {
    loggerService.logMessage(osModule.hostname());
  },
  '--architecture': (osModule) => {
    loggerService.logMessage(osModule.arch());
  },
};

export class OperatingSystemCommand {
  execute(arg) {
    try {
      OS_COMMAND_ARGS_MAP[arg](os);
    } catch {
      loggerService.logMessage('Operation failed');
    }
  }
}
