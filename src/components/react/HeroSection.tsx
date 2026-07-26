import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, fadeUp, scaleIn, springSoft, stagger } from "@/lib/motion";

type Props = {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  tagline: string;
  brand: string;
  partner: string;
  imageDesktop: string;
  imageMobile: string;
  logoWhite: string;
  logoUtp: string;
};

export default function HeroSection({
  title,
  description,
  cta,
  ctaHref,
  tagline,
  brand,
  partner,
  imageDesktop,
  imageMobile,
  logoWhite,
  logoUtp,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 pt-2 md:px-10 md:pt-1.5"
      aria-labelledby="hero-title"
    >
      <div className="relative overflow-hidden rounded-[20px]">
        <motion.div
          className="absolute inset-0"
          variants={reduce ? undefined : scaleIn}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={imageDesktop} type="image/webp" />
            <img
              src={imageMobile}
              alt=""
              className="h-full w-full object-cover"
              width={1358}
              height={604}
              fetchPriority="high"
            />
          </picture>
        </motion.div>

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/35 md:bg-gradient-hero"
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 flex min-h-[540px] flex-col justify-between px-5 py-8 md:min-h-[604px] md:px-[94px] md:pb-12 md:pt-[97px]"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <div className="max-w-[526px]">
            <motion.h1
              id="hero-title"
              className="text-[28px] font-semibold leading-[1.15] text-white xs:text-[32px] md:text-[42px]"
              variants={fadeUp}
            >
              {title}
            </motion.h1>

            <motion.div className="mt-5 flex gap-[13px] md:mt-6" variants={fadeUp}>
              <motion.span
                className="mt-0.5 w-1 shrink-0 self-stretch rounded-full bg-accent-pink md:w-1"
                style={{ width: 4 }}
                aria-hidden="true"
                initial={reduce ? false : { scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.35, duration: 0.55, ease: easeOutExpo }}
              />
              <p className="max-w-[463px] text-sm leading-relaxed text-white md:text-base">
                {description}
              </p>
            </motion.div>

            <motion.div className="mt-7 md:mt-8" variants={fadeUp}>
              <motion.a
                href={ctaHref}
                className="btn-primary"
                whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springSoft}
              >
                {cta}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 flex flex-col gap-3 text-sm text-white md:mt-0 md:flex-row md:items-center md:gap-6 md:text-base"
            variants={fadeUp}
          >
            <span className="whitespace-nowrap">{tagline}</span>
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src={logoWhite}
                alt={brand}
                className="h-[22px] w-auto md:h-[27px]"
                width={213}
                height={27}
              />
              <span className="text-xl font-semibold leading-none md:text-[26px]" aria-hidden="true">
                /
              </span>
              <img
                src={logoUtp}
                alt={partner}
                className="h-[22px] w-auto md:h-[28px]"
                width={85}
                height={28}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
