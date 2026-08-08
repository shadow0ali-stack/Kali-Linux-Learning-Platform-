import { Application } from './core/application.js';
import { StorageManager } from './storage/storage-manager.js';
import { TranslationManager } from './localization/translation-manager.js';
import { LanguageManager } from './localization/language-manager.js';
import { CommandRegistry } from './data/commands/index.js';
import { StageRegistry } from './data/stages/index.js';
import { QuestionBank } from './data/questions/index.js';
import { initialVFS } from './data/filesystem/initial-tree.js';

const app = new Application({
  storage: StorageManager,
  translation: TranslationManager,
  language: LanguageManager,
  commandRegistry: CommandRegistry,
  stageRegistry: StageRegistry,
  questionBank: QuestionBank,
  initialVFS
});

app.start();
