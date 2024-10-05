import {
  ChangeDirectoryCommand,
  ConcatenateCommand,
  CreateFileCommand,
  ListCommand,
  OperatingSystemCommand,
  UpCommand,
} from '../commands/index.js';

const commands = {
  up: 'up',
  ls: 'ls',
  cd: 'cd',
  cat: 'cat',
  add: 'add',
  os: 'os',
};

const commandsMap = new Map();

commandsMap.set(commands.up, new UpCommand());

commandsMap.set(commands.ls, new ListCommand());

commandsMap.set(commands.cd, new ChangeDirectoryCommand());

commandsMap.set(commands.os, new OperatingSystemCommand());

commandsMap.set(commands.cat, new ConcatenateCommand());

commandsMap.set(commands.add, new CreateFileCommand());

export { commandsMap };
