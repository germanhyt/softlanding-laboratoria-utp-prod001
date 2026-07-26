type Props = {
  src: string;
  alt?: string;
};

/** Flechas verticales con scroll infinito hacia arriba (SDD §3). */
export default function RisingArrows({ src, alt = "" }: Props) {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden md:block lg:w-[38%]">
      <div className="arrows-marquee absolute inset-x-0 top-0 flex flex-col">
        <img src={src} alt={alt} className="w-full object-cover object-top opacity-90" />
        <img src={src} alt="" aria-hidden="true" className="w-full object-cover object-top opacity-90" />
      </div>
    </div>
  );
}
