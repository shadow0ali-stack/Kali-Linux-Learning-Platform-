export class VirtualFileSystem {
  constructor(initialTree) {
    this.root = JSON.parse(JSON.stringify(initialTree));
  }

  normalizePath(path) {
    if (!path || path === '/') return '/';
    let value = path.replace(/\\/g, '/');
    if (!value.startsWith('/')) value = '/' + value;
    value = value.replace(/\/+/g, '/');
    if (value !== '/' && value.endsWith('/')) value = value.slice(0, -1);
    return value;
  }

  getNode(path) {
    const normalized = this.normalizePath(path);
    if (normalized === '/') return this.root;
    const segments = normalized.split('/').filter(Boolean);
    let current = this.root;
    for (const segment of segments) {
      if (!current.children || !current.children[segment]) return null;
      current = current.children[segment];
    }
    return current;
  }

  getParentNode(path) {
    const normalized = this.normalizePath(path);
    if (normalized === '/' || normalized === '') return this.root;
    const segments = normalized.split('/').filter(Boolean);
    if (segments.length <= 1) return this.root;
    segments.pop();
    const parentPath = '/' + segments.join('/');
    return this.getNode(parentPath);
  }

  listDirectory(path) {
    const normalized = this.normalizePath(path);
    const node = this.getNode(normalized);
    if (!node || node.type !== 'dir') return [];
    return Object.keys(node.children || {});
  }

  makeDirectory(path) {
    const normalized = this.normalizePath(path);
    const parent = this.getParentNode(normalized);
    if (!parent || !parent.children) return false;
    const name = normalized.split('/').filter(Boolean).pop();
    if (!name || parent.children[name]) return false;
    parent.children[name] = {
      inode: Date.now() + Math.random(),
      type: 'dir',
      owner: 'kali',
      group: 'kali',
      permissions: '755',
      children: {}
    };
    return true;
  }

  makeFile(path, content = '') {
    const normalized = this.normalizePath(path);
    const parent = this.getParentNode(normalized);
    if (!parent || !parent.children) return false;
    const name = normalized.split('/').filter(Boolean).pop();
    if (!name || parent.children[name]) {
      if (parent.children[name] && parent.children[name].type === 'file') {
        parent.children[name].content = content;
        return true;
      }
      return false;
    }
    parent.children[name] = {
      inode: Date.now() + Math.random(),
      type: 'file',
      owner: 'kali',
      group: 'kali',
      permissions: '644',
      content
    };
    return true;
  }

  readFile(path) {
    const node = this.getNode(path);
    if (!node || node.type !== 'file') return null;
    return node.content || '';
  }

  remove(path) {
    const normalized = this.normalizePath(path);
    const parent = this.getParentNode(normalized);
    if (!parent || !parent.children) return false;
    const name = normalized.split('/').filter(Boolean).pop();
    if (!name || !parent.children[name]) return false;
    delete parent.children[name];
    return true;
  }

  rename(oldPath, newPath) {
    const source = this.getNode(oldPath);
    if (!source) return false;
    const oldParent = this.getParentNode(oldPath);
    const newParent = this.getParentNode(newPath);
    const terminalName = this.normalizePath(newPath).split('/').filter(Boolean).pop();
    if (!newParent || !newParent.children || !terminalName) return false;
    if (newParent.children[terminalName]) return false;
    delete oldParent.children[this.normalizePath(oldPath).split('/').filter(Boolean).pop()];
    newParent.children[terminalName] = source;
    return true;
  }

  copy(sourcePath, targetPath) {
    const source = this.getNode(sourcePath);
    if (!source) return false;
    const targetNode = JSON.parse(JSON.stringify(source));
    const targetParent = this.getParentNode(targetPath);
    const name = this.normalizePath(targetPath).split('/').filter(Boolean).pop();
    if (!targetParent || !targetParent.children || !name) return false;
    if (targetParent.children[name]) return false;
    targetParent.children[name] = targetNode;
    return true;
  }
}
