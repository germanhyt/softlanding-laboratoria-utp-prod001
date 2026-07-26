import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Slide = {
  id: string;
  bg: string;
  text: string;
  bold: string;
  image: string;
  alt: string;
};

type Props = {
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  slides: Slide[];
};

const STACK_OFFSET_PX = 14;
const VISIBLE = 3;

const deckSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.95,
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

function SituationCard({ slide }: { slide: Slide }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-[20px] shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
      <div className={`relative flex h-full flex-1 flex-col ${slide.bg}`}>
        <div className="relative z-10 mt-4 flex flex-1 flex-col p-5 pb-1 md:p-6 md:pb-2">
          <p className="max-w-[80%] text-[22px] font-medium leading-snug text-text md:text-[24px] lg:text-[30px]">
            {renderWithBold(slide.text, slide.bold)}
          </p>
        </div>
        <div className="mt-auto grid grid-cols-[1fr_auto] items-end">
          <div aria-hidden="true" />
          <div className="rounded-tl-[16px] bg-white px-3 pb-2 pt-2 md:px-4 md:pt-3">
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-[96px] w-auto max-w-[200px] object-contain md:h-[140px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Mazo tipo póker:
 * - La carta de arriba sale hacia la derecha
 * - Pasa al final del mazo
 * - La siguiente queda al frente
 * (no sale a la izquierda → no tapa el texto)
 */
function PokerDeckStack({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [flying, setFlying] = useState<Slide | null>(null);
  const reduce = useReducedMotion();
  const count = slides.length;
  const lockRef = useRef(false);
  const flyDoneRef = useRef(false);

  const advance = useCallback(() => {
    if (lockRef.current || count < 2 || flying) return;
    lockRef.current = true;
    flyDoneRef.current = false;
    setFlying(slides[active] ?? null);
  }, [active, count, flying, slides]);

  const onFlyComplete = useCallback(() => {
    if (flyDoneRef.current) return;
    flyDoneRef.current = true;
    setActive((prev) => (prev + 1) % count);
    setFlying(null);
    window.setTimeout(() => {
      lockRef.current = false;
    }, 80);
  }, [count]);

  useEffect(() => {
    if (reduce || count < 2) return;
    const id = window.setInterval(advance, 3800);
    return () => window.clearInterval(id);
  }, [advance, count, reduce]);

  // Mientras vuela la frontal, el stack muestra las siguientes (ella irá al final)
  const start = flying ? (active + 1) % count : active;
  const layers = Array.from({ length: Math.min(VISIBLE, count) }, (_, depth) => ({
    depth,
    slide: slides[(start + depth) % count],
  })).filter((layer) => !flying || layer.slide.id !== flying.id);

  const compacted = layers.map((layer, i) => ({ ...layer, depth: i }));

  return (
    <div
      className="relative w-full max-w-[520px] lg:max-w-[500px]"
      style={{ paddingLeft: STACK_OFFSET_PX * 2 }}
    >
      <div className="relative aspect-[4/3] w-full min-h-[18rem] overflow-visible md:min-h-[26rem]">
        {compacted
          .slice()
          .reverse()
          .map(({ depth, slide }) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0 will-change-transform"
              style={{ zIndex: 20 - depth }}
              initial={false}
              animate={{
                x: -depth * STACK_OFFSET_PX,
                y: 0,
                scale: 1 - depth * 0.015,
                opacity: 1,
              }}
              transition={reduce ? { duration: 0 } : deckSpring}
            >
              <SituationCard slide={slide} />
            </motion.div>
          ))}

        <AnimatePresence>
          {flying ? (
            <motion.div
              key={`fly-${flying.id}`}
              className="absolute inset-0 will-change-transform"
              style={{ zIndex: 50 }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
              animate={
                reduce
                  ? { x: "110%", opacity: 0 }
                  : {
                      x: ["0%", "55%", "120%"],
                      y: [0, -10, 6],
                      rotate: [0, 3, 5],
                      opacity: [1, 1, 0.95],
                      scale: [1, 1.02, 0.98],
                    }
              }
              transition={
                reduce
                  ? { duration: 0.25 }
                  : {
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                      times: [0, 0.45, 1],
                    }
              }
              onAnimationComplete={onFlyComplete}
            >
              <SituationCard slide={flying} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          className="absolute inset-0 z-[60] cursor-grab rounded-[20px] bg-transparent active:cursor-grabbing disabled:cursor-default"
          aria-label="Siguiente situación"
          disabled={!!flying}
          onClick={advance}
        />
      </div>
    </div>
  );
}

export default function SituationsSection({
  titleBefore,
  titleAccent,
  titleAfter,
  slides,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-background-muted pb-14 pt-8 md:pb-20 md:pt-10"
      aria-labelledby="situations-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.div
          className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] md:gap-8 lg:gap-14 pl-5 lg:pl-24"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="situations-title"
            className="max-w-[480px] text-[28px] font-semibold leading-[1.15] text-text md:text-[42px]"
            variants={fadeUp}
          >
            {titleBefore}{" "}
            <span className="text-accent-pink">{titleAccent}</span> {titleAfter}
          </motion.h2>

          <motion.div className="flex w-full items-center justify-start overflow-visible" variants={fadeUp}>
            <PokerDeckStack slides={slides} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
