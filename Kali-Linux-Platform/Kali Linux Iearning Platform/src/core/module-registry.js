export class ModuleRegistry {
  constructor() {
    this.modules = {};
  }

  register(name, instance) {
    this.modules[name] = instance;
  }

  get(name) {
    return this.modules[name];
  }
}
