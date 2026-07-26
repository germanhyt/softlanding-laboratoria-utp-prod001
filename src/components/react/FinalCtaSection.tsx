import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, springSoft, stagger, viewportOnce } from "@/lib/motion";

type Props = {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  image: string;
};

export default function FinalCtaSection({ title, description, cta, ctaHref, image }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-background py-14 md:py-20" aria-labelledby="final-cta-title">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-16">
        <motion.div
          className="max-w-[480px]"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="final-cta-title"
            className="mb-5 text-[28px] font-semibold leading-[1.15] text-text md:text-[42px]"
            variants={fadeUp}
          >
            {title}
          </motion.h2>
          <motion.p className="mb-8 text-base leading-relaxed text-text-muted md:text-lg" variants={fadeUp}>
            {description}
          </motion.p>
          <motion.div variants={fadeUp}>
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
        </motion.div>

        <motion.div
          variants={reduce ? undefined : scaleIn}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src={image}
            alt=""
            className="w-full rounded-[20px] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
