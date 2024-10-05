import { UpCommand } from '../commands/index.js';

const commandsMap = new Map();
commandsMap.set('up', new UpCommand());

export { commandsMap };
