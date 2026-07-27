// أعمال أو إنجازات سابقة — اترك المصفوفة فارغة لإخفاء القسم بالكامل من الموقع.

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  serviceType: string;
  date?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "project-1",
    title: "دفعة تقديم على جدارات",
    description: "متابعة مجموعة من طلبات التقديم على وظائف جدارات خلال فترة قصيرة، مع اكتمال جميع الملفات.",
    serviceType: "التوظيف",
    date: "2025",
  },
  {
    id: "project-2",
    title: "حملة تجديد إقامات",
    description: "إنجاز عدد من طلبات تجديد الإقامة قبل انتهاء المهلة النظامية مباشرة.",
    serviceType: "الخدمات الحكومية",
    date: "2025",
  },
  {
    id: "project-3",
    title: "إعداد سير ذاتية للخريجين",
    description: "تصميم سير ذاتية احترافية لمجموعة من الخريجين الجدد استعدادًا لسوق العمل.",
    serviceType: "السيرة الذاتية",
    date: "2025",
  },
];
