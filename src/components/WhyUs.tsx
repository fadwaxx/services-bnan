import { motion } from "framer-motion";
import { Eye, MessageCircleMore, Zap, LayoutGrid, ListChecks, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "وضوح المتطلبات",
    description: "كل خدمة موضح فيها البيانات والمستندات المطلوبة بدقة قبل البدء.",
  },
  {
    icon: MessageCircleMore,
    title: "سهولة التواصل",
    description: "تواصل مباشر عبر واتساب دون تعقيد أو نماذج طويلة.",
  },
  {
    icon: Zap,
    title: "سرعة الرد",
    description: "متابعة سريعة لطلبك فور استلام رسالتك على واتساب.",
  },
  {
    icon: LayoutGrid,
    title: "تنوع الخدمات",
    description: "خدمات توظيف وحكومية وتعليمية وإلكترونية متعددة في مكان واحد.",
  },
  {
    icon: ListChecks,
    title: "متابعة العميل",
    description: "متابعة طلبك حتى إنجازه دون الحاجة للاستفسار المتكرر.",
  },
  {
    icon: ShieldCheck,
    title: "سرية واهتمام",
    description: "التعامل مع بياناتك ومستنداتك بخصوصية واهتمام كامل.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">لماذا نحن</span>
          <h2 className="section-title mt-4">مكتب موثوق يهتم بتفاصيل طلبك</h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-cream-300 rounded-xl2 p-6 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center">
                <item.icon size={22} className="text-navy" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-bold text-navy text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-light leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
