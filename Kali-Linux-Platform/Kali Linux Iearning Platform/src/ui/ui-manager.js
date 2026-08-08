import { TranslationManager } from '../localization/translation-manager.js';
import { StageRegistry } from '../data/stages/index.js';
import { CommandRegistry } from '../data/commands/index.js';

export class UIManager {
  constructor({ appState, translation, language, examEngine, terminalEngine, progressManager, achievementManager, levelManager, controller }) {
    this.appState = appState;
    this.translation = translation;
    this.language = language;
    this.examEngine = examEngine;
    this.terminalEngine = terminalEngine;
    this.progressManager = progressManager;
    this.achievementManager = achievementManager;
    this.levelManager = levelManager;
    this.controller = controller;
    this.currentCommand = null;
    this.currentExam = null;
  }

  init() {
    this.renderStageOptions();
    this.bindEvents();
    this.render();
  }

  renderStageOptions() {
    const select = document.getElementById('moduleSelect');
    if (!select) return;
    select.innerHTML = '';
    StageRegistry.getAllStages().forEach((stage) => {
      const option = document.createElement('option');
      option.value = stage.id;
      option.textContent = `${stage.order}: ${stage.name.ar}`;
      select.appendChild(option);
    });
    select.value = this.appState.getCurrentPhase();
  }

  bindEvents() {
    document.getElementById('langToggle')?.addEventListener('click', () => {
      this.language.toggleLanguage();

      const lang = this.language.getCurrentLanguage();
      this.appState.setLanguage(lang);

      this.renderStageOptions();
      this.render();
    });

    document.getElementById('modeToggle')?.addEventListener('click', () => {
      const next = !this.appState.getDarkMode();
      this.appState.setDarkMode(next);
      document.body.classList.toggle('dark-mode', next);
      this.render();
    });

    document.getElementById('moduleSelect')?.addEventListener('change', (event) => {
      this.appState.setCurrentPhase(event.target.value);
      this.render();
    });

    document.getElementById('resetVFSBtn')?.addEventListener('click', () => {
      const vfs = JSON.parse(JSON.stringify(this.appState.initialVFS));
      this.appState.setVFS(vfs);
      this.showToast('تمت إعادة ضبط VFS فقط.', 'success');
      this.terminalEngine.refreshVFS();
    });

    document.getElementById('resetFullBtn')?.addEventListener('click', () => {
      if (confirm('هل تريد إعادة ضبط كامل؟')) {
        const defaults = {
          currentPhase: 'phase1',
          totalXP: 0,
          mastered: {},
          achievements: {},
          stats: { testsCompleted: 0, totalScore: 0, bestScore: 0, bestStreak: 0, currentStreak: 0, totalTrainingTime: 0, testHistory: [], phaseMastery: {} },
          phaseTests: {},
          midtermPassed: false,
          finalPassed: false,
          vfs: JSON.parse(JSON.stringify(this.appState.initialVFS)),
          darkMode: false,
          language: 'ar'
        };
        this.appState.state = { ...this.appState.state, ...defaults };
        this.appState.saveState();
        this.showToast('تمت إعادة الضبط الكامل.', 'success');
        this.render();
      }
    });

    document.getElementById('startPhaseTestBtn')?.addEventListener('click', () => {
      const stageId = this.appState.getCurrentPhase();
      this.currentExam = this.examEngine.createExam({ type: 'phase', stageId });
      this.renderExamModal();
    });

    document.getElementById('midtermTestBtn')?.addEventListener('click', () => {
      this.currentExam = this.examEngine.createExam({ type: 'midterm', stageId: null });
      this.renderExamModal();
    });

    document.getElementById('finalTestBtn')?.addEventListener('click', () => {
      this.currentExam = this.examEngine.createExam({ type: 'final', stageId: null });
      this.renderExamModal();
    });

    document.getElementById('submitTestBtn')?.addEventListener('click', () => {
      const theoryAnswers = {};
      document.querySelectorAll('[data-question-id]').forEach((element) => {
        const qid = element.dataset.questionId;
        const checked = element.querySelector('input:checked');
        if (checked) theoryAnswers[qid] = checked.value;
      });
      const practicalResults = this.currentExam?.practical.map((question, index) => {
        const value = document.getElementById(`practical-answer-${index}`)?.value || '';
        return value;
      }) || [];

      const result = this.examEngine.submitAnswers(theoryAnswers, practicalResults);
      const state = this.appState.getState();
      state.stats.testsCompleted += 1;
      state.stats.bestScore = Math.max(state.stats.bestScore, result.totalScore);
      state.stats.totalScore += result.totalScore;
      state.stats.bestStreak = Math.max(state.stats.bestStreak, state.stats.currentStreak + 1);
      state.stats.currentStreak = result.success ? state.stats.currentStreak + 1 : 0;
      state.totalXP += Math.round(result.totalScore);
      this.appState.setStats(state.stats);
      this.appState.addXP(Math.round(result.totalScore));
      this.achievementManager.checkAll();
      this.render();

      const resultBox = document.getElementById('testResult');
      resultBox.innerHTML = `النتيجة: ${result.totalScore}/100 — ${result.evaluation.label}`;
      resultBox.className = `test-result ${result.success ? 'pass' : 'fail'}`;
    });

    document.getElementById('closeTestModal')?.addEventListener('click', () => {
      document.getElementById('testModal').style.display = 'none';
    });

    document.getElementById('closeTestBtn')?.addEventListener('click', () => {
      document.getElementById('testModal').style.display = 'none';
    });

    document.getElementById('closeTerminalModal')?.addEventListener('click', () => {
      document.getElementById('terminalModal').style.display = 'none';
    });

    document.getElementById('submitCommandBtn')?.addEventListener('click', () => {
      this.handleTerminalCommand();
    });

    document.getElementById('terminalInput')?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') this.handleTerminalCommand();
    });

    document.getElementById('showHintBtn')?.addEventListener('click', () => {
      const hintTarget = document.getElementById('missionHint');
      if (this.currentCommand) {
        hintTarget.textContent = `تلميح: جرب: ${this.currentCommand.command}`;
      }
    });

    document.getElementById('closeHelpModal')?.addEventListener('click', () => {
      document.getElementById('helpModal').style.display = 'none';
    });

    document.getElementById('closeStatsModal')?.addEventListener('click', () => {
      document.getElementById('statsModal').style.display = 'none';
    });

    const statsSummary = document.getElementById('totalAchievements');
    statsSummary?.addEventListener('click', () => {
      this.renderStatsDetails();
      document.getElementById('statsModal').style.display = 'flex';
    });
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const translated = this.translation.t(key);
      if (translated !== undefined && translated !== null) {
        element.textContent = translated;
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach((element) => {
      const key = element.dataset.i18nTitle;
      const translated = this.translation.t(key);
      if (translated !== undefined && translated !== null) {
        element.setAttribute('title', translated);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const translated = this.translation.t(key);
      if (translated !== undefined && translated !== null) {
        element.setAttribute('placeholder', translated);
      }
    });
  }

  render() {
    const phase = this.appState.getCurrentPhase();
    const commands = CommandRegistry.getByStage(phase);
    const mastered = this.appState.getMastered(phase) || [];
    const completedCount = mastered.length;
    const percent = commands.length ? Math.round((completedCount / commands.length) * 100) : 0;

    document.getElementById('moduleSelect').value = phase;
    document.getElementById('totalXPDisplay').textContent = `${this.appState.getTotalXP()} XP`;
    document.getElementById('phaseMastered').textContent = `${completedCount}`;
    document.getElementById('phaseTotal').textContent = `${commands.length}`;
    document.getElementById('phaseProgressFill').style.width = `${percent}%`;
    document.getElementById('phaseProgressPercent').textContent = `${percent}%`;
    document.getElementById('totalAchievements').textContent = `${Object.keys(this.appState.getAchievements()).length}`;
    const level = this.levelManager.getLevel();
    document.getElementById('userLevel').textContent = level.label;
    document.getElementById('completedTests').textContent = this.appState.getStats().testsCompleted || 0;
    document.getElementById('bestStreak').textContent = this.appState.getStats().bestStreak || 0;
    document.getElementById('totalTrainingTime').textContent =
      `${this.appState.getStats().totalTrainingTime || 0} ${this.translation.t('app.minutes')}`;

    const grid = document.getElementById('commandsGrid');
    grid.innerHTML = '';
    commands.forEach((command) => {
      const card = document.createElement('div');
      card.className = 'command-card';
      const isMastered = mastered.includes(command.id);
      const lang = this.appState.getLanguage();
      card.innerHTML = `
        <div class="command-card-header">
          <span class="command-name">${command.command}</span>
          <button class="mini-btn" data-help="${command.id}">?</button>
        </div>
        <div class="usage-text">${command.usage?.[lang] ?? command.usage?.ar ?? ''}</div>
        <div class="command-meta">${command.syntax}</div>
        <div class="command-actions">
          <button class="btn outline" data-terminal="${command.id}">
            ${
              isMastered
                ? this.translation.t('app.mastered')
                : this.translation.t('app.openTerminal')
            }
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll('[data-help]').forEach((button) => {
      button.addEventListener('click', () => {
        const command = CommandRegistry.get(button.dataset.help);
        this.showHelp(command);
      });
    });

    grid.querySelectorAll('[data-terminal]').forEach((button) => {
      button.addEventListener('click', () => {
        const command = CommandRegistry.get(button.dataset.terminal);
        this.openTerminal(command);
      });
    });

    document.body.classList.toggle('dark-mode', this.appState.getDarkMode());
    document.getElementById('langToggleLabel').textContent = this.appState.getLanguage() === 'ar' ? 'EN' : 'AR';
  }

  openTerminal(command) {
    this.currentCommand = command;
    const lang = this.appState.getLanguage();
    const modal = document.getElementById('terminalModal');

    document.getElementById('missionTitle').textContent = `🎯 ${command.command}`;
    document.getElementById('missionDesc').textContent =
      command.description?.[lang] ?? command.description?.ar ?? '';
    document.getElementById('missionUsage').textContent =
      command.usage?.[lang] ?? command.usage?.ar ?? '';
    document.getElementById('missionHint').textContent =
      command.examples?.[0] ??
      this.translation.t('app.useCommandAccordingToInfo');

    document.getElementById('terminalOutput').innerHTML =
      'kali@kali:~$ ' + command.command;
    document.getElementById('terminalInput').value = '';
    modal.style.display = 'flex';
  }

  showHelp(command) {
    const lang = this.appState.getLanguage();
    const modal = document.getElementById('helpModal');
    const content = document.getElementById('helpContent');

    const description =
      command.description?.[lang] ?? command.description?.ar ?? '';
    const options =
      command.options?.join(', ') || this.translation.t('app.noOptions');
    const examples =
      command.examples?.join(' · ') || this.translation.t('app.noExamples');

    content.innerHTML = `
      <h4>${command.command}</h4>
      <p><strong>${this.translation.t('app.description')}:</strong> ${description}</p>
      <p><strong>${this.translation.t('app.usage')}:</strong> ${command.syntax}</p>
      <p><strong>${this.translation.t('app.options')}:</strong> ${options}</p>
      <p><strong>${this.translation.t('app.examples')}:</strong> ${examples}</p>
    `;

    document.getElementById('helpTitle').textContent = `📖 ${command.command}`;
    modal.style.display = 'flex';
  }

  handleTerminalCommand() {
    const input = document.getElementById('terminalInput').value;
    const output = this.terminalEngine.execute(input);
    const terminalOutput = document.getElementById('terminalOutput');
    terminalOutput.innerHTML += `\n${this.terminalEngine.currentPath} $ ${input}\n${output}`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    document.getElementById('terminalInput').value = '';
    if (this.currentCommand && input && input.trim().toLowerCase() === this.currentCommand.command.toLowerCase()) {
      const phase = this.appState.getCurrentPhase();
      const mastered = this.appState.getMastered(phase) || [];
      if (!mastered.includes(this.currentCommand.id)) {
        mastered.push(this.currentCommand.id);
        this.appState.setMastered(phase, mastered);
      }
      this.showToast('✅ تم تنفيذ الأمر بنجاح', 'success');
      this.appState.addXP(5);
      this.render();
    }
  }

  renderExamModal() {
    if (!this.currentExam) return;

    const lang = this.appState.getLanguage();
    const modal = document.getElementById('testModal');
    const content = document.getElementById('testContent');

    content.innerHTML = '';

    this.currentExam.theoretical.forEach((question, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'test-question';
      wrapper.dataset.questionId = question.id;

      const options = this.shuffle(
        question.options?.[lang] ?? question.options?.ar ?? []
      );
      const questionText =
        question.question?.[lang] ?? question.question?.ar ?? '';

      wrapper.innerHTML = `
        <p><strong>${index + 1}. ${questionText}</strong></p>
        <div class="test-options">
          ${options.map((option) => `
            <label>
              <input type="radio" name="q-${question.id}" value="${option}" />
              ${option}
            </label>
          `).join('')}
        </div>
      `;
      content.appendChild(wrapper);
    });

    this.currentExam.practical.forEach((question, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'test-question';

      const prompt =
        question.prompt?.[lang] ?? question.prompt?.ar ?? '';

      wrapper.innerHTML = `
        <p><strong>${index + 1}. ${prompt}</strong></p>
        <input
          id="practical-answer-${index}"
          type="text"
          class="answer-input"
          placeholder="${this.translation.t('app.placeholder')}"
        />
      `;
      content.appendChild(wrapper);
    });

    modal.style.display = 'flex';
  }

  shuffle(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  renderStatsDetails() {
    const stats = this.appState.getStats();
    const details = document.getElementById('statsDetailed');
    details.innerHTML = `
      <p>عدد الاختبارات: ${stats.testsCompleted || 0}</p>
      <p>أعلى درجة: ${stats.bestScore || 0}</p>
      <p>أفضل سلسلة: ${stats.bestStreak || 0}</p>
      <p>إجمالي XP: ${this.appState.getTotalXP()}</p>
    `;
  }
}
