"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AirbnbBadgeSection() {
  return (
    <SectionWrapper dark={false}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <Badge label="AIRBNB 4.9 STARS • 4 YEARS SUPERHOST" variant="gold" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-3xl md:text-4xl font-bold text-deep-blue mb-4"
        >
          We Own the Numbers
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg text-deep-blue/80 leading-relaxed"
        >
          Deep market analytics, algorithmic mastery, and proprietary insights—that's not just
          experience, that's competitive advantage. Every decision backed by data, every strategy
          rooted in real market understanding.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
