// ============================================================
//  الترجمة (بنية هرمية) - تم إضافة مفاتيح جديدة للإحصائيات والإنجازات
// ============================================================
const translations = {
  ar: {
    app: {
      title: 'منصة تعلم Linux/Kali التفاعلية',
      nightMode: 'الوضع الليلي',
      phaseLabel: '📚 المرحلة:',
      reset: 'إعادة ضبط النظام',
      resetFull: 'إعادة ضبط كامل',
      startPhaseTest: 'اختبار المرحلة',
      phaseProgressLabel: '📊 تقدم المرحلة:',
      phaseStatsPrefix: 'أتقنت',
      phaseStatsOf: 'من',
      phaseStatsSuffix: 'أمر',
      midtermTest: 'اختبار نصفي (بعد المرحلة 4)',
      finalTest: 'اختبار نهائي',
      submitTest: 'إرسال الإجابات',
      closeTest: 'إغلاق',
      execute: 'تنفيذ',
      hint: 'تلميح',
      testPassed: '✅ نجحت! +{xp} XP',
      testFailed: '❌ لم تنجح. حاول مجدداً.',
      theoretical: '🧠 جزء نظري (8 أسئلة، 40 درجة)',
      practical: '💻 جزء عملي (7 مهام، 60 درجة)',
      commandRequired: 'نفذ الأمر التالي في الطرفية:',
      correctAnswer: 'الإجابة الصحيحة:',
      chooseOption: 'اختر الإجابة الصحيحة:',
      question: 'سؤال',
      of: 'من',
      testComplete: 'اكتمل الاختبار!',
      phaseTestTitle: 'اختبار المرحلة {phase}',
      midtermTestTitle: 'اختبار نصفي شامل (المراحل 1-4)',
      finalTestTitle: 'اختبار نهائي شامل (جميع المراحل)',
      mission: 'مهمة',
      usage: 'متى تستخدم',
      try: 'جرّب',
      mastered: 'أتقنت',
      masterIt: 'أتقنت؟',
      confirmReset: 'هل تريد إعادة ضبط نظام الملفات الافتراضي؟',
      confirmResetFull: 'هل تريد إعادة ضبط النظام بالكامل؟ سيتم حذف جميع البيانات والإنجازات والإحصائيات. هذا الإجراء لا يمكن التراجع عنه.',
      resetDone: 'تمت إعادة الضبط.',
      resetFullDone: 'تمت إعادة الضبط الكامل.',
      correctCommand: '✅ أمر صحيح!',
      wrongCommand: '❌ أمر خاطئ.',
      hintText: '💡 اكتب الأمر كما هو مطلوب.',
      openTerminal: 'فتح الطرفية',
      practicalPassed: '✅ اجتزت الجزء العملي!',
      practicalFailed: '❌ لم تجتز الجزء العملي.',
      theory: 'نظري',
      executeCommand: 'نفذ الأمر: {cmd}',
      close: 'إغلاق',
      noQuestions: 'لا توجد أسئلة كافية لهذه المرحلة.',
      achievements: '🏆 الإنجازات',
      manTitle: 'دليل الأمر {cmd}',
      manSyntax: 'الصيغة: {syntax}',
      manDesc: 'الوصف: {desc}',
      manOptions: 'الخيارات:',
      manExamples: 'أمثلة:',
      noMan: 'لا توجد معلومات إضافية لهذا الأمر.',
      achievementUnlocked: '🎉 إنجاز جديد: {name} (+{xp} XP)',
      practicalProgress: 'تقدم العملي: {solved} من {total}',
      stats: '📊 الإحصائيات',
      level: 'المستوى',
      expert: 'خبير',
      advanced: 'متقدم',
      proficient: 'جيد جداً',
      pass: 'جيد',
      fail: 'يحتاج إلى مراجعة',
      totalTests: 'عدد الاختبارات',
      avgScore: 'متوسط الدرجات',
      phasesMastered: 'المراحل المتقنة',
      commandsLearned: 'الأوامر المتعلمة',
      bestStreak: 'أفضل سلسلة نجاح',
      trainingTime: 'وقت التدريب',
      phaseProgress: 'تقدم المراحل',
      noStats: 'لا توجد إحصائيات بعد، قم بإجراء اختباراتك الأولى.',
      viewStats: 'عرض الإحصائيات',
    },
    commands: {
      less: { desc: 'عرض ملف بالتدريج', usage: 'لقراءة ملفات طويلة بصفحات.', syntax: 'less [file]', options: [], examples: ['less file.txt'] },
      more: { desc: 'عرض ملف بالتدريج (أقدم)', usage: 'مشابه لـ less لكن أقدم.', syntax: 'more [file]', options: [], examples: ['more file.txt'] },
    }
  },
  en: {
    app: {
      title: 'Interactive Linux/Kali Learning Platform',
      nightMode: 'Night Mode',
      phaseLabel: '📚 Phase:',
      reset: 'Reset System',
      resetFull: 'Full Reset',
      startPhaseTest: 'Phase Test',
      phaseProgressLabel: '📊 Phase Progress:',
      phaseStatsPrefix: 'Mastered',
      phaseStatsOf: 'of',
      phaseStatsSuffix: 'commands',
      midtermTest: 'Midterm Test (after phase 4)',
      finalTest: 'Final Test (all phases)',
      submitTest: 'Submit Answers',
      closeTest: 'Close',
      execute: 'Execute',
      hint: 'Hint',
      testPassed: '✅ Passed! +{xp} XP',
      testFailed: '❌ Failed. Try again.',
      theoretical: '🧠 Theoretical part (8 questions, 40 points)',
      practical: '💻 Practical part (7 tasks, 60 points)',
      commandRequired: 'Execute the following command in the terminal:',
      correctAnswer: 'Correct answer:',
      chooseOption: 'Choose the correct answer:',
      question: 'Question',
      of: 'of',
      testComplete: 'Test completed!',
      phaseTestTitle: 'Phase {phase} Test',
      midtermTestTitle: 'Midterm Comprehensive Test (Phases 1-4)',
      finalTestTitle: 'Final Comprehensive Test (All Phases)',
      mission: 'Mission',
      usage: 'When to use',
      try: 'Try',
      mastered: 'Mastered',
      masterIt: 'Master?',
      confirmReset: 'Do you want to reset the virtual file system?',
      confirmResetFull: 'Do you want to fully reset the system? All data, achievements, and statistics will be deleted. This action is irreversible.',
      resetDone: 'Reset done.',
      resetFullDone: 'Full reset done.',
      correctCommand: '✅ Correct command!',
      wrongCommand: '❌ Wrong command.',
      hintText: '💡 Type the command as required.',
      openTerminal: 'Open Terminal',
      practicalPassed: '✅ You passed the practical part!',
      practicalFailed: '❌ You failed the practical part.',
      theory: 'Theory',
      executeCommand: 'Execute command: {cmd}',
      close: 'Close',
      noQuestions: 'Not enough questions for this phase.',
      achievements: '🏆 Achievements',
      manTitle: 'Manual for {cmd}',
      manSyntax: 'Syntax: {syntax}',
      manDesc: 'Description: {desc}',
      manOptions: 'Options:',
      manExamples: 'Examples:',
      noMan: 'No additional information for this command.',
      achievementUnlocked: '🎉 New achievement: {name} (+{xp} XP)',
      practicalProgress: 'Practical progress: {solved} of {total}',
      stats: '📊 Statistics',
      level: 'Level',
      expert: 'Expert',
      advanced: 'Advanced',
      proficient: 'Proficient',
      pass: 'Pass',
      fail: 'Needs Review',
      totalTests: 'Total Tests',
      avgScore: 'Average Score',
      phasesMastered: 'Phases Mastered',
      commandsLearned: 'Commands Learned',
      bestStreak: 'Best Streak',
      trainingTime: 'Training Time',
      phaseProgress: 'Phase Progress',
      noStats: 'No statistics yet, take your first tests.',
      viewStats: 'View Statistics',
    },
    commands: {
      less: { desc: 'View file paginated', usage: 'Read long files page by page.', syntax: 'less [file]', options: [], examples: ['less file.txt'] },
      more: { desc: 'View file paginated (older)', usage: 'Similar to less but older.', syntax: 'more [file]', options: [], examples: ['more file.txt'] },
    }
  }
};

let currentLang = 'ar';
function t(key, vars = {}) {
  const parts = key.split('.');
  let obj = translations[currentLang];
  for (let p of parts) {
    if (obj && obj[p]) obj = obj[p];
    else return key;
  }
  let text = typeof obj === 'string' ? obj : key;
  for (let k in vars) text = text.replace(`{${k}}`, vars[k]);
  return text;
}

const storedLang = localStorage.getItem('appLang') || 'ar';
if (['ar', 'en'].includes(storedLang)) currentLang = storedLang;

// ============================================================
//  قاعدة الأوامر (موسعة مع إضافة less و more) - نفس النسخة السابقة
// ============================================================
const commandData = {
  pwd: { desc: { ar: 'طباعة مسار العمل الحالي', en: 'Print current working directory' }, usage: { ar: 'لمعرفة أين أنت في نظام الملفات.', en: 'Know your current location.' }, syntax: 'pwd', options: [], examples: ['pwd'] },
  ls: { desc: { ar: 'عرض محتويات المجلد', en: 'List directory contents' }, usage: { ar: 'لاستعراض الملفات والمجلدات.', en: 'Browse files and folders.' }, syntax: 'ls [options] [path]', options: ['-l: عرض تفصيلي', '-a: عرض الملفات المخفية', '-la: كليهما'], examples: ['ls', 'ls -la', 'ls /home'] },
  'ls -la': { desc: { ar: 'عرض مفصل مع الملفات المخفية', en: 'Detailed list with hidden files' }, usage: { ar: 'لرؤية الصلاحيات والمالك.', en: 'View permissions and owner.' }, syntax: 'ls -la [path]', options: [], examples: ['ls -la'] },
  cd: { desc: { ar: 'تغيير الدليل', en: 'Change directory' }, usage: { ar: 'للتنقل بين المجلدات.', en: 'Navigate folders.' }, syntax: 'cd [path]', options: [], examples: ['cd /home', 'cd ..', 'cd ~'] },
  mkdir: { desc: { ar: 'إنشاء مجلد جديد', en: 'Create new directory' }, usage: { ar: 'لتنظيم الملفات.', en: 'Organize files.' }, syntax: 'mkdir [name]', options: ['-p: إنشاء مجلدات وسيطة'], examples: ['mkdir newfolder', 'mkdir -p a/b/c'] },
  rmdir: { desc: { ar: 'حذف مجلد فارغ', en: 'Remove empty directory' }, usage: { ar: 'لإزالة مجلد غير مستخدم.', en: 'Remove unused folder.' }, syntax: 'rmdir [name]', options: [], examples: ['rmdir emptyfolder'] },
  touch: { desc: { ar: 'إنشاء ملف فارغ', en: 'Create empty file' }, usage: { ar: 'لإنشاء ملفات جديدة.', en: 'Create new files.' }, syntax: 'touch [file]', options: [], examples: ['touch file.txt'] },
  rm: { desc: { ar: 'حذف ملف أو مجلد', en: 'Remove file or directory' }, usage: { ar: 'لإزالة ملفات غير ضرورية بحذر.', en: 'Remove unwanted files carefully.' }, syntax: 'rm [options] [file]', options: ['-r: حذف مجلد ومحتوياته', '-f: قسري'], examples: ['rm file.txt', 'rm -r folder'] },
  cp: { desc: { ar: 'نسخ ملف/مجلد', en: 'Copy file/directory' }, usage: { ar: 'لعمل نسخة احتياطية.', en: 'Make backup.' }, syntax: 'cp [source] [dest]', options: ['-r: نسخ مجلد'], examples: ['cp file.txt backup.txt', 'cp -r folder backup'] },
  mv: { desc: { ar: 'نقل أو إعادة تسمية', en: 'Move or rename' }, usage: { ar: 'لتنظيم الملفات.', en: 'Organize files.' }, syntax: 'mv [source] [dest]', options: [], examples: ['mv file.txt newname.txt', 'mv file.txt folder/'] },
  cat: { desc: { ar: 'عرض محتوى ملف', en: 'Display file content' }, usage: { ar: 'قراءة ملف نصي بسرعة.', en: 'Quickly read text files.' }, syntax: 'cat [file]', options: [], examples: ['cat file.txt'] },
  less: { desc: { ar: 'عرض ملف بالتدريج', en: 'View file paginated' }, usage: { ar: 'لقراءة ملفات طويلة بصفحات.', en: 'Read long files page by page.' }, syntax: 'less [file]', options: [], examples: ['less file.txt'] },
  more: { desc: { ar: 'عرض ملف بالتدريج (أقدم)', en: 'View file paginated (older)' }, usage: { ar: 'مشابه لـ less لكن أقدم.', en: 'Similar to less but older.' }, syntax: 'more [file]', options: [], examples: ['more file.txt'] },
  grep: { desc: { ar: 'البحث داخل الملفات', en: 'Search inside files' }, usage: { ar: 'لاستخراج أسطر تحتوي على كلمة.', en: 'Extract lines containing a word.' }, syntax: 'grep [pattern] [file]', options: ['-i: تجاهل الحالة', '-r: بحث متكرر', '-n: عرض رقم السطر'], examples: ['grep root /etc/passwd', 'grep -i error log.txt'] },
  head: { desc: { ar: 'عرض أول 10 أسطر', en: 'Show first 10 lines' }, usage: { ar: 'لمعاينة بداية ملف.', en: 'Preview file start.' }, syntax: 'head [file]', options: ['-n: عدد الأسطر'], examples: ['head file.txt', 'head -n 20 file.txt'] },
  tail: { desc: { ar: 'عرض آخر 10 أسطر', en: 'Show last 10 lines' }, usage: { ar: 'لمشاهدة آخر الأحداث.', en: 'View latest events.' }, syntax: 'tail [file]', options: ['-n: عدد الأسطر', '-f: متابعة'], examples: ['tail log.txt', 'tail -f log.txt'] },
  echo: { desc: { ar: 'طباعة نص', en: 'Print text' }, usage: { ar: 'لإظهار رسائل.', en: 'Display messages.' }, syntax: 'echo [text]', options: [], examples: ['echo "Hello"'] },
  clear: { desc: { ar: 'مسح الشاشة', en: 'Clear screen' }, usage: { ar: 'عندما تصبح الطرفية مزدحمة.', en: 'When terminal is cluttered.' }, syntax: 'clear', options: [], examples: ['clear'] },
  history: { desc: { ar: 'عرض سجل الأوامر', en: 'Show command history' }, usage: { ar: 'لتذكر أمر سابق.', en: 'Recall previous command.' }, syntax: 'history', options: [], examples: ['history'] },
  find: { desc: { ar: 'البحث عن ملفات', en: 'Find files' }, usage: { ar: 'للعثور على ملف بالاسم.', en: 'Find file by name.' }, syntax: 'find [path] [options]', options: ['-name: بالاسم', '-type: بالنوع', '-size: بالحجم'], examples: ['find / -name "*.txt"'] },
  sort: { desc: { ar: 'ترتيب الأسطر', en: 'Sort lines' }, usage: { ar: 'لترتيب مخرجات أمر.', en: 'Sort command output.' }, syntax: 'sort [file]', options: ['-n: عددي', '-r: عكسي'], examples: ['sort file.txt'] },
  uniq: { desc: { ar: 'إزالة التكرار', en: 'Remove duplicates' }, usage: { ar: 'لحذف الأسطر المكررة.', en: 'Remove duplicate lines.' }, syntax: 'uniq [file]', options: [], examples: ['uniq file.txt'] },
  wc: { desc: { ar: 'عدّ الأسطر والكلمات', en: 'Count lines and words' }, usage: { ar: 'لمعرفة حجم ملف نصي.', en: 'Check text file size.' }, syntax: 'wc [file]', options: ['-l: أسطر', '-w: كلمات', '-c: بايت'], examples: ['wc file.txt'] },
  cut: { desc: { ar: 'قص أجزاء من النص', en: 'Cut parts of text' }, usage: { ar: 'لاستخراج عمود معين.', en: 'Extract specific column.' }, syntax: 'cut -d [delimiter] -f [field] [file]', options: ['-d: المحدد', '-f: الحقل'], examples: ['cut -d: -f1 /etc/passwd'] },
  tr: { desc: { ar: 'ترجمة أو حذف أحرف', en: 'Translate or delete characters' }, usage: { ar: 'لتغيير حالة الأحرف.', en: 'Change character case.' }, syntax: 'tr [set1] [set2]', options: [], examples: ['echo "hello" | tr a-z A-Z'] },
  sed: { desc: { ar: 'محرر نصوص تدفقي', en: 'Stream editor' }, usage: { ar: 'لإجراء تعديلات سريعة.', en: 'Quick text modifications.' }, syntax: 'sed [options] [script] [file]', options: ['-i: تعديل مباشر'], examples: ['sed "s/old/new/g" file.txt'] },
  awk: { desc: { ar: 'معالج نصوص قوي', en: 'Powerful text processor' }, usage: { ar: 'للتعامل مع البيانات الجدولية.', en: 'Handle tabular data.' }, syntax: 'awk [pattern] { action } [file]', options: [], examples: ['awk \'{print $1}\' file.txt'] },
  xargs: { desc: { ar: 'بناء أوامر من المدخلات', en: 'Build commands from input' }, usage: { ar: 'لتمرير نتائج أمر كوسائط.', en: 'Pass command output as arguments.' }, syntax: 'xargs [command]', options: [], examples: ['find . -name "*.txt" | xargs rm'] },
  which: { desc: { ar: 'إظهار مسار أمر', en: 'Show command path' }, usage: { ar: 'لمعرفة مكان برنامج.', en: 'Find program location.' }, syntax: 'which [command]', options: [], examples: ['which ls'] },
  whereis: { desc: { ar: 'تحديد موقع برنامج', en: 'Locate program' }, usage: { ar: 'للعثور على ملفات البرنامج.', en: 'Find program files.' }, syntax: 'whereis [command]', options: [], examples: ['whereis ls'] },
  nano: { desc: { ar: 'محرر نصوص بسيط', en: 'Simple text editor' }, usage: { ar: 'لتعديل ملفات الإعدادات.', en: 'Edit config files.' }, syntax: 'nano [file]', options: [], examples: ['nano file.txt'] },
  vim: { desc: { ar: 'محرر نصوص متقدم', en: 'Advanced text editor' }, usage: { ar: 'للمستخدمين المحترفين.', en: 'For power users.' }, syntax: 'vim [file]', options: [], examples: ['vim file.txt'] },
  uname: { desc: { ar: 'معلومات النظام', en: 'System information' }, usage: { ar: 'لمعرفة إصدار النواة.', en: 'Check kernel version.' }, syntax: 'uname [options]', options: ['-a: كل المعلومات'], examples: ['uname -a'] },
  hostname: { desc: { ar: 'عرض اسم المضيف', en: 'Show hostname' }, usage: { ar: 'لتحديد هوية الجهاز.', en: 'Identify device.' }, syntax: 'hostname', options: [], examples: ['hostname'] },
  uptime: { desc: { ar: 'مدة تشغيل النظام', en: 'System uptime' }, usage: { ar: 'كم مضى على آخر إعادة تشغيل.', en: 'Since last reboot.' }, syntax: 'uptime', options: [], examples: ['uptime'] },
  date: { desc: { ar: 'التاريخ والوقت', en: 'Date and time' }, usage: { ar: 'لعرض الوقت الحالي.', en: 'Show current time.' }, syntax: 'date', options: [], examples: ['date'] },
  cal: { desc: { ar: 'التقويم', en: 'Calendar' }, usage: { ar: 'لرؤية تقويم سريع.', en: 'Quick calendar view.' }, syntax: 'cal', options: [], examples: ['cal'] },
  id: { desc: { ar: 'معلومات المستخدم', en: 'User information' }, usage: { ar: 'للتأكد من هويتك.', en: 'Confirm identity.' }, syntax: 'id', options: [], examples: ['id'] },
  who: { desc: { ar: 'المستخدمون الحاليون', en: 'Current users' }, usage: { ar: 'معرفة من سجل الدخول.', en: 'See logged-in users.' }, syntax: 'who', options: [], examples: ['who'] },
  whoami: { desc: { ar: 'اسم المستخدم الحالي', en: 'Current username' }, usage: { ar: 'تأكيد هوية المستخدم.', en: 'Confirm username.' }, syntax: 'whoami', options: [], examples: ['whoami'] },
  w: { desc: { ar: 'نشاط المستخدمين', en: 'User activity' }, usage: { ar: 'تفاصيل إضافية.', en: 'More details.' }, syntax: 'w', options: [], examples: ['w'] },
  users: { desc: { ar: 'أسماء المستخدمين النشطين', en: 'Active usernames' }, usage: { ar: 'عرض سريع.', en: 'Quick view.' }, syntax: 'users', options: [], examples: ['users'] },
  groups: { desc: { ar: 'مجموعات المستخدم', en: 'User groups' }, usage: { ar: 'لمعرفة مجموعاتك.', en: 'Know your groups.' }, syntax: 'groups', options: [], examples: ['groups'] },
  passwd: { desc: { ar: 'تغيير كلمة المرور', en: 'Change password' }, usage: { ar: 'لتحديث كلمة السر.', en: 'Update password.' }, syntax: 'passwd', options: [], examples: ['passwd'] },
  sudo: { desc: { ar: 'تنفيذ أوامر بصلاحيات مرتفعة', en: 'Execute with elevated privileges' }, usage: { ar: 'عند الحاجة لصلاحيات إدارية.', en: 'When admin rights needed.' }, syntax: 'sudo [command]', options: [], examples: ['sudo apt update'] },
  su: { desc: { ar: 'تبديل المستخدم', en: 'Switch user' }, usage: { ar: 'للتبديل إلى حساب آخر.', en: 'Switch to another account.' }, syntax: 'su [username]', options: [], examples: ['su root'] },
  env: { desc: { ar: 'متغيرات البيئة', en: 'Environment variables' }, usage: { ar: 'لعرض المتغيرات.', en: 'View variables.' }, syntax: 'env', options: [], examples: ['env'] },
  export: { desc: { ar: 'تعيين متغير بيئة', en: 'Set environment variable' }, usage: { ar: 'لجعل متغير متاح.', en: 'Make variable available.' }, syntax: 'export VAR=value', options: [], examples: ['export PATH=$PATH:/newpath'] },
  alias: { desc: { ar: 'اختصار أمر', en: 'Command alias' }, usage: { ar: 'لإنشاء أوامر مخصصة.', en: 'Create custom commands.' }, syntax: 'alias name="command"', options: [], examples: ['alias ll="ls -la"'] },
  unalias: { desc: { ar: 'إلغاء اختصار', en: 'Remove alias' }, usage: { ar: 'لإزالة alias.', en: 'Remove alias.' }, syntax: 'unalias [name]', options: [], examples: ['unalias ll'] },
  ps: { desc: { ar: 'عرض العمليات', en: 'Show processes' }, usage: { ar: 'لمراقبة البرامج قيد التشغيل.', en: 'Monitor running programs.' }, syntax: 'ps [options]', options: ['-aux: كل العمليات'], examples: ['ps aux'] },
  top: { desc: { ar: 'مراقبة حية', en: 'Live monitoring' }, usage: { ar: 'لمتابعة أداء النظام.', en: 'Monitor system performance.' }, syntax: 'top', options: [], examples: ['top'] },
  htop: { desc: { ar: 'نسخة محسنة من top', en: 'Enhanced top' }, usage: { ar: 'واجهة ملونة.', en: 'Colorful interface.' }, syntax: 'htop', options: [], examples: ['htop'] },
  kill: { desc: { ar: 'إنهاء عملية', en: 'Kill process' }, usage: { ar: 'لإيقاف برنامج لا يستجيب.', en: 'Stop unresponsive program.' }, syntax: 'kill [PID]', options: ['-9: قسري'], examples: ['kill 1234'] },
  killall: { desc: { ar: 'إنهاء عمليات بالاسم', en: 'Kill processes by name' }, usage: { ar: 'لقتل كل العمليات باسم معين.', en: 'Kill all processes with name.' }, syntax: 'killall [name]', options: [], examples: ['killall firefox'] },
  jobs: { desc: { ar: 'عرض وظائف الخلفية', en: 'Show background jobs' }, usage: { ar: 'لمعرفة العمليات في الخلفية.', en: 'List background processes.' }, syntax: 'jobs', options: [], examples: ['jobs'] },
  bg: { desc: { ar: 'استئناف وظيفة في الخلفية', en: 'Resume job in background' }, usage: { ar: 'لتشغيل أمر معلق.', en: 'Run suspended job.' }, syntax: 'bg [job]', options: [], examples: ['bg %1'] },
  fg: { desc: { ar: 'إعادة وظيفة للأمام', en: 'Bring job to foreground' }, usage: { ar: 'لإرجاع أمر للواجهة.', en: 'Bring job to foreground.' }, syntax: 'fg [job]', options: [], examples: ['fg %1'] },
  nice: { desc: { ar: 'تشغيل أمر بأولوية', en: 'Run with priority' }, usage: { ar: 'لتحديد أولوية.', en: 'Set priority.' }, syntax: 'nice -n [value] [command]', options: [], examples: ['nice -n 10 ls'] },
  renice: { desc: { ar: 'تغيير أولوية عملية', en: 'Change process priority' }, usage: { ar: 'لتعديل أولوية قيد التشغيل.', en: 'Change running priority.' }, syntax: 'renice [value] -p [PID]', options: [], examples: ['renice 5 -p 1234'] },
  nohup: { desc: { ar: 'تشغيل أمر محصن', en: 'Run immune to hangups' }, usage: { ar: 'للحماية من قطع الاتصال.', en: 'Protect from disconnect.' }, syntax: 'nohup [command] &', options: [], examples: ['nohup python script.py &'] },
  ip: { desc: { ar: 'إدارة الشبكات', en: 'Network management' }, usage: { ar: 'لعرض وإعداد واجهات الشبكة.', en: 'View and configure network.' }, syntax: 'ip [command]', options: ['addr: عنوان', 'link: واجهات'], examples: ['ip addr'] },
  ifconfig: { desc: { ar: 'إعدادات واجهات الشبكة', en: 'Network interface config' }, usage: { ar: 'لعرض أو تعديل IP.', en: 'View or modify IP.' }, syntax: 'ifconfig [interface]', options: [], examples: ['ifconfig eth0'] },
  ping: { desc: { ar: 'اختبار الاتصال', en: 'Test connectivity' }, usage: { ar: 'لمعرفة إذا كان جهاز متصل.', en: 'Check device reachability.' }, syntax: 'ping [host]', options: ['-c: عدد الحزم'], examples: ['ping google.com'] },
  traceroute: { desc: { ar: 'مسار الحزم', en: 'Packet route' }, usage: { ar: 'لتحديد المسار.', en: 'Determine route.' }, syntax: 'traceroute [host]', options: [], examples: ['traceroute google.com'] },
  route: { desc: { ar: 'جدول التوجيه', en: 'Routing table' }, usage: { ar: 'لعرض أو تعديل التوجيه.', en: 'View or modify routing.' }, syntax: 'route [options]', options: ['-n: رقمي'], examples: ['route -n'] },
  arp: { desc: { ar: 'جدول ARP', en: 'ARP table' }, usage: { ar: 'لعرض عناوين MAC.', en: 'View MAC addresses.' }, syntax: 'arp [options]', options: ['-a: كل'], examples: ['arp -a'] },
  ss: { desc: { ar: 'فحص المنافذ', en: 'Socket stats' }, usage: { ar: 'لمعرفة المنافذ المفتوحة.', en: 'Check open ports.' }, syntax: 'ss [options]', options: ['-t: TCP', '-u: UDP', '-l: استماع'], examples: ['ss -tuln'] },
  netstat: { desc: { ar: 'إحصائيات الشبكة', en: 'Network statistics' }, usage: { ar: 'لعرض الاتصالات.', en: 'Show connections.' }, syntax: 'netstat [options]', options: ['-tuln: منافذ'], examples: ['netstat -tuln'] },
  dig: { desc: { ar: 'استعلام DNS', en: 'DNS query' }, usage: { ar: 'لاستعلام خوادم DNS.', en: 'Query DNS servers.' }, syntax: 'dig [domain]', options: [], examples: ['dig google.com'] },
  nslookup: { desc: { ar: 'استعلام DNS بسيط', en: 'Simple DNS query' }, usage: { ar: 'للبحث عن عناوين IP.', en: 'Lookup IP addresses.' }, syntax: 'nslookup [domain]', options: [], examples: ['nslookup google.com'] },
  host: { desc: { ar: 'بحث DNS مبسط', en: 'Simple DNS lookup' }, usage: { ar: 'لعرض عنوان IP.', en: 'Show IP address.' }, syntax: 'host [domain]', options: [], examples: ['host google.com'] },
  curl: { desc: { ar: 'نقل البيانات', en: 'Data transfer' }, usage: { ar: 'للتفاعل مع APIs.', en: 'Interact with APIs.' }, syntax: 'curl [options] [url]', options: ['-O: حفظ كملف', '-L: متابعة'], examples: ['curl -O https://example.com/file.zip'] },
  wget: { desc: { ar: 'تحميل ملفات', en: 'Download files' }, usage: { ar: 'لتحميل ملفات من الإنترنت.', en: 'Download files from internet.' }, syntax: 'wget [options] [url]', options: ['-O: اسم ملف'], examples: ['wget -O file.zip https://example.com/file.zip'] },
  ssh: { desc: { ar: 'الاتصال الآمن', en: 'Secure shell' }, usage: { ar: 'للدخول إلى خادم بعيد.', en: 'Connect to remote server.' }, syntax: 'ssh [user]@[host]', options: ['-p: منفذ'], examples: ['ssh root@192.168.1.1'] },
  scp: { desc: { ar: 'نسخ آمن عبر SSH', en: 'Secure copy over SSH' }, usage: { ar: 'لنقل الملفات.', en: 'Transfer files.' }, syntax: 'scp [file] [user]@[host]:[path]', options: [], examples: ['scp file.txt root@server:/home/'] },
  nc: { desc: { ar: 'أداة الشبكات', en: 'Netcat' }, usage: { ar: 'لفتح منافذ أو إرسال بيانات.', en: 'Open ports or send data.' }, syntax: 'nc [host] [port]', options: ['-l: استماع'], examples: ['nc -l 8080'] },
  tcpdump: { desc: { ar: 'التقاط الحزم', en: 'Packet capture' }, usage: { ar: 'لتحليل حركة الشبكة.', en: 'Analyze network traffic.' }, syntax: 'tcpdump [options]', options: ['-i: واجهة', '-n: رقمي'], examples: ['tcpdump -i eth0'] },
  chmod: { desc: { ar: 'تغيير صلاحيات', en: 'Change permissions' }, usage: { ar: 'لتحديد من يستطيع قراءة/كتابة/تنفيذ.', en: 'Set read/write/execute permissions.' }, syntax: 'chmod [mode] [file]', options: ['+x: إضافة تنفيذ', '-x: حذف تنفيذ'], examples: ['chmod 755 script.sh'] },
  chown: { desc: { ar: 'تغيير المالك', en: 'Change owner' }, usage: { ar: 'لنقل ملكية ملف.', en: 'Transfer file ownership.' }, syntax: 'chown [user]:[group] [file]', options: [], examples: ['chown root:root file.txt'] },
  chgrp: { desc: { ar: 'تغيير المجموعة', en: 'Change group' }, usage: { ar: 'لتغيير المجموعة المالكة.', en: 'Change owning group.' }, syntax: 'chgrp [group] [file]', options: [], examples: ['chgrp admin file.txt'] },
  umask: { desc: { ar: 'الصلاحيات الافتراضية', en: 'Default permissions' }, usage: { ar: 'لتعيين صلاحيات الملفات الجديدة.', en: 'Set default permissions for new files.' }, syntax: 'umask [value]', options: [], examples: ['umask 022'] },
  stat: { desc: { ar: 'تفاصيل الملف', en: 'File details' }, usage: { ar: 'لعرض معلومات دقيقة.', en: 'Show detailed info.' }, syntax: 'stat [file]', options: [], examples: ['stat file.txt'] },
  file: { desc: { ar: 'نوع الملف', en: 'File type' }, usage: { ar: 'لمعرفة النوع الحقيقي.', en: 'Determine file type.' }, syntax: 'file [file]', options: [], examples: ['file file.txt'] },
  tar: { desc: { ar: 'أرشفة ملفات', en: 'Archive files' }, usage: { ar: 'لدمج ملفات في أرشيف.', en: 'Combine files into archive.' }, syntax: 'tar [options] [archive] [files]', options: ['-cf: إنشاء', '-xf: فك', '-z: ضغط gz'], examples: ['tar -cf archive.tar folder'] },
  zip: { desc: { ar: 'ضغط بصيغة zip', en: 'Compress with zip' }, usage: { ar: 'لإنشاء أرشيف مضغوط.', en: 'Create compressed archive.' }, syntax: 'zip [archive] [files]', options: ['-r: شامل'], examples: ['zip archive.zip folder'] },
  unzip: { desc: { ar: 'فك ضغط zip', en: 'Extract zip' }, usage: { ar: 'لاستخراج المحتويات.', en: 'Extract contents.' }, syntax: 'unzip [archive]', options: [], examples: ['unzip archive.zip'] },
  gzip: { desc: { ar: 'ضغط gz', en: 'Compress with gz' }, usage: { ar: 'لضغط ملف واحد.', en: 'Compress single file.' }, syntax: 'gzip [file]', options: [], examples: ['gzip file.txt'] },
  gunzip: { desc: { ar: 'فك ضغط gz', en: 'Decompress gz' }, usage: { ar: 'لفك ضغط gzip.', en: 'Uncompress gzip.' }, syntax: 'gunzip [file.gz]', options: [], examples: ['gunzip file.txt.gz'] },
  bzip2: { desc: { ar: 'ضغط عالي', en: 'High compression' }, usage: { ar: 'ضغط أفضل.', en: 'Better compression.' }, syntax: 'bzip2 [file]', options: [], examples: ['bzip2 file.txt'] },
  xz: { desc: { ar: 'ضغط حديث', en: 'Modern compression' }, usage: { ar: 'نسبة ضغط ممتازة.', en: 'Excellent compression ratio.' }, syntax: 'xz [file]', options: [], examples: ['xz file.txt'] },
  apt: { desc: { ar: 'مدير الحزم', en: 'Package manager' }, usage: { ar: 'لتثبيت وتحديث البرامج.', en: 'Install and update software.' }, syntax: 'apt [command]', options: ['update: تحديث', 'install: تثبيت', 'remove: حذف'], examples: ['apt update', 'apt install firefox'] },
  'apt-get': { desc: { ar: 'واجهة apt التقليدية', en: 'Traditional apt interface' }, usage: { ar: 'نفس وظيفة apt.', en: 'Same as apt.' }, syntax: 'apt-get [command]', options: [], examples: ['apt-get install firefox'] },
  dpkg: { desc: { ar: 'مدير حزم منخفض المستوى', en: 'Low-level package manager' }, usage: { ar: 'لتثبيت حزم .deb.', en: 'Install .deb packages.' }, syntax: 'dpkg [options] [package]', options: ['-i: تثبيت', '-r: حذف'], examples: ['dpkg -i package.deb'] },
  snap: { desc: { ar: 'حزم snap', en: 'Snap packages' }, usage: { ar: 'لتثبيت برامج مستقلة.', en: 'Install self-contained apps.' }, syntax: 'snap [command] [package]', options: ['install', 'remove'], examples: ['snap install firefox'] },
  flatpak: { desc: { ar: 'حزم flatpak', en: 'Flatpak packages' }, usage: { ar: 'بديل snap.', en: 'Alternative to snap.' }, syntax: 'flatpak [command] [package]', options: ['install', 'remove'], examples: ['flatpak install firefox'] },
  nmap: { desc: { ar: 'فحص الشبكات', en: 'Network scanner' }, usage: { ar: 'لاكتشاف المنافذ والخدمات.', en: 'Discover ports and services.' }, syntax: 'nmap [options] [target]', options: ['-p: منافذ', '-sV: إصدارات', '-A: شامل'], examples: ['nmap -sV 192.168.1.1'] },
  sqlmap: { desc: { ar: 'كشف SQL Injection', en: 'SQL injection detector' }, usage: { ar: 'لاختبار قواعد البيانات.', en: 'Test databases.' }, syntax: 'sqlmap [options] [url]', options: ['--dbs: قواعد', '--tables: جداول'], examples: ['sqlmap -u "http://example.com?id=1"'] },
  hydra: { desc: { ar: 'هجوم كلمات مرور', en: 'Password brute-force' }, usage: { ar: 'لاختبار قوة كلمات المرور.', en: 'Test password strength.' }, syntax: 'hydra [options] [service]', options: ['-l: مستخدم', '-P: قائمة'], examples: ['hydra -l admin -P passwords.txt ssh://192.168.1.1'] },
  hashcat: { desc: { ar: 'كسر الهاش', en: 'Hash cracker' }, usage: { ar: 'لكسر كلمات المرور المشفرة.', en: 'Crack hashed passwords.' }, syntax: 'hashcat [options] [hashfile]', options: ['-m: نوع', '-a: هجوم'], examples: ['hashcat -m 0 -a 0 hash.txt wordlist.txt'] },
  'aircrack-ng': { desc: { ar: 'اختبار شبكات لاسلكية', en: 'WiFi security testing' }, usage: { ar: 'لفحص أمان WiFi.', en: 'Test WiFi security.' }, syntax: 'aircrack-ng [options] [capture]', options: ['-w: قائمة', '-b: BSSID'], examples: ['aircrack-ng -w wordlist.txt capture.cap'] },
  nikto: { desc: { ar: 'فحص خوادم ويب', en: 'Web server scanner' }, usage: { ar: 'للبحث عن ثغرات.', en: 'Find vulnerabilities.' }, syntax: 'nikto [options] [host]', options: ['-h: مضيف', '-p: منفذ'], examples: ['nikto -h example.com'] },
  gobuster: { desc: { ar: 'اكتشاف المسارات', en: 'Path discovery' }, usage: { ar: 'للعثور على ملفات مخفية.', en: 'Find hidden files.' }, syntax: 'gobuster [mode] [options]', options: ['dir: دليل', 'dns: DNS'], examples: ['gobuster dir -u example.com -w wordlist.txt'] },
  ffuf: { desc: { ar: 'Fuzzing سريع', en: 'Fast fuzzing' }, usage: { ar: 'لاكتشاف نقاط النهاية.', en: 'Discover endpoints.' }, syntax: 'ffuf [options]', options: ['-u: URL', '-w: قائمة'], examples: ['ffuf -u http://example.com/FUZZ -w wordlist.txt'] },
  dirsearch: { desc: { ar: 'مسح الدلائل', en: 'Directory scanner' }, usage: { ar: 'مثل gobuster.', en: 'Similar to gobuster.' }, syntax: 'dirsearch [options] [url]', options: ['-u: URL', '-e: ملحقات'], examples: ['dirsearch -u example.com -e php,html'] },
  john: { desc: { ar: 'كسر كلمات المرور', en: 'John the Ripper' }, usage: { ar: 'لكسر كلمات المرور.', en: 'Crack passwords.' }, syntax: 'john [options] [hashfile]', options: ['--wordlist: قائمة'], examples: ['john --wordlist=passwords.txt hash.txt'] },
  msfconsole: { desc: { ar: 'إطار Metasploit', en: 'Metasploit framework' }, usage: { ar: 'لاستغلال الثغرات.', en: 'Exploit vulnerabilities.' }, syntax: 'msfconsole', options: [], examples: ['msfconsole'] },
  wireshark: { desc: { ar: 'تحليل الحزم', en: 'Packet analyzer' }, usage: { ar: 'واجهة رسومية.', en: 'Graphical interface.' }, syntax: 'wireshark', options: [], examples: ['wireshark'] },
  tshark: { desc: { ar: 'نسخة طرفية من Wireshark', en: 'Terminal Wireshark' }, usage: { ar: 'لالتقاط الحزم.', en: 'Capture packets.' }, syntax: 'tshark [options]', options: ['-i: واجهة', '-w: ملف'], examples: ['tshark -i eth0 -w capture.pcap'] },
  bettercap: { desc: { ar: 'مراقبة الشبكة', en: 'Network monitoring' }, usage: { ar: 'لهجمات Man-in-the-Middle.', en: 'MitM attacks.' }, syntax: 'bettercap [options]', options: ['--help: مساعدة'], examples: ['bettercap'] }
};

// ============================================================
//  المراحل وتوزيع الأوامر
// ============================================================
const phaseCommands = {
  phase1: ["pwd","ls","ls -la","cd","mkdir","rmdir","touch","rm","cp","mv","cat","less","more","head","tail","echo","clear","history","find","grep","sort","uniq","wc","cut","tr","sed","awk","xargs","which","whereis","nano","vim"],
  phase2: ["uname","hostname","uptime","date","cal","id","who","whoami","w","users","groups","passwd","sudo","su","env","export","alias","unalias"],
  phase3: ["ps","top","htop","kill","killall","jobs","bg","fg","nice","renice","nohup"],
  phase4: ["ip","ifconfig","ping","traceroute","route","arp","ss","netstat","dig","nslookup","host","curl","wget","ssh","scp","nc","tcpdump"],
  phase5: ["chmod","chown","chgrp","umask","stat","file"],
  phase6: ["tar","zip","unzip","gzip","gunzip","bzip2","xz"],
  phase7: ["apt","apt-get","dpkg","snap","flatpak"],
  phase8: ["nmap","sqlmap","hydra","hashcat","aircrack-ng","nikto","gobuster","ffuf","dirsearch","john","msfconsole","wireshark","tshark","bettercap"]
};

const phaseNames = {
  ar: {
    phase1: 'المرحلة 1: أساسيات الملفات',
    phase2: 'المرحلة 2: النظام والمستخدمين',
    phase3: 'المرحلة 3: العمليات',
    phase4: 'المرحلة 4: الشبكات',
    phase5: 'المرحلة 5: الصلاحيات',
    phase6: 'المرحلة 6: الأرشفة',
    phase7: 'المرحلة 7: إدارة الحزم',
    phase8: 'المرحلة 8: أدوات Kali'
  },
  en: {
    phase1: 'Phase 1: File Basics',
    phase2: 'Phase 2: System & Users',
    phase3: 'Phase 3: Processes',
    phase4: 'Phase 4: Networking',
    phase5: 'Phase 5: Permissions',
    phase6: 'Phase 6: Archiving',
    phase7: 'Phase 7: Package Management',
    phase8: 'Phase 8: Kali Tools'
  }
};

// ============================================================
//  نظام الملفات الافتراضي (VFS)
// ============================================================
let inodeCounter = 1000;
function createVFSNode(type, owner = 'kali', group = 'kali', permissions = '755', content = '') {
  return {
    inode: inodeCounter++,
    type: type,
    owner,
    group,
    permissions,
    content: type === 'file' ? content : '',
    size: type === 'file' ? content.length : 4096,
    links: 1,
    ctime: new Date().toISOString(),
    mtime: new Date().toISOString(),
    atime: new Date().toISOString(),
    children: type === 'dir' ? {} : undefined,
    symlinkTarget: type === 'symlink' ? '' : undefined
  };
}

const initialVFS = {
  inode: 1,
  type: 'dir',
  owner: 'root',
  group: 'root',
  permissions: '755',
  size: 4096,
  links: 2,
  ctime: new Date().toISOString(),
  mtime: new Date().toISOString(),
  atime: new Date().toISOString(),
  children: {
    home: {
      inode: 2,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      size: 4096,
      links: 2,
      ctime: new Date().toISOString(),
      mtime: new Date().toISOString(),
      atime: new Date().toISOString(),
      children: {
        kali: {
          inode: 3,
          type: 'dir',
          owner: 'kali',
          group: 'kali',
          permissions: '755',
          size: 4096,
          links: 2,
          ctime: new Date().toISOString(),
          mtime: new Date().toISOString(),
          atime: new Date().toISOString(),
          children: {
            Desktop: {
              inode: 4,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              size: 4096,
              links: 1,
              ctime: new Date().toISOString(),
              mtime: new Date().toISOString(),
              atime: new Date().toISOString(),
              children: {}
            },
            Documents: {
              inode: 5,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              size: 4096,
              links: 1,
              ctime: new Date().toISOString(),
              mtime: new Date().toISOString(),
              atime: new Date().toISOString(),
              children: {
                'note.txt': {
                  inode: 6,
                  type: 'file',
                  owner: 'kali',
                  group: 'kali',
                  permissions: '644',
                  size: 24,
                  links: 1,
                  ctime: new Date().toISOString(),
                  mtime: new Date().toISOString(),
                  atime: new Date().toISOString(),
                  content: 'مرحباً بك في كالي لينكس.'
                },
                'old.txt': {
                  inode: 7,
                  type: 'file',
                  owner: 'kali',
                  group: 'kali',
                  permissions: '644',
                  size: 14,
                  links: 1,
                  ctime: new Date().toISOString(),
                  mtime: new Date().toISOString(),
                  atime: new Date().toISOString(),
                  content: 'ملف قديم.'
                }
              }
            },
            Downloads: {
              inode: 8,
              type: 'dir',
              owner: 'kali',
              group: 'kali',
              permissions: '755',
              size: 4096,
              links: 1,
              ctime: new Date().toISOString(),
              mtime: new Date().toISOString(),
              atime: new Date().toISOString(),
              children: {}
            },
            'script.sh': {
              inode: 9,
              type: 'file',
              owner: 'kali',
              group: 'kali',
              permissions: '644',
              size: 22,
              links: 1,
              ctime: new Date().toISOString(),
              mtime: new Date().toISOString(),
              atime: new Date().toISOString(),
              content: '#!/bin/bash\necho "Hello"'
            }
          }
        }
      }
    },
    etc: {
      inode: 10,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      size: 4096,
      links: 2,
      ctime: new Date().toISOString(),
      mtime: new Date().toISOString(),
      atime: new Date().toISOString(),
      children: {
        'os-release': {
          inode: 11,
          type: 'file',
          owner: 'root',
          group: 'root',
          permissions: '644',
          size: 22,
          links: 1,
          ctime: new Date().toISOString(),
          mtime: new Date().toISOString(),
          atime: new Date().toISOString(),
          content: 'كالي لينكس 2024.1'
        },
        'passwd': {
          inode: 12,
          type: 'file',
          owner: 'root',
          group: 'root',
          permissions: '644',
          size: 78,
          links: 1,
          ctime: new Date().toISOString(),
          mtime: new Date().toISOString(),
          atime: new Date().toISOString(),
          content: 'root:x:0:0:root:/root:/bin/bash\nkali:x:1000:1000::/home/kali:/bin/bash'
        }
      }
    },
    var: {
      inode: 13,
      type: 'dir',
      owner: 'root',
      group: 'root',
      permissions: '755',
      size: 4096,
      links: 2,
      ctime: new Date().toISOString(),
      mtime: new Date().toISOString(),
      atime: new Date().toISOString(),
      children: {
        log: {
          inode: 14,
          type: 'dir',
          owner: 'root',
          group: 'root',
          permissions: '755',
          size: 4096,
          links: 1,
          ctime: new Date().toISOString(),
          mtime: new Date().toISOString(),
          atime: new Date().toISOString(),
          children: {
            'syslog': {
              inode: 15,
              type: 'file',
              owner: 'root',
              group: 'root',
              permissions: '644',
              size: 30,
              links: 1,
              ctime: new Date().toISOString(),
              mtime: new Date().toISOString(),
              atime: new Date().toISOString(),
              content: 'سجل النظام: تم التشغيل بنجاح.'
            }
          }
        }
      }
    }
  }
};

let vfs = JSON.parse(JSON.stringify(initialVFS));
let currentUser = 'kali';
let currentGroup = 'kali';
let currentPath = '/home/kali';
let historyLog = [];
let jobs = [];
let processCounter = 1000;
let processes = {};

// ============================================================
//  الحالة العامة (XP، التقدم، الإنجازات، الإحصائيات)
// ============================================================
let currentPhase = 'phase1';
let totalXP = parseInt(localStorage.getItem('kaliTotalXP')) || 0;
let mastered = JSON.parse(localStorage.getItem('kaliMastered')) || {};
Object.keys(phaseCommands).forEach(p => { if (!mastered[p]) mastered[p] = []; });

// هيكل الإنجازات والإحصائيات
let achievements = JSON.parse(localStorage.getItem('kaliAchievements')) || {
  firstCommand: false,
  tenCommands: false,
  firstPhase: false,
  midtermPassed: false,
  finalPassed: false,
  firstTestPassed: false,
  perfectScore: false,
  tenTests: false,
  fiftyTests: false,
  zeroErrors: false,
  fastTest: false,
  allPhasesMastered: false,
};
let achievementCount = Object.values(achievements).filter(v => v === true).length;

let stats = JSON.parse(localStorage.getItem('kaliStats')) || {
  testsCompleted: 0,
  totalScore: 0,
  bestScore: 0,
  bestStreak: 0,
  currentStreak: 0,
  totalTrainingTime: 0, // بالثواني
  testHistory: [], // {date, score, theoryCorrect, practicalSolved, totalQuestions, totalTasks, errors, time}
  phaseMastery: {}, // {phase1: 0, phase2: 0, ...} نسبة مئوية
};

// تهيئة phaseMastery
Object.keys(phaseCommands).forEach(p => {
  if (!stats.phaseMastery[p]) stats.phaseMastery[p] = 0;
});

let testState = {
  phaseTests: JSON.parse(localStorage.getItem('phaseTests')) || {},
  midtermPassed: localStorage.getItem('midtermPassed') === 'true',
  finalPassed: localStorage.getItem('finalPassed') === 'true',
};
function saveTestState() {
  localStorage.setItem('phaseTests', JSON.stringify(testState.phaseTests));
  localStorage.setItem('midtermPassed', testState.midtermPassed);
  localStorage.setItem('finalPassed', testState.finalPassed);
}

function saveStats() {
  localStorage.setItem('kaliStats', JSON.stringify(stats));
  localStorage.setItem('kaliAchievements', JSON.stringify(achievements));
  localStorage.setItem('kaliTotalXP', totalXP);
  localStorage.setItem('kaliMastered', JSON.stringify(mastered));
}

// ============================================================
//  دوال نظام الملفات
// ============================================================
function getNode(pathStr) {
  const parts = pathStr.split('/').filter(p => p);
  let node = vfs;
  for (const part of parts) {
    if (node.type !== 'dir' || !node.children || !node.children[part]) return null;
    node = node.children[part];
  }
  return node;
}

function resolvePath(relativePath) {
  if (relativePath.startsWith('/')) return relativePath;
  if (relativePath === '~') return '/home/kali';
  if (relativePath.startsWith('~/')) return '/home/kali/' + relativePath.slice(2);
  let parts = currentPath.split('/').filter(p => p);
  const relParts = relativePath.split('/').filter(p => p);
  for (const part of relParts) {
    if (part === '..') { if (parts.length > 0) parts.pop(); }
    else if (part !== '.') parts.push(part);
  }
  return '/' + parts.join('/');
}

function getParentPath(pathStr) {
  const parts = pathStr.split('/').filter(p => p);
  parts.pop();
  return '/' + parts.join('/');
}

function checkPermission(node, operation) {
  if (!node) return false;
  const permStr = node.permissions || '000';
  let ownerClass = 'other';
  if (currentUser === node.owner) ownerClass = 'owner';
  else if (currentGroup === node.group) ownerClass = 'group';
  const permDigit = parseInt(permStr[ownerClass === 'owner' ? 0 : ownerClass === 'group' ? 1 : 2]);
  if (operation === 'read') return (permDigit & 4) !== 0;
  if (operation === 'write') return (permDigit & 2) !== 0;
  if (operation === 'execute') return (permDigit & 1) !== 0;
  return false;
}

// ============================================================
//  محرك الطرفية (جميع الأوامر المحاكاة) - تم اختصاره للتوفير
function executeCommand(input) {
  const trimmed = input.trim();
  if (!trimmed) return '';
  historyLog.push(trimmed);
  const parts = trimmed.split(' ');
  const cmd = parts[0];
  const args = parts.slice(1);
  let output = '';

  switch (cmd) {
    case 'pwd': return currentPath;
    case 'whoami': return currentUser;
    case 'clear': 
      document.getElementById('terminalOutput').innerHTML = ''; 
      return '';
    case 'history': return historyLog.map((h,i) => `${i+1}  ${h}`).join('\n');
    case 'echo': return args.join(' ');
    case 'date': return new Date().toString();
    case 'cal': return `    ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}\nأحد إثن ثلا أرب خمي جمع سبت\n...`;
    case 'uname': return args.includes('-a') ? 'Linux kali 6.0.0-kali #1 SMP Debian 6.0.0-kali' : 'Linux';
    case 'hostname': return 'kali';
    case 'uptime': return ` 12:34:56 up ${Math.floor(Math.random()*30)+1} days,  ${Math.floor(Math.random()*24)}:${String(Math.floor(Math.random()*60)).padStart(2,'0')},  1 user`;
    case 'id': return `uid=1000(${currentUser}) gid=1000(${currentGroup}) groups=1000(${currentGroup})`;
    case 'who': case 'w': return 'kali    pts/0        2025-01-01 10:23 (:0)';
    case 'users': return 'kali';
    case 'groups': return 'kali sudo';
    case 'env': return 'HOME=/home/kali\nUSER=kali\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin';
    case 'export': {
      if (args.length === 0) return '';
      const [varDef] = args;
      const [key, val] = varDef.split('=');
      if (key && val) return '';
      return '';
    }
    case 'alias': return args.length ? `alias ${args[0]}` : '';
    case 'unalias': return args.length ? `unalias ${args[0]}` : '';
    case 'su': return 'Password: (محاكاة) su: Authentication failure';
    case 'sudo': return 'نفذ الأمر كـ root (محاكاة)';
    case 'passwd': return 'تغيير كلمة المرور غير مدعوم في المحاكي.';
    case 'umask': return '0022';
    case 'jobs': return jobs.length ? jobs.map((j,i) => `[${i+1}] ${j.cmd} &`).join('\n') : '';
    case 'bg': case 'fg': return 'لا توجد وظائف حالياً.';
    case 'nohup': return 'nohup: ignoring input and appending output to nohup.out';
    case 'which': return args.length ? `/usr/bin/${args[0]}` : '';
    case 'whereis': return args.length ? `${args[0]}: /usr/bin/${args[0]} /usr/share/man/man1/${args[0]}.1.gz` : '';
    case 'ls': {
      let targetPath = currentPath;
      if (args.length > 0 && !args[0].startsWith('-')) targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node || node.type !== 'dir') return `ls: cannot access '${args[0] || targetPath}': No such file or directory`;
      if (!checkPermission(node, 'read')) return `ls: cannot open directory '${targetPath}': Permission denied`;
      let list = Object.keys(node.children || {});
      const showHidden = args.includes('-la') || args.includes('-a');
      if (!showHidden) list = list.filter(f => !f.startsWith('.'));
      if (args.includes('-l') || args.includes('-la')) {
        return list.map(f => {
          const child = node.children[f];
          const type = child.type === 'dir' ? 'd' : child.type === 'symlink' ? 'l' : '-';
          return `${type}${child.permissions} ${child.links} ${child.owner} ${child.group} ${child.size} ${new Date(child.mtime).toLocaleDateString()} ${f}`;
        }).join('\n');
      }
      return list.join('  ');
    }
    case 'cd': {
      if (args.length === 0) { currentPath = '/home/kali'; return ''; }
      const target = resolvePath(args[0]);
      const node = getNode(target);
      if (!node || node.type !== 'dir') return `bash: cd: ${args[0]}: No such file or directory`;
      if (!checkPermission(node, 'execute')) return `bash: cd: ${args[0]}: Permission denied`;
      currentPath = target;
      return '';
    }
    case 'mkdir': {
      if (args.length === 0) return 'mkdir: missing operand';
      const targetPath = resolvePath(args[0]);
      const parentPath = getParentPath(targetPath);
      const parent = getNode(parentPath);
      if (!parent || parent.type !== 'dir') return `mkdir: cannot create directory '${args[0]}': No such file or directory`;
      if (!checkPermission(parent, 'write')) return `mkdir: cannot create directory '${args[0]}': Permission denied`;
      const name = targetPath.split('/').pop();
      if (parent.children && parent.children[name]) return `mkdir: cannot create directory '${name}': File exists`;
      if (!parent.children) parent.children = {};
      parent.children[name] = createVFSNode('dir', currentUser, currentGroup, '755');
      return '';
    }
    case 'rmdir': {
      if (args.length === 0) return 'rmdir: missing operand';
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node || node.type !== 'dir') return `rmdir: failed to remove '${args[0]}': Not a directory`;
      if (Object.keys(node.children || {}).length > 0) return `rmdir: failed to remove '${args[0]}': Directory not empty`;
      const parentPath = getParentPath(targetPath);
      const parent = getNode(parentPath);
      if (!checkPermission(parent, 'write')) return 'Permission denied';
      delete parent.children[targetPath.split('/').pop()];
      return '';
    }
    case 'touch': {
      if (args.length === 0) return 'touch: missing file operand';
      const targetPath = resolvePath(args[0]);
      const parentPath = getParentPath(targetPath);
      const parent = getNode(parentPath);
      if (!parent || parent.type !== 'dir') return `touch: cannot touch '${args[0]}': No such file or directory`;
      if (!checkPermission(parent, 'write')) return 'Permission denied';
      const name = targetPath.split('/').pop();
      if (!parent.children) parent.children = {};
      if (!parent.children[name]) {
        parent.children[name] = createVFSNode('file', currentUser, currentGroup, '644', '');
      } else {
        parent.children[name].mtime = new Date().toISOString();
        parent.children[name].atime = new Date().toISOString();
      }
      return '';
    }
    case 'rm': {
      if (args.length === 0) return 'rm: missing operand';
      const targetPath = resolvePath(args[0]);
      const parentPath = getParentPath(targetPath);
      const parent = getNode(parentPath);
      const name = targetPath.split('/').pop();
      if (!parent || !parent.children || !parent.children[name]) return `rm: cannot remove '${args[0]}': No such file or directory`;
      const node = parent.children[name];
      if (node.type === 'dir' && !args.includes('-r')) return `rm: cannot remove '${args[0]}': Is a directory`;
      if (!checkPermission(parent, 'write')) return 'Permission denied';
      delete parent.children[name];
      return '';
    }
    case 'cp': {
      if (args.length < 2) return 'cp: missing file operand';
      const srcPath = resolvePath(args[0]);
      let destPath = resolvePath(args[1]);
      const srcNode = getNode(srcPath);
      if (!srcNode) return `cp: cannot stat '${args[0]}': No such file or directory`;
      if (!checkPermission(srcNode, 'read')) return `cp: cannot open '${args[0]}': Permission denied`;
      const destNode = getNode(destPath);
      if (destNode && destNode.type === 'dir') destPath = destPath + '/' + srcPath.split('/').pop();
      const destParentPath = getParentPath(destPath);
      const destParent = getNode(destParentPath);
      if (!destParent || destParent.type !== 'dir') return `cp: cannot create regular file '${destPath}': No such file or directory`;
      if (!checkPermission(destParent, 'write')) return 'Permission denied';
      const newNode = JSON.parse(JSON.stringify(srcNode));
      newNode.inode = inodeCounter++;
      newNode.ctime = new Date().toISOString();
      newNode.mtime = new Date().toISOString();
      newNode.atime = new Date().toISOString();
      if (!destParent.children) destParent.children = {};
      destParent.children[destPath.split('/').pop()] = newNode;
      return '';
    }
    case 'mv': {
      if (args.length < 2) return 'mv: missing file operand';
      const srcPath = resolvePath(args[0]);
      let destPath = resolvePath(args[1]);
      const srcNode = getNode(srcPath);
      if (!srcNode) return `mv: cannot stat '${args[0]}': No such file or directory`;
      const destNode = getNode(destPath);
      if (destNode && destNode.type === 'dir') destPath = destPath + '/' + srcPath.split('/').pop();
      const srcParent = getNode(getParentPath(srcPath));
      if (!checkPermission(srcParent, 'write')) return 'Permission denied';
      const destParent = getNode(getParentPath(destPath));
      if (!destParent || destParent.type !== 'dir') return `mv: cannot move to '${destPath}': No such file or directory`;
      if (!checkPermission(destParent, 'write')) return 'Permission denied';
      const name = srcPath.split('/').pop();
      delete srcParent.children[name];
      if (!destParent.children) destParent.children = {};
      srcNode.mtime = new Date().toISOString();
      srcNode.atime = new Date().toISOString();
      destParent.children[destPath.split('/').pop()] = srcNode;
      return '';
    }
    case 'cat': {
      if (args.length === 0) return 'cat: missing operand';
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node || node.type !== 'file') return `cat: ${args[0]}: No such file or directory`;
      if (!checkPermission(node, 'read')) return `cat: ${args[0]}: Permission denied`;
      node.atime = new Date().toISOString();
      return node.content || '';
    }
    case 'less': case 'more': {
      if (args.length === 0) return `${cmd}: missing operand`;
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node || node.type !== 'file') return `${cmd}: cannot open '${args[0]}': No such file or directory`;
      if (!checkPermission(node, 'read')) return 'Permission denied';
      node.atime = new Date().toISOString();
      const content = node.content || '';
      const lines = content.split('\n');
      const chunkSize = 20;
      let result = '';
      for (let i = 0; i < Math.min(chunkSize, lines.length); i++) {
        result += lines[i] + '\n';
      }
      if (lines.length > chunkSize) result += `\n-- ${cmd}: عرض ${chunkSize} سطر من ${lines.length} --`;
      return result;
    }
    case 'head': case 'tail': {
      if (args.length === 0) return `${cmd}: missing operand`;
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node || node.type !== 'file') return `${cmd}: cannot open '${args[0]}': No such file or directory`;
      if (!checkPermission(node, 'read')) return 'Permission denied';
      const lines = (node.content || '').split('\n');
      const n = 10;
      node.atime = new Date().toISOString();
      return cmd === 'head' ? lines.slice(0, n).join('\n') : lines.slice(-n).join('\n');
    }
    case 'grep': {
      if (args.length < 2) return 'Usage: grep [pattern] [file]';
      const pattern = args[0];
      const filePath = resolvePath(args[1]);
      const node = getNode(filePath);
      if (!node || node.type !== 'file') return `grep: ${args[1]}: No such file or directory`;
      if (!checkPermission(node, 'read')) return 'Permission denied';
      const lines = (node.content || '').split('\n');
      node.atime = new Date().toISOString();
      const results = lines.filter(l => l.includes(pattern));
      return results.length ? results.join('\n') : '(no matches)';
    }
    case 'find': {
      const searchPath = args[0] ? resolvePath(args[0]) : currentPath;
      const pattern = args[1] || '*';
      const results = [];
      function search(node, path) {
        if (node.type === 'dir') {
          for (const [name, child] of Object.entries(node.children || {})) {
            const childPath = path + '/' + name;
            if (name.includes(pattern.replace('*',''))) results.push(childPath);
            search(child, childPath);
          }
        }
      }
      const startNode = getNode(searchPath);
      if (!startNode) return `find: '${searchPath}': No such file or directory`;
      search(startNode, searchPath);
      return results.join('\n');
    }
    case 'ps': {
      const psOutput = [
        'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND',
        `kali       ${processCounter}  0.0  0.1 12345  6789 pts/0    Ss   10:23   0:00 bash`,
        `root       ${processCounter+1}  0.0  0.2 23456  9876 pts/0    S    10:24   0:01 systemd`,
        `kali       ${processCounter+2}  0.0  0.1 11111  5555 pts/0    R+   10:25   0:00 ps`
      ];
      return psOutput.join('\n');
    }
    case 'kill': {
      if (args.length === 0) return 'kill: usage: kill [-s sigspec] pid ...';
      const pid = parseInt(args[0]);
      if (pid && pid > 1000) {
        return `kill: (${pid}): محاكاة - تم إنهاء العملية`;
      }
      return `kill: (${args[0]}): No such process`;
    }
    case 'killall': return 'محاكاة: تم إنهاء العمليات المحددة.';
    case 'ip': case 'ifconfig': {
      const ifaces = {
        eth0: { ip: '192.168.1.10', mac: '00:11:22:33:44:55', status: 'up' },
        lo: { ip: '127.0.0.1', mac: '00:00:00:00:00:00', status: 'up' }
      };
      let out = '';
      Object.entries(ifaces).forEach(([name, iface]) => {
        out += `${name}: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n`;
        out += `        inet ${iface.ip}  netmask 255.255.255.0  broadcast 192.168.1.255\n`;
        out += `        ether ${iface.mac}  txqueuelen 1000  (Ethernet)\n\n`;
      });
      return out;
    }
    case 'ping': {
      if (args.length === 0) return 'ping: usage error: Destination address required';
      const host = args[0];
      const delay = (Math.random() * 0.1 + 0.01).toFixed(3);
      return `PING ${host} (${host}) 56(84) bytes of data.\n64 bytes from ${host}: icmp_seq=1 ttl=64 time=${delay} ms`;
    }
    case 'traceroute': {
      if (args.length === 0) return 'traceroute: missing host';
      const hops = ['192.168.1.1', '10.0.0.1', '172.16.0.1', '8.8.8.8'];
      return hops.map((h, i) => ` ${i+1}  ${h}  ${(Math.random()*5+1).toFixed(1)} ms`).join('\n');
    }
    case 'nslookup': case 'dig': case 'host': {
      if (args.length === 0) return 'usage: nslookup [host]';
      return `Server:		192.168.1.1\nAddress:	192.168.1.1#53\n\nName:	${args[0]}\nAddress: ${Array.from({length:4}, () => Math.floor(Math.random()*255)).join('.')}`;
    }
    case 'curl': case 'wget': {
      if (args.length === 0) return 'usage: curl [url]';
      return `محاكاة: تم تحميل الملف من ${args[0]} بنجاح.`;
    }
    case 'ssh': {
      if (args.length === 0) return 'ssh: usage: ssh [user@]host';
      return `ssh: connect to host ${args[0]} port 22: Connection refused (محاكاة)`;
    }
    case 'nc': {
      if (args.length === 0) return 'nc: usage: nc [options] [host] [port]';
      return 'nc: محاكاة - الاتصال بالمنفذ 80...';
    }
    case 'tcpdump': return 'tcpdump: listening on eth0, link-type EN10MB (Capture 1 packet)';
    case 'nmap': {
      if (args.length === 0) return 'nmap: missing target';
      const target = args[0];
      const ports = [22, 80, 443, 3306, 8080];
      const openPorts = ports.filter(() => Math.random() > 0.4);
      const services = { 22: 'ssh', 80: 'http', 443: 'https', 3306: 'mysql', 8080: 'http-proxy' };
      let out = `Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toLocaleTimeString()}\n`;
      out += `Nmap scan report for ${target} (${Array.from({length:4}, () => Math.floor(Math.random()*255)).join('.')})\n`;
      out += `Host is up (0.00${Math.floor(Math.random()*10)}s latency).\n`;
      out += `Not shown: ${20 - openPorts.length} closed ports\n`;
      out += 'PORT    STATE SERVICE\n';
      openPorts.forEach(p => {
        out += `${p}/tcp  open  ${services[p] || 'unknown'}\n`;
      });
      return out;
    }
    case 'sqlmap': return 'sqlmap - محاكاة: تم اكتشاف ثغرة SQL Injection.';
    case 'hydra': return 'Hydra v9.5 - محاكاة هجوم كلمات مرور...';
    case 'aircrack-ng': return 'محاكاة: تم التقاط مصافحة WPA.';
    case 'msfconsole': return 'Metasploit Framework - محاكاة واجهة msf.';
    case 'tar': {
      if (args.length === 0) return 'tar: usage: tar [options] [archive] [files]';
      return 'محاكاة: تم إنشاء الأرشيف.';
    }
    case 'zip': case 'unzip': case 'gzip': case 'gunzip': case 'bzip2': case 'xz':
      return 'محاكاة: عملية ضغط/فك ضغط ناجحة.';
    case 'chmod': {
      if (args.length < 2) return 'chmod: missing operand';
      const mode = args[0];
      const targetPath = resolvePath(args[1]);
      const node = getNode(targetPath);
      if (!node) return `chmod: cannot access '${args[1]}': No such file or directory`;
      if (currentUser !== 'root' && currentUser !== node.owner) return 'chmod: Operation not permitted';
      if (mode.match(/^[0-7]{3}$/)) {
        node.permissions = mode;
      } else if (mode.includes('+x')) {
        const perm = parseInt(node.permissions, 8) | 1;
        node.permissions = perm.toString(8).padStart(3,'0');
      } else if (mode.includes('-x')) {
        const perm = parseInt(node.permissions, 8) & ~1;
        node.permissions = perm.toString(8).padStart(3,'0');
      } else {
        return 'chmod: invalid mode';
      }
      node.mtime = new Date().toISOString();
      return '';
    }
    case 'chown': {
      if (args.length < 2) return 'chown: missing operand';
      const targetPath = resolvePath(args[1]);
      const node = getNode(targetPath);
      if (!node) return `chown: cannot access '${args[1]}': No such file or directory`;
      if (currentUser !== 'root') return 'chown: Operation not permitted';
      node.owner = args[0];
      node.mtime = new Date().toISOString();
      return '';
    }
    case 'chgrp': {
      if (args.length < 2) return 'chgrp: missing operand';
      const targetPath = resolvePath(args[1]);
      const node = getNode(targetPath);
      if (!node) return `chgrp: cannot access '${args[1]}': No such file or directory`;
      if (currentUser !== 'root') return 'chgrp: Operation not permitted';
      node.group = args[0];
      node.mtime = new Date().toISOString();
      return '';
    }
    case 'stat': {
      if (args.length === 0) return 'stat: missing operand';
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node) return `stat: cannot stat '${args[0]}': No such file or directory`;
      return `  File: ${args[0]}\n  Size: ${node.size}\tBlocks: 8\tIO Block: 4096   ${node.type}\nDevice: 801h/2049d\tInode: ${node.inode}\tLinks: ${node.links}\nAccess: (${node.permissions}/${node.type==='dir'?'drwx':'-rwx'}${node.permissions})\tUid: ( ${node.owner})   Gid: ( ${node.group})\nAccess: ${new Date(node.atime).toLocaleString()}\nModify: ${new Date(node.mtime).toLocaleString()}\nChange: ${new Date(node.ctime).toLocaleString()}`;
    }
    case 'file': {
      if (args.length === 0) return 'file: missing operand';
      const targetPath = resolvePath(args[0]);
      const node = getNode(targetPath);
      if (!node) return `file: cannot open '${args[0]}' (No such file or directory)`;
      if (node.type === 'dir') return `${args[0]}: directory`;
      if (node.type === 'symlink') return `${args[0]}: symbolic link`;
      const content = node.content || '';
      if (content.startsWith('#!/')) return `${args[0]}: Bourne-Again shell script`;
      return `${args[0]}: ASCII text`;
    }
    case 'apt': case 'apt-get': {
      if (args.length === 0) return 'محاكاة: apt update && apt upgrade تم بنجاح.';
      const sub = args[0];
      if (sub === 'update') return 'Hit:1 http://archive.kali.org/kali kali-rolling InRelease\nReading package lists... Done';
      if (sub === 'install') return `Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed:\n  ${args.slice(1).join(' ')}\n0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 0 B/12.5 MB of archives.\nAfter this operation, 48.6 MB of additional disk space will be used.\nGet:1 http://archive.kali.org/kali kali-rolling/main amd64 ${args[1]} amd64 1.0-1 [12.5 MB]\nFetched 12.5 MB in 2s (6.25 MB/s)\nSelecting previously unselected package ${args[1]}.\n(Reading database ... 100%)\nPreparing to unpack .../${args[1]}_1.0-1_amd64.deb ...\nUnpacking ${args[1]} (1.0-1) ...\nSetting up ${args[1]} (1.0-1) ...`;
      if (sub === 'remove') return `Reading package lists... Done\nBuilding dependency tree... Done\nThe following packages will be REMOVED:\n  ${args.slice(1).join(' ')}\nAfter this operation, 48.6 MB disk space will be freed.\nDo you want to continue? [Y/n] y\n(Reading database ... 100%)\nRemoving ${args[1]} (1.0-1) ...\nProcessing triggers for man-db (2.9.4-4) ...`;
      return 'محاكاة: apt command executed.';
    }
    case 'dpkg': {
      if (args.length === 0) return 'dpkg: missing action';
      if (args[0] === '-i' && args[1]) return `Selecting previously unselected package ${args[1]}.\n(Reading database ... 100%)\nPreparing to unpack ${args[1]} ...\nUnpacking ${args[1]} ...\nSetting up ${args[1]} ...`;
      return 'dpkg - محاكاة إدارة حزم.';
    }
    case 'snap': case 'flatpak': {
      if (args.length === 0) return 'محاكاة: غير مثبت.';
      return `محاكاة: ${args[0]} تم بنجاح.`;
    }
    case 'top': case 'htop': {
      let out = `top - ${new Date().toLocaleTimeString()} up 1 day,  2:15,  1 user,  load average: 0.08, 0.03, 0.01\nTasks: 100 total,   1 running,  99 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  2.5 us,  1.2 sy,  0.0 ni, 96.0 id,  0.3 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem :   7856.4 total,   1234.5 free,   3456.7 used,   3165.2 buff/cache\nMiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   4000.1 avail Mem \n\n  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n 1234 kali      20   0  123456  12345   5678 S   0.7   0.2   0:01.23 bash\n 5678 root      20   0  234567  23456   7890 S   0.3   0.3   0:02.34 systemd\n 9012 kali      20   0  111111   5555   2222 R   1.2   0.1   0:00.12 top`;
      return out;
    }
    default: {
      if (commandData[cmd]) {
        return `${cmd}: command not fully simulated yet. Try 'help ${cmd}' for more info.`;
      }
      return `bash: ${cmd}: command not found`;
    }
  }
}

// ============================================================
//  بنك الأسئلة الديناميكي (يتم توليده من commandData)
// ============================================================

// تصنيف الأوامر
const categoryMap = {
  phase1: 'file',
  phase2: 'system',
  phase3: 'process',
  phase4: 'network',
  phase5: 'permission',
  phase6: 'archive',
  phase7: 'package',
  phase8: 'kali'
};

function getCategory(cmd) {
  for (let phase in phaseCommands) {
    if (phaseCommands[phase].includes(cmd)) {
      return categoryMap[phase] || 'other';
    }
  }
  return 'other';
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// توليد الأسئلة النظرية
function generateTheoryQuestions() {
  const questions = [];
  const allCmds = Object.keys(commandData);
  
  allCmds.forEach(cmd => {
    const info = commandData[cmd];
    if (!info.desc) return;
    
    const category = getCategory(cmd);
    const sameCategory = allCmds.filter(c => getCategory(c) === category && c !== cmd);
    const wrongOptions = shuffleArray(sameCategory).slice(0, 3);
    // إذا لم يكن هناك 3 خيارات خاطئة، نأخذ من أي فئة
    while (wrongOptions.length < 3) {
      const extra = shuffleArray(allCmds.filter(c => c !== cmd && !wrongOptions.includes(c))).slice(0, 1);
      if (extra.length) wrongOptions.push(extra[0]);
      else break;
    }
    const options = shuffleArray([cmd, ...wrongOptions]);
    
    const descAr = info.desc.ar || cmd;
    const descEn = info.desc.en || '';
    questions.push({
      id: `th_${cmd}_desc`,
      category: category,
      cmd: cmd,
      question: { ar: `ما هو الأمر الذي ${descAr}؟`, en: `Which command ${descEn}?` },
      options: options,
      correct: cmd,
      type: 'mcq'
    });
    
    // سؤال عن الاستخدام
    if (info.usage && info.usage.ar) {
      const usageAr = info.usage.ar;
      const usageEn = info.usage.en || '';
      const wrongUsage = shuffleArray(sameCategory).slice(0, 3);
      while (wrongUsage.length < 3) {
        const extra = shuffleArray(allCmds.filter(c => c !== cmd && !wrongUsage.includes(c))).slice(0, 1);
        if (extra.length) wrongUsage.push(extra[0]);
        else break;
      }
      const usageOptions = shuffleArray([cmd, ...wrongUsage]);
      questions.push({
        id: `th_${cmd}_usage`,
        category: category,
        cmd: cmd,
        question: { ar: `في أي حالة تستخدم الأمر '${cmd}'؟ (${usageAr})`, en: `When would you use '${cmd}'? (${usageEn})` },
        options: usageOptions,
        correct: cmd,
        type: 'mcq'
      });
    }
  });
  return questions;
}

// توليد المهام العملية
function generatePracticalTasks() {
  const tasks = [];
  const allCmds = Object.keys(commandData);
  
  allCmds.forEach(cmd => {
    const info = commandData[cmd];
    const category = getCategory(cmd);
    if (!info.examples || info.examples.length === 0) {
      tasks.push({
        id: `pr_${cmd}_1`,
        category: category,
        cmd: cmd,
        description: { ar: `نفذ الأمر '${cmd}' في الطرفية`, en: `Execute the command '${cmd}' in the terminal` },
        expected: [cmd]
      });
    } else {
      info.examples.forEach((ex, i) => {
        const expectedCmd = ex.split(' ')[0];
        tasks.push({
          id: `pr_${cmd}_${i+1}`,
          category: category,
          cmd: cmd,
          description: { ar: `نفذ: ${ex}`, en: `Execute: ${ex}` },
          expected: [expectedCmd, cmd] // دعم أكثر من إجابة صحيحة
        });
      });
    }
  });
  return tasks;
}

// اختيار متوازن للأسئلة
function selectBalancedQuestions(questionBank, totalCount = 8) {
  const categories = {};
  questionBank.forEach(q => {
    if (!categories[q.category]) categories[q.category] = [];
    categories[q.category].push(q);
  });
  const categoryNames = Object.keys(categories);
  if (categoryNames.length === 0) return [];
  const perCategory = Math.floor(totalCount / categoryNames.length);
  let remainder = totalCount % categoryNames.length;
  let selected = [];
  categoryNames.forEach(cat => {
    const pool = categories[cat];
    const count = Math.min(perCategory + (remainder > 0 ? 1 : 0), pool.length);
    if (remainder > 0) remainder--;
    const picked = shuffleArray(pool).slice(0, count);
    selected = selected.concat(picked);
  });
  if (selected.length < totalCount) {
    const allRemaining = questionBank.filter(q => !selected.includes(q));
    const extra = shuffleArray(allRemaining).slice(0, totalCount - selected.length);
    selected = selected.concat(extra);
  }
  return shuffleArray(selected);
}

// اختيار متوازن للمهام
function selectBalancedTasks(taskBank, totalCount = 7) {
  const categories = {};
  taskBank.forEach(t => {
    if (!categories[t.category]) categories[t.category] = [];
    categories[t.category].push(t);
  });
  const categoryNames = Object.keys(categories);
  if (categoryNames.length === 0) return [];
  const perCategory = Math.floor(totalCount / categoryNames.length);
  let remainder = totalCount % categoryNames.length;
  let selected = [];
  categoryNames.forEach(cat => {
    const pool = categories[cat];
    const count = Math.min(perCategory + (remainder > 0 ? 1 : 0), pool.length);
    if (remainder > 0) remainder--;
    const picked = shuffleArray(pool).slice(0, count);
    selected = selected.concat(picked);
  });
  if (selected.length < totalCount) {
    const allRemaining = taskBank.filter(t => !selected.includes(t));
    const extra = shuffleArray(allRemaining).slice(0, totalCount - selected.length);
    selected = selected.concat(extra);
  }
  return shuffleArray(selected);
}

// ============================================================
//  نظام الاختبارات (الديناميكي المتكامل مع التقييم والإحصائيات)
// ============================================================

let testData = null;
let testStartTime = null;

function showTest(phase, testType = 'phase') {
  const modal = document.getElementById('testModal');
  const content = document.getElementById('testContent');
  const title = document.getElementById('testTitle');
  const resultDiv = document.getElementById('testResult');
  const submitBtn = document.getElementById('submitTestBtn');
  const closeBtn = document.getElementById('closeTestBtn');

  resultDiv.innerHTML = '';
  submitBtn.disabled = false;
  submitBtn.style.display = 'inline-block';
  testStartTime = Date.now();

  if (testType === 'midterm') {
    title.textContent = t('app.midtermTestTitle');
  } else if (testType === 'final') {
    title.textContent = t('app.finalTestTitle');
  } else {
    title.textContent = t('app.phaseTestTitle', { phase: phase.replace('phase','') });
  }

  // تحديد الأوامر المطلوبة
  let cmds = [];
  if (testType === 'phase') {
    cmds = phaseCommands[phase] || [];
  } else if (testType === 'midterm') {
    const phases = ['phase1','phase2','phase3','phase4'];
    cmds = phases.flatMap(p => phaseCommands[p] || []);
  } else if (testType === 'final') {
    const phases = ['phase1','phase2','phase3','phase4','phase5','phase6','phase7','phase8'];
    cmds = phases.flatMap(p => phaseCommands[p] || []);
  }

  // توليد بنك الأسئلة والمهام
  const allTheory = generateTheoryQuestions();
  const allTasks = generatePracticalTasks();
  const theoryBank = allTheory.filter(q => cmds.includes(q.cmd));
  const taskBank = allTasks.filter(t => cmds.includes(t.cmd));

  if (theoryBank.length === 0 || taskBank.length === 0) {
    content.innerHTML = `<p>${t('app.noQuestions')}</p>`;
    submitBtn.style.display = 'none';
    modal.style.display = 'flex';
    return;
  }

  const theoryQuestions = selectBalancedQuestions(theoryBank, 8);
  const practicalTasks = selectBalancedTasks(taskBank, 7);

  // بناء واجهة الاختبار
  let html = `<div style="margin-bottom:15px;"><strong>${t('app.theoretical')}</strong></div>`;
  theoryQuestions.forEach((q, idx) => {
    const qText = q.question[currentLang] || q.question.ar;
    const opts = q.options || [];
    html += `<div class="test-question" data-qidx="${idx}" data-correct="${q.correct}">`;
    html += `<p>${t('app.question')} ${idx+1} ${t('app.of')} ${theoryQuestions.length}: ${qText}</p>`;
    html += `<div class="test-options">`;
    opts.forEach((opt, oi) => {
      const val = typeof opt === 'string' ? opt : opt;
      html += `<label><input type="radio" name="q${idx}" value="${val}"> ${val}</label>`;
    });
    html += `</div>`;
    html += `</div>`;
  });

  html += `<hr><div style="margin:15px 0;"><strong>${t('app.practical')}</strong></div>`;
  html += `<div id="practicalList" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">`;
  practicalTasks.forEach((task, idx) => {
    const desc = task.description[currentLang] || task.description.ar;
    html += `
      <div class="practical-item" data-cmd="${task.cmd}" data-idx="${idx}" data-expected='${JSON.stringify(task.expected)}' style="background:var(--bg); padding:10px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.9rem;">${desc}</span>
        <span>
          <button class="btn outline practical-solve-btn" data-cmd="${task.cmd}" data-idx="${idx}"><i class="fas fa-terminal"></i> حل</button>
          <span class="practical-status" id="pracStatus${idx}" style="margin-left:8px;">⬜</span>
        </span>
      </div>
    `;
  });
  html += `</div>`;
  html += `<div id="practicalProgress" style="margin:10px 0;">${t('app.practicalProgress', { solved: '0', total: practicalTasks.length })}</div>`;

  content.innerHTML = html;

  // تخزين بيانات الاختبار
  testData = {
    theoryQuestions,
    practicalTasks,
    phase,
    testType,
    answered: false,
    theoryCorrect: 0,
    practicalResults: new Array(practicalTasks.length).fill(false),
    practicalSolved: 0,
    errors: [],
    startTime: testStartTime,
  };

  function updatePracticalProgress() {
    const solved = testData.practicalSolved;
    const total = testData.practicalTasks.length;
    document.getElementById('practicalProgress').textContent = t('app.practicalProgress', { solved, total });
  }
  updatePracticalProgress();

  // مستمعات الأزرار العملية
  document.querySelectorAll('.practical-solve-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const cmd = this.dataset.cmd;
      const idx = parseInt(this.dataset.idx);
      const expectedRaw = this.parentElement.parentElement.dataset.expected;
      let expected = [cmd];
      try {
        expected = JSON.parse(expectedRaw);
      } catch(e) {}
      
      startMission(cmd, true, (passed) => {
        if (passed) {
          if (!testData.practicalResults[idx]) {
            testData.practicalResults[idx] = true;
            testData.practicalSolved++;
            document.getElementById(`pracStatus${idx}`).textContent = '✅';
            document.getElementById(`pracStatus${idx}`).style.color = 'var(--success)';
            updatePracticalProgress();
            showToast(`✅ تم حل المهمة`, 'success');
          } else {
            showToast(`ℹ️ لقد حللت هذه المهمة مسبقاً`, 'info');
          }
        } else {
          testData.errors.push(`المهمة ${idx+1}: ${cmd}`);
          showToast(`❌ الأمر غير صحيح، حاول مرة أخرى`, 'error');
        }
        setTimeout(() => {
          document.getElementById('testModal').style.display = 'flex';
        }, 300);
      });
      document.getElementById('testModal').style.display = 'none';
    });
  });

  modal.style.display = 'flex';

  // زر إرسال الإجابات
  submitBtn.onclick = function() {
    if (submitBtn.disabled) return;
    let correct = 0;
    testData.theoryQuestions.forEach((q, idx) => {
      const radios = document.querySelectorAll(`input[name="q${idx}"]`);
      let selected = null;
      radios.forEach(r => { if (r.checked) selected = r.value; });
      if (selected === q.correct) correct++;
      else {
        testData.errors.push(`السؤال ${idx+1}: ${q.question[currentLang] || q.question.ar} (الإجابة الصحيحة: ${q.correct})`);
      }
    });
    testData.theoryCorrect = correct;
    testData.answered = true;

    const theoryScore = Math.round((correct / testData.theoryQuestions.length) * 40);
    const practicalScore = Math.round((testData.practicalSolved / testData.practicalTasks.length) * 60);
    const totalScore = theoryScore + practicalScore;

    const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    let grade = '';
    let passed = false;
    let level = '';
    if (totalScore >= 60) {
      passed = true;
      if (totalScore >= 90) { grade = '🏆 خبير (Expert)'; level = 'Expert'; }
      else if (totalScore >= 80) { grade = '🥇 متقدم (Advanced)'; level = 'Advanced'; }
      else if (totalScore >= 70) { grade = '🥈 جيد جداً (Proficient)'; level = 'Proficient'; }
      else { grade = '🥉 جيد (Pass)'; level = 'Pass'; }
      
      let xpEarned = 0;
      if (testData.testType === 'phase') xpEarned = 30;
      else if (testData.testType === 'midterm') xpEarned = 50;
      else if (testData.testType === 'final') xpEarned = 100;
      totalXP += xpEarned;
      
      if (testData.testType === 'phase') {
        testState.phaseTests[testData.phase] = 'passed';
      } else if (testData.testType === 'midterm') {
        testState.midtermPassed = true;
        achievements.midtermPassed = true;
      } else if (testData.testType === 'final') {
        testState.finalPassed = true;
        achievements.finalPassed = true;
      }
      
      // تحديث الإحصائيات
      stats.testsCompleted++;
      stats.totalScore += totalScore;
      if (totalScore > stats.bestScore) stats.bestScore = totalScore;
      stats.currentStreak++;
      if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak;
      stats.totalTrainingTime += timeTaken;
      
      // تحديث إتقان المراحل
      if (testData.testType === 'phase') {
        const phaseName = testData.phase;
        const phaseCmds = phaseCommands[phaseName] || [];
        const masteredCount = (mastered[phaseName] || []).length;
        stats.phaseMastery[phaseName] = Math.round((masteredCount / phaseCmds.length) * 100);
      } else if (testData.testType === 'midterm') {
        ['phase1','phase2','phase3','phase4'].forEach(p => {
          const phaseCmds = phaseCommands[p] || [];
          const masteredCount = (mastered[p] || []).length;
          stats.phaseMastery[p] = Math.round((masteredCount / phaseCmds.length) * 100);
        });
      } else if (testData.testType === 'final') {
        Object.keys(phaseCommands).forEach(p => {
          const phaseCmds = phaseCommands[p] || [];
          const masteredCount = (mastered[p] || []).length;
          stats.phaseMastery[p] = Math.round((masteredCount / phaseCmds.length) * 100);
        });
      }
      
      // حفظ سجل الاختبار
      stats.testHistory.push({
        date: new Date().toISOString(),
        score: totalScore,
        theoryCorrect: correct,
        practicalSolved: testData.practicalSolved,
        totalQuestions: testData.theoryQuestions.length,
        totalTasks: testData.practicalTasks.length,
        errors: testData.errors,
        time: timeTaken,
        level: level,
        type: testData.testType,
        phase: testData.phase
      });
      
      // تحديث الإنجازات
      if (!achievements.firstTestPassed && passed) {
        achievements.firstTestPassed = true;
        totalXP += 15;
        showToast(t('app.achievementUnlocked', { name: 'أول اختبار ناجح', xp: 15 }), 'success');
      }
      if (!achievements.perfectScore && totalScore === 100) {
        achievements.perfectScore = true;
        totalXP += 25;
        showToast(t('app.achievementUnlocked', { name: 'نتيجة 100%', xp: 25 }), 'success');
      }
      if (!achievements.tenTests && stats.testsCompleted >= 10) {
        achievements.tenTests = true;
        totalXP += 30;
        showToast(t('app.achievementUnlocked', { name: '10 اختبارات', xp: 30 }), 'success');
      }
      if (!achievements.fiftyTests && stats.testsCompleted >= 50) {
        achievements.fiftyTests = true;
        totalXP += 50;
        showToast(t('app.achievementUnlocked', { name: '50 اختباراً', xp: 50 }), 'success');
      }
      if (!achievements.zeroErrors && testData.errors.length === 0 && passed) {
        achievements.zeroErrors = true;
        totalXP += 20;
        showToast(t('app.achievementUnlocked', { name: 'اختبار بدون أخطاء', xp: 20 }), 'success');
      }
      if (!achievements.fastTest && timeTaken < 300 && passed) { // أقل من 5 دقائق
        achievements.fastTest = true;
        totalXP += 20;
        showToast(t('app.achievementUnlocked', { name: 'اختبار سريع (أقل من 5 دقائق)', xp: 20 }), 'success');
      }
      // جميع المراحل متقنة؟
      let allPhases = true;
      Object.keys(phaseCommands).forEach(p => {
        const phaseCmds = phaseCommands[p] || [];
        const masteredCount = (mastered[p] || []).length;
        if (masteredCount < phaseCmds.length) allPhases = false;
      });
      if (!achievements.allPhasesMastered && allPhases) {
        achievements.allPhasesMastered = true;
        totalXP += 100;
        showToast(t('app.achievementUnlocked', { name: 'إتقان جميع المراحل', xp: 100 }), 'success');
      }
      
      saveStats();
      saveTestState();
      showToast(t('app.testPassed', { xp: xpEarned }) + ` (${totalScore}%) - ${grade}`, 'success');
      updateUI();
      
    } else {
      // فشل الاختبار
      stats.currentStreak = 0;
      stats.testHistory.push({
        date: new Date().toISOString(),
        score: totalScore,
        theoryCorrect: correct,
        practicalSolved: testData.practicalSolved,
        totalQuestions: testData.theoryQuestions.length,
        totalTasks: testData.practicalTasks.length,
        errors: testData.errors,
        time: timeTaken,
        level: 'Fail',
        type: testData.testType,
        phase: testData.phase
      });
      saveStats();
      showToast(t('app.testFailed') + ` (${totalScore}%) - يحتاج 60% للنجاح`, 'error');
    }

    // عرض النتيجة المفصلة
    let errorDetails = '';
    if (testData.errors.length > 0) {
      errorDetails = '<br><br><strong>📝 الأخطاء والمراجعة:</strong><ul>';
      testData.errors.forEach(err => {
        errorDetails += `<li>${err}</li>`;
      });
      errorDetails += '</ul>';
    }

    const levelDisplay = passed ? grade : '❌ يحتاج إلى مراجعة';
    resultDiv.innerHTML = `
      <div class="test-result ${passed ? 'pass' : 'fail'}">
        <strong>${passed ? '✅ نجحت' : '❌ لم تنجح'}</strong>
        <br>الدرجة: ${totalScore}%
        <br>النظري: ${correct}/${testData.theoryQuestions.length} (${theoryScore}/40)
        <br>العملي: ${testData.practicalSolved}/${testData.practicalTasks.length} (${practicalScore}/60)
        <br>المستوى: ${levelDisplay}
        <br>الوقت: ${minutes} دقيقة ${seconds} ثانية
        ${errorDetails}
      </div>
    `;
    submitBtn.disabled = true;
    
    // تحديث الإحصائيات الظاهرة
    updateStatsUI();
  };

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
}

// ============================================================
//  نظام الإنجازات والإحصائيات - تحديث الواجهة
// ============================================================

function updateStatsUI() {
  const totalAchievements = Object.values(achievements).filter(v => v === true).length;
  document.getElementById('totalAchievements').textContent = totalAchievements;
  
  // تحديد المستوى
  let level = 'جديد';
  if (stats.testsCompleted > 0) {
    const avg = stats.testsCompleted > 0 ? Math.round(stats.totalScore / stats.testsCompleted) : 0;
    if (avg >= 90) level = '🏆 خبير';
    else if (avg >= 80) level = '🥇 متقدم';
    else if (avg >= 70) level = '🥈 جيد جداً';
    else if (avg >= 60) level = '🥉 جيد';
    else level = '📖 يحتاج مراجعة';
  }
  document.getElementById('userLevel').textContent = level;
  
  document.getElementById('completedTests').textContent = stats.testsCompleted;
  document.getElementById('bestStreak').textContent = stats.bestStreak;
  
  const totalMinutes = Math.floor(stats.totalTrainingTime / 60);
  document.getElementById('totalTrainingTime').textContent = totalMinutes + ' د';
  
  // تحديث الإنجازات
  updateAchievementsUI();
  
  // تحديث شريط التقدم
  updateUI();
}

function updateAchievementsUI() {
  const container = document.getElementById('achievementsContainer');
  const list = Object.entries(achievements)
    .filter(([key, val]) => val)
    .map(([key]) => {
      const names = {
        firstCommand: '🎯 أول أمر',
        tenCommands: '🏅 10 أوامر',
        firstPhase: '📚 إتقان مرحلة',
        midtermPassed: '📝 اختبار نصفي',
        finalPassed: '🏆 اختبار نهائي',
        firstTestPassed: '⭐ أول اختبار ناجح',
        perfectScore: '💯 نتيجة 100%',
        tenTests: '📊 10 اختبارات',
        fiftyTests: '🏅 50 اختباراً',
        zeroErrors: '✅ اختبار بدون أخطاء',
        fastTest: '⚡ اختبار سريع',
        allPhasesMastered: '👑 إتقان جميع المراحل'
      };
      return names[key] || key;
    });
  if (list.length) {
    container.innerHTML = `<strong data-i18n="app.achievements">🏆 الإنجازات (${list.length}):</strong> ${list.map(a => `<span class="achievement-badge">${a}</span>`).join(' ')}`;
  } else {
    container.innerHTML = '';
  }
}

// ============================================================
//  واجهة المستخدم الأساسية
// ============================================================
function updateUITexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    let txt = t(key);
    if (key === 'app.phaseStatsPrefix' || key === 'app.phaseStatsOf' || key === 'app.phaseStatsSuffix') {
      el.textContent = txt;
      return;
    }
    if (key === 'app.phaseProgressLabel') {
      el.textContent = txt;
      return;
    }
    el.textContent = txt;
  });
}

function updateUI() {
  const cmds = phaseCommands[currentPhase];
  document.getElementById('phaseTotal').textContent = cmds.length;
  const phaseMastered = mastered[currentPhase] || [];
  document.getElementById('phaseMastered').textContent = phaseMastered.length;
  const pct = Math.round((phaseMastered.length / cmds.length) * 100) || 0;
  document.getElementById('phaseProgressPercent').textContent = pct + '%';
  document.getElementById('phaseProgressFill').style.width = pct + '%';
  document.getElementById('totalXPDisplay').textContent = totalXP + ' XP';
  
  renderCommands();
  updateUITexts();
  updateStatsUI();

  const allMastered = phaseMastered.length === cmds.length;
  const phaseTestPassed = testState.phaseTests[currentPhase] === 'passed';
  const btn = document.getElementById('startPhaseTestBtn');
  if (allMastered && !phaseTestPassed) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }

  const midBtn = document.getElementById('midtermTestBtn');
  if (currentPhase === 'phase4' && allMastered && testState.phaseTests['phase4'] === 'passed' && !testState.midtermPassed) {
    midBtn.classList.remove('hidden');
  } else {
    midBtn.classList.add('hidden');
  }

  const finalBtn = document.getElementById('finalTestBtn');
  if (currentPhase === 'phase8' && allMastered && testState.phaseTests['phase8'] === 'passed' && !testState.finalPassed) {
    finalBtn.classList.remove('hidden');
  } else {
    finalBtn.classList.add('hidden');
  }

  checkAchievements();
}

function refreshLangToggleLabel() {
  const label = document.getElementById('langToggleLabel');
  if (label) {
    label.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
  }
}

// ============================================================
//  عرض الأوامر مع تحميل تدريجي
// ============================================================
let observer = null;

function renderCommands() {
  const grid = document.getElementById('commandsGrid');
  grid.innerHTML = '';
  const cmds = phaseCommands[currentPhase];
  const phaseMastered = mastered[currentPhase] || [];
  
  cmds.forEach((cmdName, index) => {
    const info = commandData[cmdName] || { 
      desc: { ar: cmdName, en: cmdName }, 
      usage: { ar: '', en: '' }, 
      syntax: '', 
      options: [], 
      examples: [] 
    };
    const isMastered = phaseMastered.includes(cmdName);
    const card = document.createElement('div');
    card.className = 'command-card';
    card.dataset.cmd = cmdName;
    card.innerHTML = `
      <strong style="font-family:monospace;">${cmdName}</strong>
      <span class="help-icon" data-cmd="${cmdName}" title="مساعدة"><i class="fas fa-question-circle"></i></span>
      <p>${info.desc[currentLang] || ''}</p>
      <p class="usage-text">💡 ${info.usage[currentLang] || ''}</p>
      <button class="btn outline" onclick="startMission('${cmdName}')"><i class="fas fa-play"></i> <span data-i18n="app.try">جرّب</span></button>
      <button class="btn ${isMastered ? 'success' : ''}" onclick="toggleMastered('${cmdName}')">${isMastered ? '✓ <span data-i18n="app.mastered">أتقنت</span>' : '<span data-i18n="app.masterIt">أتقنت؟</span>'}</button>
    `;
    grid.appendChild(card);

    const helpIcon = card.querySelector('.help-icon');
    helpIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      showHelp(cmdName);
    });
  });
  
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMoreCards();
      }
    });
  });
  
  const cards = grid.querySelectorAll('.command-card');
  cards.forEach((card, idx) => {
    if (idx >= 20) card.classList.add('hidden');
    observer.observe(card);
  });
}

function loadMoreCards() {
  const grid = document.getElementById('commandsGrid');
  const hidden = grid.querySelectorAll('.command-card.hidden');
  if (hidden.length === 0) return;
  let toShow = Math.min(20, hidden.length);
  for (let i = 0; i < toShow; i++) {
    hidden[i].classList.remove('hidden');
  }
  grid.querySelectorAll('.command-card:not(.hidden)').forEach(card => {
    if (observer) observer.unobserve(card);
    if (observer) observer.observe(card);
  });
}

// ============================================================
//  دوال إتقان الأوامر والإنجازات
// ============================================================
function toggleMastered(cmdName) {
  if (!mastered[currentPhase]) mastered[currentPhase] = [];
  const idx = mastered[currentPhase].indexOf(cmdName);
  if (idx > -1) {
    mastered[currentPhase].splice(idx, 1);
  } else {
    mastered[currentPhase].push(cmdName);
    totalXP += 10;
    localStorage.setItem('kaliTotalXP', totalXP);
    showToast(`+10 XP: ${cmdName}`, 'success');
    // تحديث إنجاز أول أمر
    const totalMastered = Object.values(mastered).reduce((acc, arr) => acc + arr.length, 0);
    if (totalMastered >= 1 && !achievements.firstCommand) {
      achievements.firstCommand = true;
      totalXP += 10;
      showToast(t('app.achievementUnlocked', { name: 'أول أمر', xp: 10 }), 'success');
    }
    if (totalMastered >= 10 && !achievements.tenCommands) {
      achievements.tenCommands = true;
      totalXP += 25;
      showToast(t('app.achievementUnlocked', { name: '10 أوامر', xp: 25 }), 'success');
    }
    // إتقان مرحلة
    const phaseMastered = mastered[currentPhase] || [];
    if (phaseMastered.length >= phaseCommands[currentPhase].length && !achievements.firstPhase) {
      achievements.firstPhase = true;
      totalXP += 50;
      showToast(t('app.achievementUnlocked', { name: 'إتقان مرحلة', xp: 50 }), 'success');
    }
    saveStats();
  }
  localStorage.setItem('kaliMastered', JSON.stringify(mastered));
  updateUI();
}

function checkAchievements() {
  // يتم استدعاؤها داخل updateUI
}

// ============================================================
//  مودال التيرمينال
// ============================================================
let activeMission = null;
let isTestMode = false;
let testCallback = null;

function startMission(cmdName, isTest = false, callback = null) {
  const info = commandData[cmdName] || {};
  activeMission = cmdName;
  isTestMode = isTest;
  testCallback = callback;

  document.getElementById('missionTitle').textContent = isTest ? t('app.commandRequired') + ' ' + cmdName : '🎯 ' + t('app.mission') + ': ' + cmdName;
  document.getElementById('missionDesc').textContent = isTest ? t('app.executeCommand', { cmd: cmdName }) : 'اكتب الأمر "' + cmdName + '" لتنفيذ المهمة.';
  document.getElementById('missionUsage').textContent = '❓ ' + t('app.usage') + ': ' + (info.usage[currentLang] || '');
  document.getElementById('missionHint').textContent = '';
  document.getElementById('terminalOutput').innerHTML = '';
  document.getElementById('terminalInput').value = '';
  document.getElementById('terminalPrompt').textContent = `kali@nour:${currentPath.replace('/home/kali','~')}$ `;
  document.getElementById('terminalModal').style.display = 'flex';
  document.getElementById('terminalInput').focus();
}

document.getElementById('terminalInput').addEventListener('keypress', function(e) {
  if (e.key !== 'Enter') return;
  const input = this.value;
  const outDiv = document.getElementById('terminalOutput');
  outDiv.innerHTML += `<div><span style="color:#ff6b6b;">${document.getElementById('terminalPrompt').textContent}</span> ${input}</div>`;
  const result = executeCommand(input);
  if (result) outDiv.innerHTML += `<div>${result}</div>`;
  document.getElementById('terminalPrompt').textContent = `kali@nour:${currentPath.replace('/home/kali','~')}$ `;
  this.value = '';

  if (isTestMode && testCallback) {
    const expected = activeMission;
    const inputCmd = input.trim().split(' ')[0];
    if (inputCmd === expected) {
      outDiv.innerHTML += `<div style="color:#10b981;">✅ ${t('app.correctCommand')}</div>`;
      testCallback(true);
    } else {
      outDiv.innerHTML += `<div style="color:#ef4444;">❌ ${t('app.wrongCommand')}</div>`;
      testCallback(false);
    }
    isTestMode = false;
    testCallback = null;
    activeMission = null;
  } else {
    if (activeMission) {
      const inputCmd = input.trim().split(' ')[0];
      if (inputCmd === activeMission) {
        if (!mastered[currentPhase].includes(activeMission)) {
          mastered[currentPhase].push(activeMission);
          totalXP += 10;
          localStorage.setItem('kaliMastered', JSON.stringify(mastered));
          localStorage.setItem('kaliTotalXP', totalXP);
          outDiv.innerHTML += '<div style="color:#10b981;">✅ أحسنت! +10 XP</div>';
          showToast(`+10 XP: ${activeMission}`, 'success');
          updateUI();
        } else {
          outDiv.innerHTML += '<div>ℹ️ لقد أتقنت هذا الأمر مسبقاً.</div>';
        }
        activeMission = null;
      }
    }
  }
  outDiv.scrollTop = outDiv.scrollHeight;
});

document.getElementById('submitCommandBtn').addEventListener('click', function() {
  const inp = document.getElementById('terminalInput');
  inp.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter' }));
});

document.getElementById('showHintBtn').addEventListener('click', function() {
  document.getElementById('missionHint').textContent = '💡 ' + t('app.hintText');
});

document.getElementById('closeTerminalModal').addEventListener('click', function() {
  document.getElementById('terminalModal').style.display = 'none';
  activeMission = null;
  isTestMode = false;
  testCallback = null;
});

window.addEventListener('click', function(e) {
  const modal = document.getElementById('terminalModal');
  if (e.target === modal) {
    modal.style.display = 'none';
    activeMission = null;
    isTestMode = false;
    testCallback = null;
  }
});

// ============================================================
//  نظام المساعدة (man)
// ============================================================
function showHelp(cmdName) {
  const info = commandData[cmdName];
  if (!info) {
    showToast('لا توجد معلومات لهذا الأمر.', 'warning');
    return;
  }
  const modal = document.getElementById('helpModal');
  document.getElementById('helpTitle').textContent = t('app.manTitle', { cmd: cmdName });
  let content = '';
  content += t('app.manSyntax', { syntax: info.syntax || cmdName }) + '\n\n';
  content += t('app.manDesc', { desc: info.desc[currentLang] || '' }) + '\n\n';
  if (info.options && info.options.length) {
    content += t('app.manOptions') + '\n';
    info.options.forEach(opt => content += `  ${opt}\n`);
    content += '\n';
  }
  if (info.examples && info.examples.length) {
    content += t('app.manExamples') + '\n';
    info.examples.forEach(ex => content += `  $ ${ex}\n`);
  }
  if (!info.options && !info.examples) {
    content += t('app.noMan');
  }
  document.getElementById('helpContent').textContent = content;
  modal.style.display = 'flex';
}

document.getElementById('closeHelpModal').addEventListener('click', function() {
  document.getElementById('helpModal').style.display = 'none';
});
document.getElementById('closeHelpBtn').addEventListener('click', function() {
  document.getElementById('helpModal').style.display = 'none';
});
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('helpModal')) {
    document.getElementById('helpModal').style.display = 'none';
  }
});

// ============================================================
//  نظام الإشعارات (Toast)
// ============================================================
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ============================================================
//  أحداث التحكم العامة
// ============================================================
document.getElementById('moduleSelect').addEventListener('change', function(e) {
  currentPhase = e.target.value;
  if (!mastered[currentPhase]) mastered[currentPhase] = [];
  updateUI();
});

document.getElementById('resetVFSBtn').addEventListener('click', function() {
  if (confirm(t('app.confirmReset'))) {
    vfs = JSON.parse(JSON.stringify(initialVFS));
    currentPath = '/home/kali';
    historyLog = [];
    jobs = [];
    inodeCounter = 1000;
    showToast(t('app.resetDone'), 'success');
  }
});

document.getElementById('resetFullBtn').addEventListener('click', function() {
  if (confirm(t('app.confirmResetFull'))) {
    // حذف كل شيء
    localStorage.clear();
    // إعادة تعيين المتغيرات
    totalXP = 0;
    mastered = {};
    Object.keys(phaseCommands).forEach(p => { mastered[p] = []; });
    achievements = {
      firstCommand: false,
      tenCommands: false,
      firstPhase: false,
      midtermPassed: false,
      finalPassed: false,
      firstTestPassed: false,
      perfectScore: false,
      tenTests: false,
      fiftyTests: false,
      zeroErrors: false,
      fastTest: false,
      allPhasesMastered: false,
    };
    stats = {
      testsCompleted: 0,
      totalScore: 0,
      bestScore: 0,
      bestStreak: 0,
      currentStreak: 0,
      totalTrainingTime: 0,
      testHistory: [],
      phaseMastery: {}
    };
    Object.keys(phaseCommands).forEach(p => { stats.phaseMastery[p] = 0; });
    testState = {
      phaseTests: {},
      midtermPassed: false,
      finalPassed: false,
    };
    // إعادة ضبط VFS
    vfs = JSON.parse(JSON.stringify(initialVFS));
    currentPath = '/home/kali';
    historyLog = [];
    jobs = [];
    inodeCounter = 1000;
    // حفظ الحالة الجديدة
    saveStats();
    saveTestState();
    localStorage.setItem('kaliTotalXP', '0');
    localStorage.setItem('kaliMastered', JSON.stringify(mastered));
    localStorage.setItem('kaliAchievements', JSON.stringify(achievements));
    showToast(t('app.resetFullDone'), 'success');
    updateUI();
  }
});

document.getElementById('modeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});
if (localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('dark-mode');

document.getElementById('langToggle').addEventListener('click', function() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('appLang', newLang);
  location.reload();
});

document.getElementById('startPhaseTestBtn').addEventListener('click', function() {
  showTest(currentPhase, 'phase');
});

document.getElementById('midtermTestBtn').addEventListener('click', function() {
  showTest('phase4', 'midterm');
});

document.getElementById('finalTestBtn').addEventListener('click', function() {
  showTest('phase8', 'final');
});

document.getElementById('closeTestModal').addEventListener('click', function() {
  document.getElementById('testModal').style.display = 'none';
});

// إضافة زر عرض الإحصائيات في الشريط
const statsBadge = document.getElementById('statsSummary');
if (statsBadge) {
  statsBadge.addEventListener('click', function() {
    showStatsModal();
  });
  statsBadge.style.cursor = 'pointer';
}

function showStatsModal() {
  const modal = document.getElementById('statsModal');
  const content = document.getElementById('statsDetailed');
  if (!modal || !content) return;
  
  let html = '';
  if (stats.testsCompleted === 0) {
    html = `<p>${t('app.noStats')}</p>`;
  } else {
    const avg = Math.round(stats.totalScore / stats.testsCompleted);
    const totalPhases = Object.keys(phaseCommands).length;
    const masteredPhases = Object.values(stats.phaseMastery).filter(p => p === 100).length;
    const totalCmds = Object.keys(commandData).length;
    const learnedCmds = Object.values(mastered).reduce((acc, arr) => acc + arr.length, 0);
    const totalMinutes = Math.floor(stats.totalTrainingTime / 60);
    
    html = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin:15px 0;">
        <div class="stat-card"><strong>📊 عدد الاختبارات</strong><br>${stats.testsCompleted}</div>
        <div class="stat-card"><strong>📈 متوسط الدرجات</strong><br>${avg}%</div>
        <div class="stat-card"><strong>🏆 أفضل درجة</strong><br>${stats.bestScore}%</div>
        <div class="stat-card"><strong>🔥 أفضل سلسلة نجاح</strong><br>${stats.bestStreak}</div>
        <div class="stat-card"><strong>📚 المراحل المتقنة</strong><br>${masteredPhases}/${totalPhases}</div>
        <div class="stat-card"><strong>📖 الأوامر المتعلمة</strong><br>${learnedCmds}/${totalCmds}</div>
        <div class="stat-card"><strong>⏱ وقت التدريب</strong><br>${totalMinutes} دقيقة</div>
        <div class="stat-card"><strong>🏅 المستوى الحالي</strong><br>${document.getElementById('userLevel').textContent}</div>
      </div>
      <div style="margin-top:15px;">
        <strong>📊 تقدم المراحل:</strong>
        <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
          ${Object.keys(phaseCommands).map(p => {
            const pct = stats.phaseMastery[p] || 0;
            const name = phaseNames[currentLang]?.[p] || p;
            return `<div style="flex:1; min-width:100px; background:var(--bg); padding:8px; border-radius:8px; text-align:center;">
              <div>${name}</div>
              <div style="font-weight:bold; color:${pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--accent)' : 'var(--danger)'};">${pct}%</div>
            </div>`;
          }).join('')}
        </div>
      </div>
      <div style="margin-top:15px;">
        <strong>📋 آخر الاختبارات:</strong>
        <div style="max-height:200px; overflow-y:auto;">
          ${stats.testHistory.slice(-5).reverse().map(t => {
            const date = new Date(t.date).toLocaleDateString();
            const level = t.level || '--';
            return `<div style="padding:5px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between;">
              <span>${date}</span>
              <span>${t.score}%</span>
              <span>${level}</span>
              <span>⏱ ${Math.floor(t.time/60)}د ${t.time%60}ث</span>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
  }
  content.innerHTML = html;
  modal.style.display = 'flex';
}

document.getElementById('closeStatsModal').addEventListener('click', function() {
  document.getElementById('statsModal').style.display = 'none';
});
document.getElementById('closeStatsBtn').addEventListener('click', function() {
  document.getElementById('statsModal').style.display = 'none';
});
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('statsModal')) {
    document.getElementById('statsModal').style.display = 'none';
  }
});

window.addEventListener('click', function(e) {
  const modal = document.getElementById('testModal');
  if (e.target === modal) modal.style.display = 'none';
});

// ============================================================
//  التهيئة النهائية
// ============================================================
currentLang = localStorage.getItem('appLang') || 'ar';
refreshLangToggleLabel();
updateUI();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
    self.addEventListener('install', e => {
      e.waitUntil(
        caches.open('kali-sim-v1').then(cache => {
          return cache.addAll([
            '/',
            'index.html',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
          ]);
        })
      );
    });
    self.addEventListener('fetch', e => {
      e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
      );
    });
  `)).then(reg => console.log('SW registered')).catch(err => console.log('SW error:', err));
}

console.log('🚀 منصة تعلم Linux/Kali جاهزة بكامل طاقتها!');