import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * يحوّل اسم الأيقونة المخزّن في بيانات الخدمة إلى مكون Lucide فعلي.
 * في حال عدم وجود الاسم، يتم استخدام أيقونة افتراضية آمنة.
 */
export function getIcon(name: string): LucideIcon {
  const icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return icon ?? Icons.FileText;
}
