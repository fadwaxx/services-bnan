import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, SearchX } from "lucide-react";
import { services, type Service, type ServiceCategory } from "../data/services";
import ServiceSearch from "./ServiceSearch";
import CategoryFilter from "./CategoryFilter";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { siteConfig } from "../config/siteConfig";
import { buildOtherServiceMessage, createWhatsAppUrl } from "../utils/whatsapp";

export default function ServicesSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | ServiceCategory>("all");
  const [selected, setSelected] = useState<Service | null>(null);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // يحدث الوقت كل دقيقة حتى تختفي البطاقة تلقائيًا فور انتهاء تاريخها.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(Date.now());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      if (!service.isActive) return false;

      // الخدمات الدائمة لا تحتوي expiresAt.
      // الوظائف المؤقتة تختفي تلقائيًا بعد هذا التاريخ.
      if (service.expiresAt) {
        const expirationTime = new Date(service.expiresAt).getTime();

        // يمنع إخفاء البطاقة بالخطأ إذا كان التاريخ مكتوبًا بصيغة غير صحيحة.
        if (!Number.isNaN(expirationTime) && expirationTime <= currentTime) {
          return false;
        }
      }

      if (category !== "all" && service.category !== category) return false;
      if (!normalizedQuery) return true;

      return (
        service.title.toLowerCase().includes(normalizedQuery) ||
        service.shortDescription.toLowerCase().includes(normalizedQuery) ||
        service.code.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query, category, currentTime]);

  const otherServiceUrl = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    buildOtherServiceMessage()
  );

  return (
    <section id="services" className="py-20 sm:py-24 bg-cream-100">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">دليل الخدمات</span>
          <h2 className="section-title mt-4">اختر الخدمة المناسبة لك</h2>
          <p className="mt-3 text-ink-light leading-7">
            تصفح الخدمات أو ابحث عنها مباشرة، واطّلع على المتطلبات قبل التواصل معنا عبر
            واتساب.
          </p>
        </motion.div>

        <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 sm:justify-between">
          <ServiceSearch value={query} onChange={setQuery} />
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="mt-9">
          {filteredServices.length > 0 ? (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onViewDetails={setSelected}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center bg-white border border-cream-300 rounded-xl2 py-16 px-6"
            >
              <SearchX size={36} className="text-navy-200" />
              <p className="mt-4 text-ink-light">
                لم نجد خدمة مطابقة لبحثك ضمن القائمة الحالية.
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-navy rounded-xl2 p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-white text-xl">
              لم تجد الخدمة التي تحتاجها؟
            </h3>
            <p className="mt-2 text-navy-100 text-sm leading-7 max-w-xl">
              يمكنك التواصل معنا مباشرة عبر واتساب وشرح طلبك، ولا يشترط أن تكون الخدمة
              موجودة ضمن القائمة.
            </p>
          </div>
          <a
            href={otherServiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-wa hover:bg-wa-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            <MessageCircle size={18} />
            اطلب خدمة أخرى
          </a>
        </motion.div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}