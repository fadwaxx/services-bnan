import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  Clock,
  ListChecks,
  FileStack,
  Info,
  Lock,
} from "lucide-react";
import type { Service } from "../data/services";
import { getIcon } from "../utils/icons";
import { siteConfig } from "../config/siteConfig";
import { buildWhatsAppMessage, createWhatsAppUrl } from "../utils/whatsapp";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!service) return null;

  const Icon = getIcon(service.icon);
  const waUrl = createWhatsAppUrl(siteConfig.whatsappNumber, buildWhatsAppMessage(service));

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] rounded-t-xl2 sm:rounded-xl2 shadow-lift overflow-hidden flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-cream-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-navy" />
                </div>
                <div>
                  <h3
                    id="service-modal-title"
                    className="font-display font-bold text-navy text-xl leading-7"
                  >
                    {service.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-dashed border-navy-200 px-3 py-1">
                    <span className="text-[10px] font-bold text-ink-light">رمز الخدمة</span>
                    <span className="font-display font-extrabold text-navy text-sm tracking-wide">
                      {service.code}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="إغلاق"
                className="p-2 rounded-lg text-ink-light hover:text-navy hover:bg-navy-50 transition-colors shrink-0"
              >
                <X size={22} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-6">
              <p className="text-sm text-ink leading-7">{service.fullDescription}</p>

              {service.estimatedTime && (
                <div className="flex items-center gap-2 text-sm text-ink-light">
                  <Clock size={17} className="text-navy" />
                  <span>المدة المتوقعة: {service.estimatedTime}</span>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 text-navy font-bold text-sm mb-3">
                  <ListChecks size={18} />
                  البيانات المطلوبة
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.requiredInformation.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-ink-light bg-cream-100 rounded-lg px-3 py-2 leading-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy font-bold text-sm mb-3">
                  <FileStack size={18} />
                  المستندات المطلوبة
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.requiredDocuments.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-ink-light bg-cream-100 rounded-lg px-3 py-2 leading-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.customerNotes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-navy font-bold text-sm mb-3">
                    <Info size={18} />
                    ملاحظات مهمة
                  </div>
                  <ul className="space-y-2">
                    {service.customerNotes.map((note) => (
                      <li
                        key={note}
                        className="text-sm text-ink-light leading-7 flex gap-2 items-start"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy-300 shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-start gap-2.5 bg-navy-50 rounded-xl p-4">
                <Lock size={18} className="text-navy shrink-0 mt-0.5" />
                <p className="text-sm text-navy-700 leading-7">
                  حفاظًا على خصوصيتك، لا تكتب كلمات المرور أو رموز التحقق داخل الموقع. يتم
                  إرسال البيانات المطلوبة مباشرة عبر واتساب.
                </p>
              </div>

              <p className="text-xs text-ink-light leading-6">
                يمكنك أيضًا التواصل معنا مباشرة عبر واتساب وشرح طلبك، ولا يشترط اختيار الخدمة
                من الموقع.
              </p>
            </div>

            <div className="p-6 border-t border-cream-300">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-dark text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors"
              >
                <MessageCircle size={19} />
                اطلب الخدمة عبر واتساب
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
