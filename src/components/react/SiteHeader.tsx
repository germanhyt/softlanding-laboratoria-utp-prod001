import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { easeOutExpo, springSoft } from "@/lib/motion";

type Props = {
  brand: string;
  logoSrc: string;
  sobreLabel: string;
  sobreHref: string;
  postularLabel: string;
  postularHref: string;
};

export default function SiteHeader({
  brand,
  logoSrc,
  sobreLabel,
  sobreHref,
  postularLabel,
  postularHref,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-background/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "bg-background"
        }`}
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 md:h-[92px] md:px-10">
          <a href="/" className="inline-flex items-center" aria-label={brand}>
            <img
              src={logoSrc}
              alt={`Logo ${brand}`}
              className="h-7 w-auto md:h-8"
              width={180}
              height={32}
            />
          </a>

          <nav className="hidden items-center gap-[34px] lg:flex" aria-label="Principal">
            <a
              href={sobreHref}
              className="text-base text-text transition-opacity hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sobreLabel}
            </a>
            <motion.a
              href={postularHref}
              className="btn-primary"
              whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={springSoft}
            >
              {postularLabel}
            </motion.a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.38, ease: easeOutExpo }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex h-full flex-col px-4 pb-8 pt-4">
              <div className="mb-10 flex items-center justify-between">
                <img src={logoSrc} alt={`Logo ${brand}`} className="h-7 w-auto" />
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <HiOutlineX size={28} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-xl font-semibold">
                <a
                  href={sobreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {sobreLabel}
                </a>
                <a href={postularHref} className="btn-primary w-fit" onClick={() => setOpen(false)}>
                  {postularLabel}
                </a>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
