"use client";

import { motion } from "framer-motion";
import { Shield, RefreshCw, FileSearch } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { legalItems } from "@/data/mockData";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  RefreshCw,
  FileSearch,
};

export function LegalSecuritySection() {
  return (
    <SectionWrapper id={SECTION_IDS.legal} dark={false}>
      <SectionHeading title="Ironclad Legal Foundation" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {legalItems.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div key={i} variants={fadeInUp}>
              <Card variant="glass" className="h-full text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gold/10 border border-accent-gold/20">
                  {Icon && <Icon className="h-7 w-7 text-accent-gold" />}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
