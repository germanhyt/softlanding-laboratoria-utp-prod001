import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Slide = {
  id: string;
  bg: string;
  text: string;
  bold: string;
  image: string;
  alt: string;
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

export default function SituationsCarousel({ slides }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return () => {
      swiperRef.current?.destroy(true, true);
    };
  }, []);

  return (
    <div className="situations-swiper w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1.15}
        centeredSlides={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 20 },
          768: { slidesPerView: 2.1, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="!pb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="flex h-full min-h-[320px] flex-col overflow-hidden rounded-[20px] bg-white md:min-h-[360px]">
              <div className={`${slide.bg} flex flex-1 flex-col justify-between p-5 md:p-6`}>
                <p className="text-xl font-medium leading-snug text-text md:text-[28px]">
                  {renderWithBold(slide.text, slide.bold)}
                </p>
                <div className="mt-6 flex justify-end">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-[120px] w-auto object-contain md:h-[140px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
