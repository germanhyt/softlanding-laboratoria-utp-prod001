import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { fadeUp, viewportOnce } from "@/lib/motion";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  items: FaqItem[];
};

export default function FaqSection({ title, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="bg-background pb-16 pt-4 md:pb-24 md:pt-8" aria-labelledby="faq-title">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <motion.h2
          id="faq-title"
          className="mb-10 text-center text-[28px] font-semibold md:mb-14 md:text-[42px]"
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {title}
        </motion.h2>

        <motion.div
          className="mx-auto flex w-full max-w-[924px] flex-col"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="border-b border-line transition-colors hover:bg-background-muted/50"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left md:py-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold md:text-lg">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28 }}
                    className="inline-flex shrink-0"
                  >
                    <IoChevronDown size={22} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-text-muted md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
