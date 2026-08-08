export class PathResolver {
  constructor(currentPath = '/home/kali') {
    this.currentPath = currentPath;
  }

  setCurrentPath(path) {
    this.currentPath = path;
  }

  resolve(input, currentPath = this.currentPath) {
    if (!input || input === '~') return '/home/kali';
    if (input === '.') return currentPath;
    if (input === '..') {
      const parts = currentPath.split('/').filter(Boolean);
      parts.pop();
      return '/' + (parts.length ? parts.join('/') : '');
    }
    if (input.startsWith('/')) return input;
    const base = currentPath === '/' ? '' : currentPath;
    return (base + '/' + input).replace(/\/+/g, '/');
  }
}
