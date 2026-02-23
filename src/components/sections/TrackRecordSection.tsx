"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trackRecordCases } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export function TrackRecordSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage < trackRecordCases.length) {
      setPage([nextPage, newDirection]);
    }
  };

  const currentCase = trackRecordCases[page];

  return (
    <SectionWrapper id={SECTION_IDS.trackRecord} dark={false}>
      <SectionHeading
        title="Numbers, Not Promises"
        subtitle="Real results from real investments. Every case backed by data."
      />

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="grid gap-8 md:grid-cols-2 items-center overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={currentCase.imageUrl}
                alt={currentCase.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-lg bg-accent-gold/90 px-3 py-1 text-sm font-semibold text-deep-blue">
                  +{currentCase.capitalization}% Capital Growth
                </span>
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-2">
                {currentCase.title}
              </h3>
              <p className="text-muted mb-6">{currentCase.location}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-sm text-muted mb-1">Entry Price</div>
                  <div className="text-xl font-bold text-primary-white">
                    {formatCurrency(currentCase.entryPrice)}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-sm text-muted mb-1">Annual ROI</div>
                  <div className="text-xl font-bold text-accent-gold">
                    {currentCase.annualROI}%
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-accent-gold/20 bg-accent-gold/5 p-4">
                <div className="text-sm text-accent-gold font-semibold">
                  Status
                </div>
                <div className="text-primary-white mt-1">
                  {currentCase.status}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className={cn(
              "rounded-full border border-white/10 p-3 transition-all cursor-pointer",
              page === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-accent-gold hover:text-accent-gold"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {trackRecordCases.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={cn(
                  "h-2 rounded-full transition-all cursor-pointer",
                  i === page
                    ? "w-8 bg-accent-gold"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={page === trackRecordCases.length - 1}
            className={cn(
              "rounded-full border border-white/10 p-3 transition-all cursor-pointer",
              page === trackRecordCases.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-accent-gold hover:text-accent-gold"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
