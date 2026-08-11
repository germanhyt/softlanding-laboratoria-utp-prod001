import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  titleLead: string;
  titleAccent: string;
  bodyBefore: string;
  bodyBold: string;
  bodyAfter: string;
  chevron: string;
};

/**
 * Banner insight: card amarilla + vector-chevron a la derecha.
 * Mobile: título y cuerpo apilados. Desktop: dos columnas.
 */
export default function InsightSection({
  titleLead,
  titleAccent,
  bodyBefore,
  bodyBold,
  bodyAfter,
  chevron,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="por-que"
      className="mx-auto mt-5 w-full max-w-[1440px] scroll-mt-[72px] px-4 pb-6 md:mt-8 md:scroll-mt-[92px] md:px-10 md:pb-14"
      aria-labelledby="insight-title"
    >
      <motion.div
        className="relative mx-auto overflow-hidden rounded-[20px] bg-primary px-5 py-8 md:max-w-[1180px] md:py-[68px] md:pl-14 md:pr-16 lg:pl-16 lg:pr-[96px]"
        variants={reduce ? undefined : fadeUp}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        <img
          src={chevron}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 h-full w-auto max-w-none object-cover object-right -right-[14%] translate-x-[22%] max-[449px]:right-0 max-[449px]:translate-x-[4%] sm:-right-[4%] sm:translate-x-[28%] md:-right-[7%] md:translate-x-[26%] lg:-right-[3.5%] lg:translate-x-[28%]"
        />

        {/* Mobile: stack vertical */}
        <div className="relative z-10 flex flex-col gap-4 pr-[16%] xl:pr-[30%] sm:pr-[24%] md:hidden">
          <h2
            id="insight-title"
            className="text-[20px] font-semibold leading-[1.28] text-text sm:text-[21px]"
          >
            {titleLead}{" "}
            <span className="font-normal">{titleAccent}</span>
          </h2>
          <p className="text-[15px] leading-[1.55] text-text sm:text-base">
            {bodyBefore} <strong className="font-medium">{bodyBold}</strong> {bodyAfter}
          </p>
        </div>

        {/* Desktop: dos columnas */}
        <motion.div
          className="relative z-10 hidden gap-10 pr-12 md:grid md:grid-cols-[1.15fr_0.95fr] md:items-center md:pr-16 lg:gap-14 lg:pr-12"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <h2 className="max-w-[480px] text-[24px] font-semibold leading-[1.25] text-text lg:text-[26px]">
            {titleLead} <span className="font-normal">{titleAccent}</span>
          </h2>
          <p className="max-w-[400px] text-lg leading-relaxed text-text">
            {bodyBefore} <strong className="font-medium">{bodyBold}</strong> {bodyAfter}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
