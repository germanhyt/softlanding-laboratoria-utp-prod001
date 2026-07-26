import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  titleLead: string;
  titleAccent: string;
  bodyBefore: string;
  bodyBold: string;
  bodyAfter: string;
  chevronTop: string;
  chevronBottom: string;
};

/**
 * Prototype m_part-1 / imagen 3: card amarilla + chevron rosa “>” a la derecha.
 * Mobile: título y cuerpo apilados. Desktop: dos columnas.
 */
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
        className="relative mx-auto overflow-hidden rounded-[20px] bg-primary px-5 py-8 md:max-w-[1180px] md:px-16 md:py-[68px] lg:px-[96px]"
        variants={reduce ? undefined : fadeUp}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Chevron “>” — piezas superior e inferior alineadas al borde derecho */}
        <img
          src={chevronTop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-6 w-[210px] sm:-right-8 sm:w-[240px] md:-right-4 md:-top-[5.5rem] md:w-[360px] lg:-right-16"
        />
        <img
          src={chevronBottom}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-1 w-[175px] sm:-bottom-12 sm:w-[200px] md:-bottom-28 md:right-6 md:w-[280px] lg:-right-6"
        />

        {/* Mobile: stack vertical tal cual m_part-1 */}
        <div className="relative z-10 flex flex-col gap-5 pr-[22%] md:hidden">
          <h2
            id="insight-title"
            className="text-[26px] font-semibold leading-[1.18] text-text"
          >
            {titleLead}{" "}
            <span className="font-normal">{titleAccent}</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-text">
            {bodyBefore} <strong className="font-medium">{bodyBold}</strong> {bodyAfter}
          </p>
        </div>

        {/* Desktop: dos columnas */}
        <motion.div
          className="relative z-10 hidden gap-10 pr-8 md:grid md:grid-cols-[1.15fr_0.95fr] md:items-start md:pr-16 lg:gap-14 lg:pr-24"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <h2 className="max-w-[520px] text-[36px] font-semibold leading-[1.2] text-text">
            {titleLead} <span className="font-normal">{titleAccent}</span>
          </h2>
          <p className="max-w-[400px] pt-1 text-lg leading-relaxed text-text">
            {bodyBefore} <strong className="font-medium">{bodyBold}</strong> {bodyAfter}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
