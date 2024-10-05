import { ListCommand, UpCommand } from '../commands/index.js';

const commands = {
  up: 'up',
  ls: 'ls',
};

const commandsMap = new Map();
commandsMap.set(commands.up, new UpCommand());
commandsMap.set(commands.ls, new ListCommand());

export { commandsMap };
