type Props = {
  src: string;
  alt?: string;
  className?: string;
};

/**
 * Flechas en loop continuo a altura completa del contenedor relative.
 */
export default function RisingArrows({ src, alt = "", className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 z-[1] overflow-hidden ${className}`}
      aria-hidden={!alt}
    >
      <div className="arrows-marquee absolute inset-x-0 top-0 flex min-h-[200%] w-full flex-col">
        <img
          src={src}
          alt={alt}
          className="block h-full min-h-0 w-full flex-1 select-none object-cover object-top"
          draggable={false}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="block h-full min-h-0 w-full flex-1 select-none object-cover object-top"
          draggable={false}
        />
      </div>
    </div>
  );
}
