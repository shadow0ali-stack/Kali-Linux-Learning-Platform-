import { CommandParser } from './command-parser.js';
import { PathResolver } from './path-resolver.js';
import { VirtualFileSystem } from '../filesystem/virtual-file-system.js';
import { CommandRegistry } from '../data/commands/index.js';

export class TerminalEngine {
  constructor(appState) {
    this.appState = appState;
    this.vfs = new VirtualFileSystem(this.appState.getVFS());
    this.currentPath = '/home/kali';
    this.history = [];
    this.parser = new CommandParser();
    this.pathResolver = new PathResolver(this.currentPath);
  }

  refreshVFS() {
    this.vfs = new VirtualFileSystem(this.appState.getVFS());
  }

  execute(input) {
    const trimmed = input.trim();
    if (!trimmed) return '';
    this.history.push(trimmed);
    const { command, args, options } = this.parser.parse(trimmed);
    const commandDefinition = CommandRegistry.get(command);
    if (!commandDefinition) {
      return `bash: ${command}: command not found`;
    }

    return this.runCommand(commandDefinition, args, options);
  }

  runCommand(definition, args, options) {
    switch (definition.command) {
      case 'pwd':
        return this.currentPath;
      case 'ls': {
        const target = args[0] ? this.pathResolver.resolve(args[0], this.currentPath) : this.currentPath;
        const node = this.vfs.getNode(target);
        if (!node || node.type !== 'dir') return `ls: cannot access '${target}': No such file or directory`;
        const entries = this.vfs.listDirectory(target);
        return entries.join('  ');
      }
      case 'cd': {
        const target = args[0] ? this.pathResolver.resolve(args[0], this.currentPath) : '/home/kali';
        const node = this.vfs.getNode(target);
        if (!node || node.type !== 'dir') return `bash: cd: ${args[0] || target}: No such file or directory`;
        this.currentPath = target;
        this.pathResolver.setCurrentPath(target);
        return '';
      }
      case 'mkdir': {
        if (!args[0]) return 'mkdir: missing operand';
        const target = this.pathResolver.resolve(args[0], this.currentPath);
        if (this.vfs.makeDirectory(target)) {
          this.appState.setVFS(this.vfs.root);
          return '';
        }
        return `mkdir: cannot create directory '${args[0]}'`;
      }
      case 'touch': {
        if (!args[0]) return 'touch: missing file operand';
        const target = this.pathResolver.resolve(args[0], this.currentPath);
        if (this.vfs.makeFile(target)) {
          this.appState.setVFS(this.vfs.root);
          return '';
        }
        return `touch: cannot create file '${args[0]}'`;
      }
      case 'rm': {
        if (!args[0]) return 'rm: missing operand';
        const target = this.pathResolver.resolve(args[0], this.currentPath);
        if (this.vfs.remove(target)) {
          this.appState.setVFS(this.vfs.root);
          return '';
        }
        return `rm: cannot remove '${args[0]}'`;
      }
      case 'cp': {
        if (!args[0] || !args[1]) return 'cp: missing file operand';
        const source = this.pathResolver.resolve(args[0], this.currentPath);
        const target = this.pathResolver.resolve(args[1], this.currentPath);
        if (this.vfs.copy(source, target)) {
          this.appState.setVFS(this.vfs.root);
          return '';
        }
        return `cp: cannot copy '${args[0]}'`;
      }
      case 'mv': {
        if (!args[0] || !args[1]) return 'mv: missing file operand';
        const source = this.pathResolver.resolve(args[0], this.currentPath);
        const target = this.pathResolver.resolve(args[1], this.currentPath);
        if (this.vfs.rename(source, target)) {
          this.appState.setVFS(this.vfs.root);
          return '';
        }
        return `mv: cannot move '${args[0]}'`;
      }
      case 'cat': {
        if (!args[0]) return 'cat: missing file operand';
        const target = this.pathResolver.resolve(args[0], this.currentPath);
        const data = this.vfs.readFile(target);
        return data !== null ? data : `cat: ${args[0]}: No such file`;
      }
      case 'echo': {
        return args.join(' ');
      }
      case 'clear':
        return 'clear';
      case 'history':
        return this.history.join('\n');
      case 'whoami':
        return 'kali';
      case 'date':
        return new Date().toString();
      case 'uname':
        return 'Linux kali 6.1.0';
      case 'id':
        return 'uid=1000(kali) gid=1000(kali) groups=1000(kali)';
      case 'lsblk':
        return 'NAME SIZE TYPE MOUNTPOINT\nsda 20G disk\n├─sda1 1G part /boot\n└─sda2 19G part /';
      case 'apt':
        return 'apt: package manager available';
      case 'nmap':
        return 'Nmap scan completed';
      default:
        return `${definition.command}: command simulated successfully`;
    }
  }
}
