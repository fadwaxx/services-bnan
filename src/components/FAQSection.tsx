import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "هل يجب اختيار الخدمة من الموقع؟",
    answer:
      "لا يشترط ذلك. يمكنك تصفح الخدمات للاستفادة من توضيح المتطلبات، أو التواصل معنا مباشرة عبر واتساب وشرح طلبك دون اختيار خدمة محددة من الموقع.",
  },
  {
    question: "هل أستطيع طلب خدمة غير موجودة ضمن القائمة؟",
    answer:
      "نعم، يمكنك استخدام زر \"اطلب خدمة أخرى\" أو التواصل المباشر عبر واتساب، وسنراجع طلبك ونوضح لك كيف يمكن المساعدة.",
  },
  {
    question: "أين أرسل البيانات والمستندات المطلوبة؟",
    answer:
      "يتم إرسال جميع البيانات والمستندات مباشرة داخل محادثة واتساب مع المكتب، ولا يتم طلب أي بيانات عبر الموقع نفسه.",
  },
  {
    question: "هل أرسل كلمة المرور أو رمز التحقق داخل الموقع؟",
    answer:
      "لا، ولا يُطلب منك ذلك إطلاقًا. الموقع لا يحتوي على أي نموذج لإدخال كلمات المرور أو رموز التحقق، وحفاظًا على خصوصيتك يُفضّل عدم مشاركتها مع أي جهة.",
  },
  {
    question: "كم تستغرق الخدمة؟",
    answer:
      "تختلف المدة حسب نوع الخدمة والجهة المسؤولة عنها. يوضَّح المدى الزمني المتوقع لكل خدمة، إن وُجد، داخل نافذة تفاصيلها.",
  },
  {
    question: "هل جميع الطلبات مضمونة القبول؟",
    answer:
      "لا. يقوم المكتب بمساعدتك في إعداد الطلب وتقديمه بالشكل الصحيح، إلا أن القرار النهائي بالقبول أو الرفض يعود دائمًا لصلاحية الجهة المختصة.",
  },
  {
    question: "هل المكتب جهة حكومية؟",
    answer:
      "لا، المكتب جهة مستقلة تقدم خدمات مساعدة إلكترونية، ولا يمثل أي جهة حكومية أو منصة رسمية.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">الأسئلة الشائعة</span>
          <h2 className="section-title mt-4">أسئلة يتكرر طرحها</h2>
        </motion.div>

        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white border border-cream-300 rounded-xl2 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-right px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-navy text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-navy"
                  >
                    <ChevronDown size={19} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-ink-light leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
