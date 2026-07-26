import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { fadeUp, springSoft, staggerFast, viewportEager, viewportOnce } from "@/lib/motion";
import "swiper/css";
import "swiper/css/pagination";

type Card = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type Props = {
  title: string;
  subtitle: string;
  cards: Card[];
};

function SkillCard({ card, className = "" }: { card: Card; className?: string }) {
  return (
    <article
      className={`flex h-full flex-col items-center rounded-[20px] bg-white px-5 py-6 text-center md:px-6 md:py-8 ${className}`}
    >
      <img
        src={card.image}
        alt={card.alt}
        className="mb-4 h-[140px] w-full object-contain md:mb-6 md:h-[150px]"
        loading="eager"
      />
      <h3 className="mb-2 text-lg font-semibold leading-snug md:text-xl">{card.title}</h3>
      <p className="text-sm leading-relaxed text-text-muted md:text-base">{card.description}</p>
    </article>
  );
}

export default function SkillsSection({ title, subtitle, cards }: Props) {
  const reduce = useReducedMotion();
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <section className="bg-primary py-14 md:py-20" aria-labelledby="skills-title">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.div
          className="mx-auto mb-8 max-w-[820px] text-center md:mb-14"
          variants={reduce ? undefined : fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="skills-title"
            className="text-[26px] font-semibold leading-[1.15] text-text sm:text-[28px] md:text-[42px]"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-text md:text-xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Mobile: carousel según prototype (aparición inmediata, sin delay de stagger) */}
        <div className="skills-swiper md:hidden">
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides
            pagination={{ clickable: true }}
            className="!pb-10"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.title} className="!h-auto">
                <SkillCard card={card} className="min-h-[340px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid, reveal rápido */}
        <motion.div
          className="hidden gap-5 sm:grid-cols-2 md:grid lg:grid-cols-3 lg:gap-6"
          variants={reduce ? undefined : staggerFast}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportEager}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              transition={springSoft}
            >
              <SkillCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
