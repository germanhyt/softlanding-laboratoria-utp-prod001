type Props = {
  src: string;
  alt?: string;
};

/** Flechas verticales top→bottom (también en mobile), scroll infinito ↑. */
export default function RisingArrows({ src, alt = "" }: Props) {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[55%] overflow-hidden sm:w-[48%] md:w-[48%] lg:w-[44%]">
      <div className="arrows-marquee absolute inset-x-0 top-0 flex min-h-[200%] flex-col">
        <img src={src} alt={alt} className="w-full flex-1 object-cover object-top opacity-90" />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="w-full flex-1 object-cover object-top opacity-90"
        />
      </div>
    </div>
  );
}
