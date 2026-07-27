import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { createWhatsAppUrl } from "../utils/whatsapp";

/**
 * زر واتساب ثابت أسفل الشاشة على الجوال، للتواصل العام مع المكتب.
 */
export default function WhatsAppButton() {
  const url = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    "السلام عليكم، أرغب في الاستفسار عن خدماتكم."
  );

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="lg:hidden fixed bottom-5 inset-x-5 z-40 flex items-center justify-center gap-2 bg-wa hover:bg-wa-dark text-white font-bold text-base py-3.5 rounded-2xl shadow-lift"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={20} />
      تواصل عبر واتساب
    </motion.a>
  );
}
