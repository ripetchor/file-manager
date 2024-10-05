import { ListCommand, UpCommand } from '../commands/index.js';

const commandsMap = new Map();
commandsMap.set('up', new UpCommand());
commandsMap.set('ls', new ListCommand());

export { commandsMap };
