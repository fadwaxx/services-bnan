import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowUpLeft,
  Sparkles,
} from "lucide-react";
import type { Service } from "../data/services";
import { categoryOptions } from "../data/services";
import { getIcon } from "../utils/icons";
import { siteConfig } from "../config/siteConfig";
import {
  buildWhatsAppMessage,
  createWhatsAppUrl,
} from "../utils/whatsapp";

interface ServiceCardProps {
  service: Service;
  onViewDetails: (service: Service) => void;
}

export default function ServiceCard({
  service,
  onViewDetails,
}: ServiceCardProps) {
  const isPremium = service.cardStyle === "premium";
  const Icon = getIcon(service.icon);

  const categoryLabel =
    categoryOptions.find((category) => category.id === service.category)
      ?.label ?? "";

  const waUrl = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    buildWhatsAppMessage(service)
  );

  // وجود expiresAt يعني أن البطاقة مؤقتة.
  const isTemporary = Boolean(service.expiresAt);

  let temporaryLabel = "التقديم لفترة محدودة";

  if (service.expiresAt) {
    const expirationDate = new Date(service.expiresAt);
    const now = new Date();

    const isLastDay =
      expirationDate.getFullYear() === now.getFullYear() &&
      expirationDate.getMonth() === now.getMonth() &&
      expirationDate.getDate() === now.getDate();

    if (isLastDay) {
      temporaryLabel = "آخر يوم للتقديم";
    }
  }

  const cardStyle = isPremium
    ? "relative overflow-hidden border-amber-300 bg-gradient-to-br from-amber-50 via-yellow-50 to-white shadow-[0_14px_40px_rgba(217,119,6,0.18)] hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(217,119,6,0.25)]"
    : isTemporary
      ? "border-sky-200 bg-sky-50 shadow-card"
      : "border-cream-300 bg-white shadow-card";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={`flex h-full flex-col rounded-xl2 border p-6 transition-all duration-300 ${cardStyle}`}
    >
      {isPremium && (
        <>
          <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-amber-300/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-14 -right-14 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="relative z-10 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1.5 text-xs font-extrabold text-amber-900 shadow-sm">
              <Sparkles size={14} />
              {service.badgeText || "خدمة مميزة"}
            </span>
          </div>
        </>
      )}

      {!isPremium && isTemporary && (
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-sky-600 px-3 py-1.5 text-xs font-bold text-white">
            {temporaryLabel}
          </span>
        </div>
      )}

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ${
            isPremium
              ? "border-amber-300 bg-amber-100 text-amber-800 shadow-sm"
              : isTemporary
                ? "border-sky-200 bg-sky-100 text-navy"
                : "border-transparent bg-navy-50 text-navy"
          }`}
        >
          <Icon
            size={22}
            className={isPremium ? "text-amber-800" : "text-navy"}
            strokeWidth={2}
          />
        </div>

        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold ${
            isPremium
              ? "border border-amber-200 bg-white/70 text-amber-900"
              : isTemporary
                ? "bg-sky-100 text-ink-light"
                : "bg-cream-200 text-ink-light"
          }`}
        >
          {categoryLabel}
        </span>
      </div>

      <h3
        className={`relative z-10 mt-5 font-display text-lg font-bold leading-7 ${
          isPremium ? "text-amber-950" : "text-navy"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`relative z-10 mt-2 flex-1 text-sm leading-7 ${
          isPremium ? "text-amber-950/70" : "text-ink-light"
        }`}
      >
        {service.shortDescription}
      </p>

      <div
        className={`relative z-10 mt-4 inline-flex self-start items-center gap-2 rounded-lg border border-dashed px-3 py-1.5 ${
          isPremium
            ? "border-amber-300 bg-white/50"
            : "border-navy-200"
        }`}
      >
        <span
          className={`text-[10px] font-bold ${
            isPremium ? "text-amber-800" : "text-ink-light"
          }`}
        >
          رمز الخدمة
        </span>

        <span
          className={`font-display text-sm font-extrabold tracking-wide ${
            isPremium ? "text-amber-950" : "text-navy"
          }`}
        >
          {service.code}
        </span>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onViewDetails(service)}
          className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors ${
            isPremium
              ? "border-amber-300 bg-white/70 text-amber-950 hover:bg-amber-100"
              : "border-navy-200 text-navy hover:bg-navy-50"
          }`}
        >
          عرض التفاصيل
          <ArrowUpLeft size={16} />
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all ${
            isPremium
              ? "bg-amber-500 shadow-md hover:bg-amber-600 hover:shadow-lg"
              : "bg-wa hover:bg-wa-dark"
          }`}
        >
          <MessageCircle size={16} />
          اطلب عبر واتساب
        </a>
      </div>
    </motion.div>
  );
}