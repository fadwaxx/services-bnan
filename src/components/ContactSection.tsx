import { motion } from "framer-motion";
import { MessageCircle, Clock, MapPin, Mail, Instagram, Music2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { createWhatsAppUrl } from "../utils/whatsapp";

export default function ContactSection() {
  const waUrl = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    "السلام عليكم، أرغب في الاستفسار عن خدماتكم."
  );

  const socials = [
    { key: "instagram", label: "Instagram", icon: Instagram, href: siteConfig.socialLinks.instagram },
    { key: "tiktok", label: "TikTok", icon: Music2, href: siteConfig.socialLinks.tiktok },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="py-20 sm:py-24 bg-navy">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs sm:text-sm font-bold tracking-wide text-navy-100 bg-white/10 px-3 py-1 rounded-full">
            التواصل
          </span>
          <h2 className="mt-4 font-display font-extrabold text-white text-3xl sm:text-4xl">
            نسعد بخدمتك عبر واتساب
          </h2>
          <p className="mt-4 text-navy-100 leading-8 max-w-md">
            لأي استفسار أو طلب خدمة، تواصل معنا مباشرة وسنجيبك في أسرع وقت.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-wa hover:bg-wa-dark text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-lift transition-colors"
          >
            <MessageCircle size={19} />
            تواصل عبر واتساب الآن
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-xl2 p-7 sm:p-8 space-y-5"
        >
          <div className="flex items-start gap-3.5">
            <Clock size={19} className="text-navy-100 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-navy-100">ساعات العمل</p>
              <p className="mt-1 text-white text-sm">{siteConfig.workingHours}</p>
            </div>
          </div>

          <div className="h-px bg-white/10" />
          <a
  href="https://maps.app.goo.gl/sjVcMpvVkhUxKAaR7?g_st=ic"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-start gap-3.5"
>
  <MapPin
    size={19}
    className="mt-0.5 shrink-0 text-navy-100 transition-colors group-hover:text-white"
  />

  <div>
    <p className="text-xs font-bold text-navy-100">
      الموقع
    </p>

    <p className="mt-1 text-sm text-white transition-opacity group-hover:opacity-80">
      {siteConfig.location}
    </p>
  </div>
</a>

          {siteConfig.email && (
            <>
              <div className="h-px bg-white/10" />
              <div className="flex items-start gap-3.5">
                <Mail size={19} className="text-navy-100 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-navy-100">البريد الإلكتروني</p>
                  <p className="mt-1 text-white text-sm">{siteConfig.email}</p>
                </div>
              </div>
            </>
          )}

          {socials.length > 0 && (
            <>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
