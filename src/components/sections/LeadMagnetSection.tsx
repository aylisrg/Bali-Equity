"use client";

import { motion } from "framer-motion";
import { FileText, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { whatsappUrl, SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function LeadMagnetSection() {
  return (
    <SectionWrapper id={SECTION_IDS.leadMagnet} dark={false}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8 md:grid-cols-2 items-center overflow-hidden"
      >
        {/* PDF Mockup */}
        <motion.div variants={fadeInUp} className="flex justify-center px-4 sm:px-0">
          <div className="relative w-full">
            {/* Main PDF card */}
            <div className="relative w-full max-w-64 md:max-w-72 rounded-2xl bg-gradient-to-br from-light-blue to-deep-blue p-8 shadow-2xl shadow-deep-blue/50 border border-white/10">
              <FileText className="h-12 w-12 text-accent-gold mb-4" />
              <div className="text-xs text-accent-gold font-semibold uppercase tracking-wider mb-2">
                Free Report
              </div>
              <h4 className="font-heading text-lg font-bold text-primary-white leading-snug">
                Bali Investment
                <br />
                Analytics Report
              </h4>
              <div className="mt-2 text-accent-gold font-bold text-2xl">
                2025/2026
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-3/4 rounded bg-white/10" />
                <div className="h-1.5 w-5/6 rounded bg-white/10" />
              </div>
              <div className="mt-6 text-xs text-muted">
                EQUITY BALI Research
              </div>
            </div>
            {/* Shadow card behind */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-accent-gold/10 border border-accent-gold/20" />
          </div>
        </motion.div>

        {/* Text + CTA */}
        <motion.div variants={fadeInUp}>
          <span className="text-accent-gold text-sm font-semibold uppercase tracking-wider">
            Free Report
          </span>
          <h3 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary-white leading-tight">
            Bali Real Estate
            <br />
            Analytics Report 2025/2026
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            Market trends, zone-by-zone analysis, ROI benchmarks, and regulatory
            updates. Everything you need to make an informed investment decision
            in Bali.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-primary-white">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
              Zone-by-zone yield comparison
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
              Regulatory & legal landscape update
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
              Infrastructure development impact map
            </li>
          </ul>
          <div className="mt-8">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl(
                "Hello, I'd like to receive the analytics report"
              )}
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Free PDF Report
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
