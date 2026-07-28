import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Headphones,
  MessageCircle,
  Smile,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { createWhatsAppUrl } from "../utils/whatsapp";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

const stats = [
  {
    icon: BadgeCheck,
    title: "خبرة موثوقة",
    value: "منذ 2022",
  },
  {
    icon: CheckCircle2,
    title: "خدمة منجزة",
    value: "+1500 خدمة",
  },
  {
    icon: Smile,
    title: "عملاء سعداء",
    value: "+500 عميل",
  },
  {
    icon: Headphones,
    title: "سرعة في الرد",
    value: "أقل من 5 دقائق",
  },
];

export default function Hero() {
  const contactUrl = createWhatsAppUrl(
    siteConfig.whatsappNumber,
    "السلام عليكم، أرغب في الاستفسار عن خدماتكم."
  );

  const scrollToServices = () => {
    document
      .querySelector("#services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
    id="home"
    className="
    hero-scene
    relative
    min-h-[620px]
    pt-20
    sm:min-h-[660px]
    sm:pt-24
    lg:min-h-[700px]
    lg:pt-28
    xl:pt-14
  "
  >
      {/* طبقات خفيفة لتحسين وضوح النص */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(238,249,252,0.05)_0%,rgba(255,255,255,0.10)_42%,rgba(255,255,255,0.45)_100%)]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_55%,rgba(18,58,66,0.08)_100%)]
        "
        aria-hidden="true"
      />
<div
  className="
    container-x
    relative
    z-20
    flex
    min-h-[450px]
    items-center
    justify-center
    sm:min-h-[480px]
    md:min-h-[500px]
    lg:min-h-[520px]
    xl:min-h-[520px]
    xl:justify-end
    2xl:min-h-[560px]
  "
  dir="rtl"
>
<div
  className="
    mx-auto
    flex
    w-full
    max-w-[680px]
    flex-col
    items-center
    text-center
    sm:max-w-[720px]
    md:max-w-[740px]
    lg:max-w-[760px]
    xl:mr-0
    xl:ml-auto
    xl:items-end
    xl:text-right
    2xl:max-w-[820px]
  "
>
    <motion.span
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={0}
      className="
      inline-flex
      items-center
      justify-center
      ml-auto
      mr-0
      gap-2
      rounded-full
      border
      border-white/80
      bg-white/85
      px-4
      py-2
      text-right
      text-xs
      font-extrabold
      text-cyan-600
      shadow-soft
      backdrop-blur-md
      sm:px-5
      sm:text-sm
      mr-[0px]
    "
    >
      <span className="text-cyan-500">✦</span>
      خدمات إلكترونية موثوقة وسهلة
    </motion.span>

    <motion.h1
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={1}
      className="
        mt-5
        w-full
        text-right
        font-display
        text-[2.65rem]
        font-black
        leading-[1.2]
        text-ink
        sm:mt-6
        sm:text-6xl
        lg:text-[3.6rem]
        xl:text-[4.5rem]
      "
    >
      <span className="block text-cyan-500">نبض البنان</span>
      <span className="mt-1 block">للخدمات العامة</span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={2}
      className="
      mt-5
      w-full
      max-w-[590px]
      ml-auto
      text-right
      text-sm
      font-medium
      leading-8
      text-slate-700
      sm:text-base
      sm:leading-9
      lg:text-lg
    "
    >
نقدم خدمات إلكترونية متكاملة باحترافية وجودة عالية، مع فريق نسائي بالكامل يلتزم بأعلى معايير الخصوصية 
والسرية في التعامل مع بيانات العملاء، لتنجزي معاملاتك بثقة وراحة تامة.    </motion.p>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={3}
      className="
        mt-7
        flex
        w-full
        flex-col
        items-stretch
        justify-start
        gap-3
        sm:mt-8
        sm:flex-row
        sm:items-center
        sm:justify-start
      "
    >
      <a
        href="#services"
        onClick={(event) => {
          event.preventDefault();
          scrollToServices();
        }}
        className="
          inline-flex
          min-h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-cyan-500
          px-6
          py-3.5
          text-sm
          font-extrabold
          text-white
          shadow-[0_12px_30px_-12px_rgba(39,182,204,0.75)]
          transition
          duration-300
          hover:-translate-y-0.5
          hover:bg-cyan-600
          sm:w-auto
          sm:px-8
          sm:text-base
        "
      >
        تصفح الخدمات
        <ArrowLeft size={20} />
      </a>

      <a
        href={contactUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          min-h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-cyan-400/80
          bg-white/90
          px-6
          py-3.5
          text-sm
          font-extrabold
          text-slate-800
          shadow-soft
          backdrop-blur-md
          transition
          duration-300
          hover:-translate-y-0.5
          hover:bg-white
          sm:w-auto
          sm:px-8
          sm:text-base
        "
      >
        <MessageCircle size={22} className="text-cyan-500" />
        تواصل مباشرة عبر واتساب
      </a>
    </motion.div>
  </div>
</div>
  {/* بطاقات الإحصائيات */}
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.42,
      ease: "easeOut",
    }}
    className="
      container-x
      relative
      z-30
      mt-4
      pb-36
      sm:mt-6
      sm:pb-40
      lg:mt-2
      lg:pb-44
    "
  >
    <div
   className="
   mx-auto
   grid
   w-full
   max-w-[820px]
   grid-cols-2
   gap-3
   sm:grid-cols-4
   sm:gap-4
   xl:mr-0
   xl:ml-auto
 "
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="
              group
              rounded-2xl
              border
              border-white/80
              bg-white/95
              px-3
              py-4
              text-center
              shadow-[0_18px_45px_-24px_rgba(15,63,73,0.45)]
              backdrop-blur-md
              transition
              duration-300
              hover:border-cyan-200
              hover:shadow-[0_22px_50px_-22px_rgba(20,160,185,0.35)]
              sm:px-4
              sm:py-5
            "
          >
            <div
              className="
                mx-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-cyan-50
                text-cyan-500
                ring-4
                ring-cyan-50/70
                transition
                duration-300
                group-hover:bg-cyan-500
                group-hover:text-white
                sm:h-11
                sm:w-11
              "
            >
              <Icon size={22} strokeWidth={2.3} />
            </div>

            <h3
              className="
                mt-3
                text-xs
                font-extrabold
                text-slate-800
                sm:mt-4
                sm:text-sm
              "
            >
              {stat.title}
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                font-semibold
                text-slate-500
                sm:text-xs
              "
            >
              {stat.value}
            </p>
          </motion.div>
        );
      })}
    </div>
  </motion.div>

  {/* الأمواج السفلية */}
  <div
  className="
  hero-waves
  pointer-events-none
  absolute
  inset-x-0
  bottom-0
  z-10
  h-48
  sm:h-64
  lg:h-80
  transition-all
  duration-700
  ease-in-out
  
"
    aria-hidden="true"
  >
    <svg
      className="wave-layer wave-layer-back absolute inset-0 h-full w-full"
      viewBox="0 0 1600 220"
      preserveAspectRatio="none"
    >
      <path
        d="M0,120 C240,65 390,190 650,135 C930,75 1120,185 1600,105 L1600,220 L0,220 Z"
        fill="rgba(214,244,250,0.78)"
      />
    </svg>

    <svg
      className="wave-layer wave-layer-front absolute inset-0 h-full w-full"
      viewBox="0 0 1600 220"
      preserveAspectRatio="none"
    >
      <path
        d="M0,145 C250,100 405,205 680,150 C980,90 1190,205 1600,125 L1600,220 L0,220 Z"
        fill="#f7fcfd"
      />
    </svg>
  </div>
</section>
);
}