"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { founderQuote, expertiseStats } from "@/data/mockData";
import { SECTION_IDS } from "@/lib/constants";
import {
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
} from "@/lib/animations";

function MiniBarChart() {
  const bars = [65, 78, 45, 88, 72, 95, 82, 90, 68, 85];
  return (
    <div className="flex items-end gap-1 h-20">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="flex-1 rounded-t bg-gradient-to-t from-accent-gold/40 to-accent-gold"
        />
      ))}
    </div>
  );
}

function MiniLineChart() {
  return (
    <div className="relative h-20">
      <svg
        viewBox="0 0 200 80"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4B193" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C4B193" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 Q25,55 40,50 T80,35 T120,25 T160,15 T200,8"
          fill="none"
          stroke="#C4B193"
          strokeWidth="2"
        />
        <path
          d="M0,60 Q25,55 40,50 T80,35 T120,25 T160,15 T200,8 V80 H0 Z"
          fill="url(#lineGradient)"
        />
      </svg>
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <SectionWrapper id={SECTION_IDS.expertise}>
      <SectionHeading
        title="Expertise & Data"
        subtitle="Decisions backed by algorithms, not intuition."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8 md:grid-cols-3"
      >
        {/* Founder Quote — spans 2 cols */}
        <motion.div variants={slideInFromLeft} className="md:col-span-2">
          <Card variant="glass" className="h-full flex flex-col justify-center">
            <blockquote className="text-xl md:text-2xl font-heading italic text-primary-white leading-relaxed mb-6">
              &ldquo;{founderQuote.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold/60 flex items-center justify-center text-deep-blue font-bold text-lg">
                {founderQuote.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-primary-white">
                  {founderQuote.name}
                </div>
                <div className="text-sm text-muted">{founderQuote.role}</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats Column */}
        <motion.div variants={slideInFromRight} className="space-y-4">
          {expertiseStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 border border-white/5 p-4"
            >
              <div className="text-sm text-muted">{stat.label}</div>
              <div className="text-2xl font-bold text-accent-gold">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={fadeInUp}>
          <Card variant="solid">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5 text-accent-gold" />
              <span className="font-semibold text-primary-white">
                Uluwatu vs Canggu — Density Analysis
              </span>
            </div>
            <MiniBarChart />
            <div className="mt-3 flex justify-between text-xs text-muted">
              <span>Uluwatu</span>
              <span>Canggu</span>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card variant="solid">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-accent-gold" />
              <span className="font-semibold text-primary-white">
                Price vs Tourism Flow Correlation
              </span>
            </div>
            <MiniLineChart />
            <div className="mt-3 flex justify-between text-xs text-muted">
              <span>Q1 2024</span>
              <span>Q4 2025</span>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
