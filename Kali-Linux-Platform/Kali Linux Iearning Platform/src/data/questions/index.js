const theoretical = [
  {
    id: 'th-1',
    type: 'theoretical',
    category: 'filesystem',
    stage: 'phase1',
    command: 'ls',
    question: { ar: 'ما هو الأمر الذي يعرض الملفات داخل المجلد الحالي؟', en: 'Which command shows files in the current directory?' },
    options: { ar: ['pwd', 'ls', 'cd', 'mkdir'], en: ['pwd', 'ls', 'cd', 'mkdir'] },
    correct: 'ls'
  },
  {
    id: 'th-2',
    type: 'theoretical',
    category: 'filesystem',
    stage: 'phase1',
    command: 'mkdir',
    question: { ar: 'أي أمر ينشئ مجلدًا جديدًا؟', en: 'Which command creates a new directory?' },
    options: { ar: ['mkdir', 'touch', 'rm', 'cp'], en: ['mkdir', 'touch', 'rm', 'cp'] },
    correct: 'mkdir'
  },
  {
    id: 'th-3',
    type: 'theoretical',
    category: 'system',
    stage: 'phase2',
    command: 'whoami',
    question: { ar: 'ما هو الأمر الذي يعرض اسم المستخدم الحالي؟', en: 'Which command displays the current username?' },
    options: { ar: ['whoami', 'id', 'w', 'groups'], en: ['whoami', 'id', 'w', 'groups'] },
    correct: 'whoami'
  },
  {
    id: 'th-4',
    type: 'theoretical',
    category: 'processes',
    stage: 'phase3',
    command: 'ps',
    question: { ar: 'ما هو الأمر الذي يوضح العمليات الحالية؟', en: 'Which command shows the current processes?' },
    options: { ar: ['ps', 'top', 'kill', 'jobs'], en: ['ps', 'top', 'kill', 'jobs'] },
    correct: 'ps'
  },
  {
    id: 'th-5',
    type: 'theoretical',
    category: 'networking',
    stage: 'phase4',
    command: 'ping',
    question: { ar: 'ما هو الأمر الذي يختبر اتصال مضيف؟', en: 'Which command tests connectivity to a host?' },
    options: { ar: ['ping', 'ip', 'ssh', 'curl'], en: ['ping', 'ip', 'ssh', 'curl'] },
    correct: 'ping'
  },
  {
    id: 'th-6',
    type: 'theoretical',
    category: 'permissions',
    stage: 'phase5',
    command: 'chmod',
    question: { ar: 'ما هو الأمر الذي يغيّر صلاحيات الملف؟', en: 'Which command changes file permissions?' },
    options: { ar: ['chmod', 'chown', 'touch', 'rm'], en: ['chmod', 'chown', 'touch', 'rm'] },
    correct: 'chmod'
  },
  {
    id: 'th-7',
    type: 'theoretical',
    category: 'archive',
    stage: 'phase6',
    command: 'tar',
    question: { ar: 'أي أمر يضغط ملفات في أرشيف؟', en: 'Which command archives files into a single bundle?' },
    options: { ar: ['tar', 'zip', 'gzip', 'ls'], en: ['tar', 'zip', 'gzip', 'ls'] },
    correct: 'tar'
  },
  {
    id: 'th-8',
    type: 'theoretical',
    category: 'packages',
    stage: 'phase7',
    command: 'apt',
    question: { ar: 'ما هو مدير الحزم في Debian/Ubuntu؟', en: 'Which package manager is used in Debian/Ubuntu?' },
    options: { ar: ['apt', 'ssh', 'nmap', 'tar'], en: ['apt', 'ssh', 'nmap', 'tar'] },
    correct: 'apt'
  },
  {
    id: 'th-9',
    type: 'theoretical',
    category: 'kali-tools',
    stage: 'phase8',
    command: 'nmap',
    question: { ar: 'ما هو الأمر المستخدم لفحص الشبكات والمنافذ؟', en: 'Which command is used to scan networks and ports?' },
    options: { ar: ['nmap', 'netstat', 'ping', 'curl'], en: ['nmap', 'netstat', 'ping', 'curl'] },
    correct: 'nmap'
  },
  {
    id: 'th-10',
    type: 'theoretical',
    category: 'filesystem',
    stage: 'phase1',
    command: 'cat',
    question: { ar: 'ما هو الأمر الذي يقرأ محتوى الملف؟', en: 'Which command reads a file content?' },
    options: { ar: ['cat', 'pwd', 'mkdir', 'touch'], en: ['cat', 'pwd', 'mkdir', 'touch'] },
    correct: 'cat'
  }
];

const practical = [
  {
    id: 'pr-1',
    type: 'practical',
    stage: 'phase1',
    category: 'filesystem',
    command: 'mkdir',
    prompt: { ar: 'اكتب الأمر الذي ينشئ مجلدًا باسم projects', en: 'Write the command that creates a folder named projects' },
    validator: (value) => /^mkdir\s+projects\s*$/.test(value.trim())
  },
  {
    id: 'pr-2',
    type: 'practical',
    stage: 'phase1',
    category: 'filesystem',
    command: 'touch',
    prompt: { ar: 'اكتب الأمر الذي ينشئ ملفًا باسم notes.txt', en: 'Write the command that creates a file named notes.txt' },
    validator: (value) => /^touch\s+notes\.txt\s*$/.test(value.trim())
  },
  {
    id: 'pr-3',
    type: 'practical',
    stage: 'phase1',
    category: 'filesystem',
    command: 'pwd',
    prompt: { ar: 'اكتب الأمر الذي يعرض المسار الحالي', en: 'Write the command that displays the current path' },
    validator: (value) => /^pwd\s*$/.test(value.trim())
  },
  {
    id: 'pr-4',
    type: 'practical',
    stage: 'phase2',
    category: 'system',
    command: 'whoami',
    prompt: { ar: 'اكتب الأمر الذي يعرض اسم المستخدم الحالي', en: 'Write the command that shows the current username' },
    validator: (value) => /^whoami\s*$/.test(value.trim())
  },
  {
    id: 'pr-5',
    type: 'practical',
    stage: 'phase3',
    category: 'processes',
    command: 'ps',
    prompt: { ar: 'اكتب الأمر الذي يعرض العمليات الحالية', en: 'Write the command that shows current processes' },
    validator: (value) => /^ps\s*(aux)?\s*$/.test(value.trim())
  },
  {
    id: 'pr-6',
    type: 'practical',
    stage: 'phase4',
    category: 'networking',
    command: 'ping',
    prompt: { ar: 'اكتب الأمر الذي يختبر اتصال google.com', en: 'Write the command that tests connectivity to google.com' },
    validator: (value) => /^ping\s+google\.com\s*$/.test(value.trim())
  },
  {
    id: 'pr-7',
    type: 'practical',
    stage: 'phase5',
    category: 'permissions',
    command: 'chmod',
    prompt: { ar: 'اكتب الأمر الذي يمنح صلاحية التنفيذ لملف script.sh', en: 'Write the command that gives executable permission to script.sh' },
    validator: (value) => /^chmod\s+\+x\s+script\.sh\s*$/.test(value.trim())
  },
  {
    id: 'pr-8',
    type: 'practical',
    stage: 'phase6',
    category: 'archive',
    command: 'tar',
    prompt: { ar: 'اكتب الأمر الذي يقوم بأرشفة مجلد باسم backup', en: 'Write the command that archives a folder named backup' },
    validator: (value) => /^tar\s+-cf\s+backup\.tar\s+backup\s*$/.test(value.trim())
  },
  {
    id: 'pr-9',
    type: 'practical',
    stage: 'phase7',
    category: 'packages',
    command: 'apt',
    prompt: { ar: 'اكتب الأمر الذي يقوم بتحديث قائمة الحزم', en: 'Write the command that updates the package list' },
    validator: (value) => /^apt\s+update\s*$/.test(value.trim())
  },
  {
    id: 'pr-10',
    type: 'practical',
    stage: 'phase8',
    category: 'kali-tools',
    command: 'nmap',
    prompt: { ar: 'اكتب الأمر الذي يفحص المنافذ على 192.168.1.1', en: 'Write the command that scans ports on 192.168.1.1' },
    validator: (value) => /^nmap\s+192\.168\.1\.1\s*$/.test(value.trim())
  }
];

export const QuestionBank = {
  theoretical,
  practical
};

export const questionList = { theoretical, practical };
