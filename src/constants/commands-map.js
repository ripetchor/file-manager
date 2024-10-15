import {
  CalculateHashCommand,
  ChangeDirectoryCommand,
  CompressCommand,
  CopyFileCommand,
  CreateFileCommand,
  DecompressCommand,
  DeleteFileCommand,
  ListCommand,
  MoveFileCommand,
  OperatingSystemCommand,
  ReadFileCommand,
  RenameFileCommand,
  UpCommand,
} from '../commands/index.js';

const commands = {
  up: 'up',
  cd: 'cd',
  ls: 'ls',
  cat: 'cat',
  add: 'add',
  rn: 'rn',
  cp: 'cp',
  mv: 'mv',
  rm: 'rm',
  os: 'os',
  hash: 'hash',
  compress: 'compress',
  decompress: 'decompress',
};

const commandsMap = new Map();

commandsMap.set(commands.up, new UpCommand());

commandsMap.set(commands.cd, new ChangeDirectoryCommand());

commandsMap.set(commands.ls, new ListCommand());

commandsMap.set(commands.cat, new ReadFileCommand());

commandsMap.set(commands.add, new CreateFileCommand());

commandsMap.set(commands.rn, new RenameFileCommand());

commandsMap.set(commands.cp, new CopyFileCommand());

commandsMap.set(commands.mv, new MoveFileCommand());

commandsMap.set(commands.rm, new DeleteFileCommand());

commandsMap.set(commands.os, new OperatingSystemCommand());

commandsMap.set(commands.hash, new CalculateHashCommand());

commandsMap.set(commands.compress, new CompressCommand());

commandsMap.set(commands.decompress, new DecompressCommand());

export { commandsMap };
