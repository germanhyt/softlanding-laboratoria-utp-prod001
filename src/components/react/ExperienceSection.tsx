import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { fadeUp, springSoft, stagger, viewportOnce } from "@/lib/motion";
import "swiper/css";
import "swiper/css/pagination";

type Slide = {
  tag: string;
  description: string;
  bold: string;
  image: string;
  alt: string;
};

type Props = {
  title: string;
  subtitle: string;
  slides: Slide[];
};

function renderWithBold(text: string, bold: string) {
  const index = text.indexOf(bold);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold">{bold}</strong>
      {text.slice(index + bold.length)}
    </>
  );
}

export default function ExperienceSection({ title, subtitle, slides }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <section className="bg-primary py-14 md:py-20" aria-labelledby="experience-title">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.div
          className="mx-auto mb-10 max-w-[640px] text-center md:mb-12"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="experience-title"
            className="text-[28px] font-semibold leading-[1.15] text-text md:text-[42px]"
            variants={fadeUp}
          >
            {title}
          </motion.h2>
          <motion.p className="mt-4 text-base md:text-xl" variants={fadeUp}>
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="experience-swiper w-full"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1.15}
            pagination={{ clickable: true }}
            autoplay={reduce ? false : { delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 22 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="!pb-12 !overflow-visible"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.tag}>
                <motion.article
                  className="overflow-hidden rounded-[20px] bg-white"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={springSoft}
                >
                  <div className="space-y-3 px-5 pb-4 pt-5 md:px-6 md:pt-6">
                    <p className="text-sm font-semibold text-accent-pink md:text-base">{slide.tag}</p>
                    <p className="min-h-[56px] text-lg font-medium leading-snug text-text md:text-xl">
                      {renderWithBold(slide.description, slide.bold)}
                    </p>
                  </div>
                  <div className="px-3 pb-3 md:px-4 md:pb-4">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="h-[200px] w-full rounded-[12px] object-cover md:h-[240px]"
                      loading="lazy"
                    />
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
