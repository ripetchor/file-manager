const osCommandArgs = {
  eol: '--EOL',
  cpus: '--cpus',
  homedir: '--homedir',
  username: '--username',
  architecture: '--architecture',
};

const osCommandsMap = new Map();

osCommandsMap.set(osCommandArgs.eol, (osModule, loggerService) => {
  loggerService.logMessage(osModule.EOL);
});

osCommandsMap.set(osCommandArgs.cpus, (osModule, loggerService) => {
  const cpusInfo = osModule.cpus();
  const cpusData = cpusInfo.map((cpu) => cpu.model);
  console.log(cpusData);
  loggerService.logMessage(`TOTAL CPUS: ${osModule.cpus().length}`);
});

osCommandsMap.set(osCommandArgs.homedir, (osModule, loggerService) => {
  loggerService.logMessage(osModule.homedir());
});

osCommandsMap.set(osCommandArgs.username, (osModule, loggerService) => {
  loggerService.logMessage(osModule.hostname());
});

osCommandsMap.set(osCommandArgs.architecture, (osModule, loggerService) => {
  loggerService.logMessage(osModule.arch());
});

export { osCommandsMap };
