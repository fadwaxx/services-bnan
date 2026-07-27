import type { Service } from "../data/services";

export function createWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppMessage(service: Service): string {
  if (service.customWhatsAppMessage) {
    return service.customWhatsAppMessage;
  }

  const informationFields = service.requiredInformation
    .map((item) => `${item}:`)
    .join("\n");

  return `السلام عليكم

أرغب في خدمة:
${service.title}

يرجى تعبئة البيانات التالية:

${informationFields}

ملاحظات:`;
}

// هذا الاسم موجود احتياطًا لأي ملف آخر يستخدمه.
export function buildServiceMessage(service: Service): string {
  return buildWhatsAppMessage(service);
}

export function buildOtherServiceMessage(): string {
  return `السلام عليكم

أرغب في طلب خدمة غير موجودة ضمن القائمة.

يرجى تعبئة البيانات التالية:

اسم الخدمة المطلوبة:
الاسم الرباعي:
رقم الهوية:
رقم الجوال:
تفاصيل الطلب:

ملاحظات:`;
}