import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { easeOutExpo, springSoft } from "@/lib/motion";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  brand: string;
  logoSrc: string;
  links: NavLink[];
  postularLabel: string;
  postularHref: string;
};

const clipClosed = "circle(0% at calc(100% - 2.25rem) 2.25rem)";
const clipOpen = "circle(160% at calc(100% - 2.25rem) 2.25rem)";

const menuContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.18, ease: easeOutExpo },
  },
};

export default function SiteHeader({
  brand,
  logoSrc,
  links,
  postularLabel,
  postularHref,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuId = useId();

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

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

          <nav className="hidden items-center gap-5 xl:gap-[34px] lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-text transition-opacity hover:opacity-70 xl:text-base"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href={postularHref}
              target="_blank"
              rel="noopener noreferrer"
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
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={
              reduce
                ? { opacity: 0 }
                : { clipPath: clipClosed, opacity: 1 }
            }
            animate={
              reduce
                ? { opacity: 1 }
                : { clipPath: clipOpen, opacity: 1 }
            }
            exit={
              reduce
                ? { opacity: 0 }
                : { clipPath: clipClosed, opacity: 1 }
            }
            transition={{ duration: reduce ? 0.2 : 0.55, ease: easeOutExpo }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
            style={reduce ? undefined : { willChange: "clip-path" }}
          >
            <div className="flex h-full flex-col px-4 pb-10 pt-4 md:px-10">
              <div className="mb-8 flex h-[56px] items-center justify-between">
                <img src={logoSrc} alt={`Logo ${brand}`} className="h-7 w-auto" />
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <HiOutlineX size={28} />
                </button>
              </div>

              <motion.nav
                className="flex flex-1 flex-col"
                aria-label="Principal móvil"
                variants={reduce ? undefined : menuContainer}
                initial={reduce ? false : "hidden"}
                animate="visible"
                exit="exit"
              >
                <ul className="flex flex-col">
                  {links.map((link) => (
                    <motion.li
                      key={link.href}
                      variants={reduce ? undefined : menuItem}
                      className="border-b border-line/60"
                    >
                      <a
                        href={link.href}
                        className="block py-5 text-[22px] font-semibold leading-snug text-text transition-opacity hover:opacity-70"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-auto pt-10"
                  variants={reduce ? undefined : menuItem}
                >
                  <a
                    href={postularHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full max-w-none"
                    onClick={() => setOpen(false)}
                  >
                    {postularLabel}
                  </a>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
