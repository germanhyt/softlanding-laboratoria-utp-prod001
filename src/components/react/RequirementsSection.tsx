import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springSoft, stagger, viewportOnce } from "@/lib/motion";
import RisingArrows from "@/components/react/RisingArrows";

type Card = {
  icon: string;
  iconAlt: string;
  title: string;
  items: string[];
};

type Props = {
  title: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  arrows: string;
  cards: Card[];
};

export default function RequirementsSection({
  title,
  cta,
  ctaHref,
  image,
  imageAlt,
  arrows,
  cards,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      id="requisitos"
      className="relative scroll-mt-[72px] overflow-hidden bg-background md:scroll-mt-[92px]"
      aria-labelledby="requirements-title"
    >
      {/* Mobile: flechas top→bottom, ancho completo del asset */}
      <div className="pointer-events-none absolute inset-0 z-[1] md:hidden" aria-hidden="true">
        <RisingArrows
          src={arrows}
          fit="width"
          className="w-[52%] xs:w-[54%] sm:w-[48%]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-10 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] md:items-stretch md:gap-8 md:px-10 md:pb-0 lg:gap-10">
        <div className="pb-10 pt-14 md:pb-20 md:pt-20">
          <motion.h2
            id="requirements-title"
            className="mb-8 max-w-[656px] text-[28px] font-semibold leading-[1.15] text-text md:mb-10 md:text-[42px]"
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {title}
          </motion.h2>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={reduce ? undefined : stagger}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {cards.map((card) => (
              <motion.article
                key={card.title}
                className="relative z-10 rounded-[20px] border border-black/5 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:p-6"
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={springSoft}
              >
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="mb-4 h-8 w-8 object-contain"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <h3 className="mb-3 text-base font-semibold md:text-lg">{card.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-text-muted md:text-base">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="relative z-10 mt-8"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
          >
            <motion.a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={springSoft}
            >
              {cta}
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile: imagen a ancho completo; desktop: columna visual con flechas */}
        <motion.div
          className="relative flex min-h-[320px] w-full flex-col justify-end md:min-h-full"
          initial={reduce ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hidden md:block">
            <RisingArrows src={arrows} className="w-[48%] lg:w-[44%]" />
          </div>
          <img
            src={image}
            alt={imageAlt}
            className="relative z-10 -mx-4 mb-0 w-[calc(100%+2rem)] max-w-none rounded-t-[20px] object-cover object-bottom md:absolute md:bottom-0 md:right-0 md:mx-0 md:w-[96%] md:max-w-none md:rounded-b-none"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
