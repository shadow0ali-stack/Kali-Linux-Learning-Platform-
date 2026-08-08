export class SettingsController {
  constructor(appState) {
    this.appState = appState;
  }

  toggleTheme() {
    const next = !this.appState.getDarkMode();
    this.appState.setDarkMode(next);
    document.body.classList.toggle('dark-mode', next);
    return next;
  }
}
