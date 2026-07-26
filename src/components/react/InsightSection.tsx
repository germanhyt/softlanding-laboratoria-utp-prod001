import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Props = {
  titleLead: string;
  titleAccent: string;
  bodyBefore: string;
  bodyBold: string;
  bodyAfter: string;
  chevronTop: string;
  chevronBottom: string;
};

export default function InsightSection({
  titleLead,
  titleAccent,
  bodyBefore,
  bodyBold,
  bodyAfter,
  chevronTop,
  chevronBottom,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      className="mx-auto mt-5 w-full max-w-[1440px] px-4 pb-6 md:mt-8 md:px-10 md:pb-14"
      aria-labelledby="insight-title"
    >
      <motion.div
        className="relative mx-auto overflow-hidden rounded-[20px] bg-primary px-5 py-10 md:max-w-[1180px] md:px-16 md:py-[68px] lg:px-[96px]"
        variants={reduce ? undefined : fadeUp}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.img
          src={chevronTop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-[6rem] -top-[2rem] w-[220px] md:-right-4 md:-top-[5.5rem] md:w-[360px] lg:-right-40"
          initial={reduce ? false : { opacity: 0, x: 40, rotate: -6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.15 }}
        />
        <motion.img
          src={chevronBottom}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-[-12px] w-[200px] md:-bottom-28 md:right-6 md:w-[280px] lg:-right-8"
          initial={reduce ? false : { opacity: 0, x: 48, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.28 }}
        />

        <motion.div
          className="relative z-10 grid gap-8 md:grid-cols-[1.15fr_0.95fr] md:items-start md:gap-10 lg:gap-14"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="insight-title"
            className="max-w-[520px] text-[26px] font-semibold leading-[1.2] text-text md:text-[36px]"
            variants={fadeUp}
          >
            {titleLead}{" "}
            <span className="font-normal">{titleAccent}</span>
          </motion.h2>

          <motion.p
            className="max-w-[400px] text-base leading-relaxed text-text md:pt-1 md:text-lg"
            variants={fadeUp}
          >
            {bodyBefore}{" "}
            <strong className="font-medium">{bodyBold}</strong> {bodyAfter}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
