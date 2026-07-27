import { motion } from "framer-motion";
import { ListChecks, BookOpenCheck, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: ListChecks, title: "اختر الخدمة", text: "تصفح دليل الخدمات واختر ما يناسب طلبك." },
  { icon: BookOpenCheck, title: "اقرأ المتطلبات", text: "اطّلع على البيانات والمستندات المطلوبة." },
  { icon: MessageCircle, title: "اضغط على واتساب", text: "تفتح محادثة المكتب برسالة جاهزة تحتوي على رمز الخدمة." },
  { icon: Send, title: "أرسل البيانات المطلوبة", text: "أرسل بياناتك ومستنداتك مباشرة داخل المحادثة." },
  { icon: CheckCircle2, title: "المتابعة والإنجاز", text: "يتم التواصل معك لإكمال الخدمة ومتابعة طلبك." },
];

export default function StepsSection() {
  return (
    <section className="py-20 sm:py-24 bg-cream-100">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">طريقة طلب الخدمة</span>
          <h2 className="section-title mt-4">خمس خطوات بسيطة لإنجاز طلبك</h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-8 right-0 left-0 h-px bg-cream-300" />
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-right"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-navy flex items-center justify-center shadow-card">
                  <step.icon size={26} className="text-white" strokeWidth={2} />
                </div>
                <span className="mt-4 text-xs font-bold text-navy-400">
                  الخطوة {i + 1}
                </span>
                <h3 className="mt-1.5 font-display font-bold text-navy text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light leading-7">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
