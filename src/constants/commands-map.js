import {
  ChangeDirectoryCommand,
  CopyFileCommand,
  CreateFileCommand,
  ListCommand,
  OperatingSystemCommand,
  ReadFileCommand,
  RenameFileCommand,
  UpCommand,
} from '../commands/index.js';

const commands = {
  up: 'up',
  ls: 'ls',
  cd: 'cd',
  cat: 'cat',
  add: 'add',
  rn: 'rn',
  cp: 'cp',
  os: 'os',
};

const commandsMap = new Map();

commandsMap.set(commands.up, new UpCommand());

commandsMap.set(commands.ls, new ListCommand());

commandsMap.set(commands.cd, new ChangeDirectoryCommand());

commandsMap.set(commands.os, new OperatingSystemCommand());

commandsMap.set(commands.cat, new ReadFileCommand());

commandsMap.set(commands.add, new CreateFileCommand());

commandsMap.set(commands.rn, new RenameFileCommand());

commandsMap.set(commands.cp, new CopyFileCommand());

export { commandsMap };
