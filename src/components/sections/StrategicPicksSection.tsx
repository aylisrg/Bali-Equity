"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { strategicPicks } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function StrategicPicksSection() {
  return (
    <SectionWrapper id={SECTION_IDS.strategicPicks}>
      <SectionHeading
        title="Strategic Picks"
        subtitle="Hand-selected assets that passed our 4-stage due diligence. Each one backed by a clear investment thesis."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3 overflow-hidden"
      >
        {strategicPicks.map((pick) => (
          <motion.div
            key={pick.id}
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 group-hover:border-accent-gold/30">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pick.imageUrl}
                  alt={pick.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge label={pick.insightBadge} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-primary-white mb-1">
                  {pick.title}
                </h3>
                <p className="text-sm text-muted mb-4">{pick.location}</p>

                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted block">Price</span>
                    <span className="text-lg font-bold text-primary-white">
                      {formatCurrency(pick.price)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted block">
                      Expected ROI
                    </span>
                    <span className="text-lg font-bold text-accent-gold">
                      {pick.expectedROI}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pick.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Insight */}
                <p className="text-xs text-muted/80 leading-relaxed border-t border-white/5 pt-3">
                  {pick.insightReason}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
