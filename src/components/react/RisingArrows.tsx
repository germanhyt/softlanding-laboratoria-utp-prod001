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
      <div className="arrows-marquee absolute inset-x-0 top-0 flex w-full flex-col">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full max-w-none select-none"
          draggable={false}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full max-w-none select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
