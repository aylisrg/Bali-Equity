"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuizContainer } from "@/components/quiz/QuizContainer";
import { SECTION_IDS, WHATSAPP_NUMBER } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function FooterSection() {
  return (
    <>
      {/* Quiz Section */}
      <SectionWrapper id={SECTION_IDS.quiz} dark={false}>
        <SectionHeading
          title="Calculate Your ROI"
          subtitle="Answer 3 quick questions and get a personalized property selection."
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <QuizContainer />
        </motion.div>
      </SectionWrapper>

      {/* Footer */}
      <footer
        id={SECTION_IDS.footer}
        className="border-t border-white/5 bg-deep-blue px-4 py-12 md:px-8 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 overflow-hidden">
            {/* Brand */}
            <div>
              <div className="font-heading text-2xl font-bold text-primary-white mb-3">
                EQUITY<span className="text-accent-gold"> BALI</span>
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                Strategic real estate investment in Bali. Data-driven portfolios,
                in-house management, top-10% performance.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-primary-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <MessageCircle className="h-4 w-4 text-accent-gold shrink-0" />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Mail className="h-4 w-4 text-accent-gold shrink-0" />
                  <span>hello@equitybali.com</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-accent-gold shrink-0" />
                  <span>Bali, Indonesia</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-primary-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Properties", href: `#${SECTION_IDS.strategicPicks}` },
                  { label: "Track Record", href: `#${SECTION_IDS.trackRecord}` },
                  { label: "Legal", href: `#${SECTION_IDS.legal}` },
                  { label: "Management", href: `#${SECTION_IDS.management}` },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-accent-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted/60">
              &copy; {new Date().getFullYear()} EQUITY BALI. All rights reserved.
            </p>
            <p className="text-xs text-muted/40">
              Investment involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
