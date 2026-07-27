import { motion } from "framer-motion";
import { Compass, Target, Gem } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">من نحن</span>
          <h2 className="section-title mt-4">مكتب {siteConfig.shortName}</h2>
          <p className="mt-5 text-ink-light leading-8">
            نحن مكتب متخصص في تقديم الخدمات العامة والإلكترونية، ونسعى إلى تسهيل الإجراءات
            على العميل من خلال توضيح المتطلبات، تنظيم الطلبات، وتقديم المساعدة المناسبة عبر
            قنوات تواصل سهلة ومباشرة.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {siteConfig.values.map((value) => (
              <span
                key={value}
                className="text-sm font-bold text-navy bg-navy-50 px-4 py-2 rounded-full"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5">
          {[
            { icon: Compass, title: "رؤيتنا", text: siteConfig.vision },
            { icon: Target, title: "رسالتنا", text: siteConfig.mission },
            {
              icon: Gem,
              title: "قيمنا",
              text: "الوضوح والسرعة والسرية والاهتمام في كل تفاصيل الطلب حتى إنجازه.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-cream-300 rounded-xl2 p-6 shadow-card flex gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-navy" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-light leading-7">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
