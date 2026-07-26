import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import "swiper/css";
import "swiper/css/effect-cards";

type Slide = {
  id: string;
  bg: string;
  text: string;
  bold: string;
  image: string;
  alt: string;
};

type Props = {
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
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

function SituationCard({ slide }: { slide: Slide }) {
  return (
    <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-[20px] md:min-h-[360px]">
      <div className={`relative flex h-full flex-1 flex-col ${slide.bg}`}>
        <div className="relative z-10 flex flex-1 flex-col p-5 pb-2 md:p-7 md:pb-3">
          <p className="max-w-[95%] text-xl font-medium leading-snug text-text md:text-[28px]">
            {renderWithBold(slide.text, slide.bold)}
          </p>
        </div>
        <div className="mt-auto grid grid-cols-[1fr_auto] items-end">
          <div aria-hidden="true" />
          <div className="rounded-tl-[18px] bg-white px-3 pb-2 pt-3 md:px-4 md:pt-4">
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-[120px] w-auto max-w-[180px] object-contain md:h-[150px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SituationsSection({
  titleBefore,
  titleAccent,
  titleAfter,
  slides,
}: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <section
      className="overflow-x-clip bg-background-muted pb-14 pt-8 md:pb-20 md:pt-10"
      aria-labelledby="situations-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.div
          className="grid items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-12 lg:gap-16"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="situations-title"
            className="max-w-[520px] text-[28px] font-semibold leading-[1.15] text-text md:text-[42px]"
            variants={fadeUp}
          >
            {titleBefore}{" "}
            <span className="text-accent-pink">{titleAccent}</span> {titleAfter}
          </motion.h2>

          <motion.div
            className="situations-cards mx-auto w-full max-w-[320px] sm:max-w-[380px] md:mx-0 md:max-w-[420px] md:justify-self-end"
            variants={fadeUp}
          >
            <Swiper
              modules={[EffectCards, Autoplay]}
              effect="cards"
              grabCursor
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              cardsEffect={{
                perSlideOffset: 10,
                perSlideRotate: 3,
                rotate: true,
                slideShadows: true,
              }}
              autoplay={
                reduce
                  ? false
                  : {
                      delay: 3200,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              className="situations-cards-swiper w-full"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="!rounded-[20px] !bg-transparent">
                  <SituationCard slide={slide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
