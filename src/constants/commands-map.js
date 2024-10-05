import {
  ChangeDirectoryCommand,
  ListCommand,
  OperatingSystemCommand,
  UpCommand,
} from '../commands/index.js';

const commands = {
  up: 'up',
  ls: 'ls',
  cd: 'cd',
  os: 'os',
};

const commandsMap = new Map();

commandsMap.set(commands.up, new UpCommand());

commandsMap.set(commands.ls, new ListCommand());

commandsMap.set(commands.cd, new ChangeDirectoryCommand());

commandsMap.set(commands.os, new OperatingSystemCommand());

export { commandsMap };
