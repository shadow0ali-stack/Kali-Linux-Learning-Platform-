const stages = [
  { id: 'phase1', name: { ar: 'أساسيات الملفات', en: 'Filesystem Basics' }, description: { ar: 'المجلدات والملفات والأوامر الأساسية', en: 'Directories, files, and basic commands' }, order: 1 },
  { id: 'phase2', name: { ar: 'النظام والمستخدمون', en: 'System & Users' }, description: { ar: 'المستخدمون، النظام، والبيئة', en: 'Users, system, and environment' }, order: 2 },
  { id: 'phase3', name: { ar: 'العمليات', en: 'Processes' }, description: { ar: 'إدارة التنفيذ والموارد', en: 'Execution and resource management' }, order: 3 },
  { id: 'phase4', name: { ar: 'الشبكات', en: 'Networking' }, description: { ar: 'الاتصال والمنافذ والحزم', en: 'Connections, ports, and packets' }, order: 4 },
  { id: 'phase5', name: { ar: 'الصلاحيات', en: 'Permissions' }, description: { ar: 'الصلاحيات والملكية والحدود', en: 'Ownership, permissions, and access control' }, order: 5 },
  { id: 'phase6', name: { ar: 'الأرشفة', en: 'Archiving' }, description: { ar: 'ضغط وتخزين الملفات', en: 'Compressing and storing files' }, order: 6 },
  { id: 'phase7', name: { ar: 'إدارة الحزم', en: 'Package Management' }, description: { ar: 'تثبيت وتحديث البرامج', en: 'Install and update software' }, order: 7 },
  { id: 'phase8', name: { ar: 'أدوات Kali', en: 'Kali Tools' }, description: { ar: 'أدوات أمن الشبكات واختبار الثغرات', en: 'Cybersecurity and network assessment tools' }, order: 8 }
];

export const StageRegistry = {
  stages: {},
  register(stage) {
    this.stages[stage.id] = stage;
  },
  get(id) {
    return this.stages[id];
  },
  getAllStages() {
    return Object.values(this.stages);
  }
};

stages.forEach((stage) => StageRegistry.register(stage));

export const stageList = stages;
