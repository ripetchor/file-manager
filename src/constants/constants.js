import { ChangeDirectoryCommand, ListCommand, UpCommand } from '../commands/index.js';

const commands = {
  up: 'up',
  ls: 'ls',
  cd: 'cd',
};

const commandsMap = new Map();
commandsMap.set(commands.up, new UpCommand());
commandsMap.set(commands.ls, new ListCommand());
commandsMap.set(commands.cd, new ChangeDirectoryCommand());

export { commandsMap };
