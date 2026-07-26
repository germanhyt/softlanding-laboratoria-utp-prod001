import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, springSoft, stagger, viewportOnce } from "@/lib/motion";

type Card = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  title: string;
  subtitle: string;
  cards: Card[];
};

export default function SkillsSection({ title, subtitle, cards }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-primary py-14 md:py-20" aria-labelledby="skills-title">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.div
          className="mx-auto mb-10 max-w-[820px] text-center md:mb-14"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="skills-title"
            className="text-[28px] font-semibold leading-[1.15] text-text md:text-[42px]"
            variants={fadeUp}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-text md:text-xl"
            variants={fadeUp}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              className="flex h-full flex-col items-center rounded-[20px] bg-white px-5 py-6 text-center md:px-6 md:py-8"
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              transition={springSoft}
            >
              <img
                src={card.image}
                alt=""
                className="mb-5 h-[130px] w-full object-contain md:mb-6 md:h-[150px]"
                loading="lazy"
              />
              <h3 className="mb-2 text-lg font-semibold leading-snug md:text-xl">{card.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted md:text-base">{card.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
