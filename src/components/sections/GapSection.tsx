"use client";

import { motion } from "framer-motion";
import { X, Check, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { comparisonData } from "@/data/mockData";
import { whatsappUrl, SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function GapSection() {
  return (
    <SectionWrapper id={SECTION_IDS.gap} dark={false}>
      <SectionHeading
        title="Not All Brokers Are Created Equal"
        subtitle="Most promise returns. We engineer them."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2 overflow-hidden"
      >
        {/* Typical Broker */}
        <motion.div variants={fadeInUp}>
          <Card variant="solid" className="h-full border-white/5">
            <div className="mb-4 text-muted text-sm font-semibold uppercase tracking-wider">
              {comparisonData.typicalBroker.title}
            </div>
            <ul className="space-y-4">
              {comparisonData.typicalBroker.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-muted/70">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-primary-red/60" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* EQUITY BALI */}
        <motion.div variants={fadeInUp}>
          <Card
            variant="glass"
            className="h-full border-accent-gold/30 bg-gradient-to-br from-light-blue/20 to-deep-blue"
          >
            <div className="mb-4 text-accent-gold text-sm font-semibold uppercase tracking-wider">
              {comparisonData.equityBali.title}
            </div>
            <ul className="space-y-4">
              {comparisonData.equityBali.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-primary-white"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button
          variant="whatsapp"
          size="lg"
          href={whatsappUrl("Hello, I'd like to receive a 2025 market analysis")}
          icon={<MessageCircle className="h-5 w-5" />}
        >
          Get 2025 Market Analysis
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
