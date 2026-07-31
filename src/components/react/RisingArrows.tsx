type Props = {
  src: string;
  alt?: string;
  className?: string;
  /**
   * cover: rellena alto (puede recortar laterales) — desktop
   * width: muestra el ancho completo de la flecha — mobile
   */
  fit?: "cover" | "width";
};

/**
 * Flechas en loop continuo a altura completa del contenedor relative.
 */
export default function RisingArrows({
  src,
  alt = "",
  className = "",
  fit = "cover",
}: Props) {
  const showFullWidth = fit === "width";

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 z-[1] overflow-hidden ${className}`}
      aria-hidden={!alt}
    >
      <div
        className={`arrows-marquee absolute inset-x-0 top-0 flex w-full flex-col ${
          showFullWidth ? "" : "min-h-[200%]"
        }`}
      >
        <img
          src={src}
          alt={alt}
          className={
            showFullWidth
              ? "block h-auto w-full max-w-none select-none object-contain object-top"
              : "block h-full min-h-0 w-full flex-1 select-none object-cover object-top"
          }
          draggable={false}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className={
            showFullWidth
              ? "block h-auto w-full max-w-none select-none object-contain object-top"
              : "block h-full min-h-0 w-full flex-1 select-none object-cover object-top"
          }
          draggable={false}
        />
        {showFullWidth ? (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="block h-auto w-full max-w-none select-none object-contain object-top"
            draggable={false}
          />
        ) : null}
      </div>
    </div>
  );
}
