import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { createWhatsAppUrl } from "../utils/whatsapp";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "من نحن" },
  { href: "#projects", label: "أعمالنا" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "التواصل" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // القسم الظاهر حاليًا
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // مراقبة أقسام الصفحة وتغيير الزر النشط
  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const contactUrl = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    "السلام عليكم، أرغب في الاستفسار عن خدماتكم."
  );

  const handleLinkClick = (href: string) => {
    setOpen(false);

    // ينور الزر مباشرة عند الضغط عليه
    setActiveSection(href.replace("#", ""));

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-x relative h-32 sm:h-36 xl:h-44" dir="rtl">
        {/* الشعار مستقل في يمين الصفحة */}
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleLinkClick("#home");
          }}
          className="
  absolute
  right-0
  top-0
  z-20
  flex
  items-center
"
          aria-label="نبض البنان للخدمات العامة"
        >
          <img
            src="/assets/nabd-logo.png"
            alt="نبض البنان للخدمات العامة"
            className="
            h-24
            w-auto
            object-contain
            sm:h-28
            xl:h-36
            2xl:h-40
          "
          />
        </a>

        {/* روابط التنقل مستقلة في منتصف الصفحة */}
        <nav
  className="
    fixed
    left-1/2
    top-6
    z-50
    hidden
    -translate-x-1/2
    items-center
    justify-center
    gap-1
    rounded-full
    bg-white/45
    px-4
    py-2
    backdrop-blur-md
    xl:flex
    xl:gap-2
    xl:px-6
  "
          aria-label="التنقل الرئيسي"
        >
          {navLinks.map((link) => {
            const sectionName = link.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`
                  whitespace-nowrap
                  rounded-full
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  transition
                  duration-300
                  ${
                    isActive
                      ? "bg-cyan-100/90 text-cyan-600"
                      : "text-slate-800 hover:bg-white/80 hover:text-cyan-600"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* زر الواتساب مستقل في يسار الصفحة */}
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute
            left-0
            top-7
            hidden
            min-h-14
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-cyan-400
            bg-white
            px-5
            py-3
            text-sm
            font-extrabold
            text-cyan-600
            shadow-md
            transition
            duration-300
            hover:-translate-y-0.5
            hover:bg-cyan-50
            xl:inline-flex
          "
        >
          <MessageCircle size={20} />
          تواصل عبر واتساب
        </a>

        {/* زر القائمة في الجوال */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="
          absolute
          left-0
          top-6
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-white
          p-2.5
          text-cyan-600
          shadow-md
          transition
          hover:bg-cyan-50
          xl:hidden
        "
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* القائمة المنسدلة للجوال */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t
              border-cyan-100
              bg-white/95
              backdrop-blur-xl
              xl:hidden
            "
          >
            <div
              className="
                container-x
                flex
                flex-col
                gap-2
                py-5
              "
            >
              {navLinks.map((link) => {
                const sectionName = link.href.replace("#", "");
                const isActive = activeSection === sectionName;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-bold
                      transition
                      duration-300
                      ${
                        isActive
                          ? "bg-cyan-50 text-cyan-600"
                          : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  px-5
                  py-3.5
                  font-extrabold
                  text-white
                  shadow-lg
                  transition
                  duration-300
                  hover:bg-cyan-600
                "
              >
                <MessageCircle size={20} />
                تواصل عبر واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}