import { MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "من نحن" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "التواصل" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pb-8 pt-14">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-extrabold text-white">
              {siteConfig.officeName}
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-7 text-navy-200">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white">
              روابط الموقع
            </h4>

            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();

                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white">
              التواصل
            </h4>

            <ul className="space-y-3 text-sm text-navy-200">
              <li>{siteConfig.workingHours}</li>

              {siteConfig.location && (
                <li>{siteConfig.location}</li>
              )}

              {siteConfig.email && (
                <li>{siteConfig.email}</li>
              )}

              <li>
                <a
                  href="https://maps.app.goo.gl/sjVcMpvVkhUxKAaR7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/15
                    bg-white/5
                    px-3
                    py-2
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:border-cyan-400/50
                    hover:bg-white/10
                  "
                >
                  <MapPin size={18} className="text-cyan-400" />
                  موقعنا على خرائط Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/10
            pt-6
            text-center
            text-xs
            text-navy-300
            sm:flex-row
            sm:text-right
          "
        >
          <p>
            {siteConfig.officeName} جهة مستقلة تقدم خدمات مساعدة إلكترونية،
            ولا تمثل أي جهة حكومية أو منصة رسمية.
          </p>

          <p>
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
        </div>
      </div> 
      <div className="mt-6 border-t border-white/10 pt-4 text-center">
  <a
    href="https://fadwa-portfolio-five.vercel.app/#contact"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-white/50 transition-colors hover:text-white"
  >
    Crafted by <span className="font-semibold">Fadwa Alsaif ↗</span>
  </a>
</div>
    </footer>
  );
}