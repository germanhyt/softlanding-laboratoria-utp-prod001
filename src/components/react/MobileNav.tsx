import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

type Props = {
  brand: string;
  logoSrc: string;
  sobreLabel: string;
  sobreHref: string;
  postularLabel: string;
  postularHref: string;
};

export default function MobileNav({
  brand,
  logoSrc,
  sobreLabel,
  sobreHref,
  postularLabel,
  postularHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex h-full flex-col px-4 pb-8 pt-4">
              <div className="mb-10 flex items-center justify-between">
                <img src={logoSrc} alt={brand} className="h-7 w-auto" />
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
                <a
                  href={postularHref}
                  className="btn-primary w-fit"
                  onClick={() => setOpen(false)}
                >
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
