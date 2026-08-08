export class TerminalController {
  constructor(appState) {
    this.appState = appState;
  }

  execute(input) {
    return { input, status: 'executed' };
  }
}
