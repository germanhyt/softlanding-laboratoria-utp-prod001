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
      className="mx-auto mt-5 w-full max-w-[1440px] px-4 md:mt-8 md:px-10"
      aria-labelledby="insight-title"
    >
      <motion.div
        className="relative mx-auto overflow-hidden rounded-[20px] bg-primary px-5 py-10 md:max-w-[1065px] md:px-[106px] md:py-16"
        variants={reduce ? undefined : fadeUp}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.img
          src={chevronTop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 w-[240px] md:-right-8 md:-top-[70px] md:w-[340px]"
          initial={reduce ? false : { opacity: 0, x: 40, rotate: -6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.15 }}
        />
        <motion.img
          src={chevronBottom}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-6 w-[200px] md:-bottom-20 md:right-0 md:w-[260px]"
          initial={reduce ? false : { opacity: 0, x: 48, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.28 }}
        />

        <motion.div
          className="relative z-10 grid gap-8 md:grid-cols-[471fr_360fr] md:items-start md:gap-[22px]"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="insight-title"
            className="max-w-[471px] text-[26px] font-semibold leading-[1.2] text-text md:text-[36px]"
            variants={fadeUp}
          >
            {titleLead}{" "}
            <span className="font-normal">{titleAccent}</span>
          </motion.h2>

          <motion.p
            className="max-w-[360px] text-base leading-relaxed text-text md:pt-1 md:text-lg"
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
