import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Slide = {
  tag: string;
  description: string;
  bold: string;
  image: string;
};

type Props = {
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

export default function ExperienceCarousel({ slides }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <div className="experience-swiper w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1.15}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 22 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="!pb-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.tag}>
            <article className="overflow-hidden rounded-[20px] bg-white">
              <div className="space-y-3 px-5 pb-4 pt-5 md:px-6 md:pt-6">
                <p className="text-sm font-semibold text-accent-pink md:text-base">{slide.tag}</p>
                <p className="min-h-[56px] text-lg font-medium leading-snug text-text md:text-xl">
                  {renderWithBold(slide.description, slide.bold)}
                </p>
              </div>
              <img
                src={slide.image}
                alt={slide.tag}
                className="h-[220px] w-full object-cover md:h-[260px]"
                loading="lazy"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
