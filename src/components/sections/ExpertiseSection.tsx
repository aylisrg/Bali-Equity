"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, TrendingUp, Zap } from "lucide-react";
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

const alphaBarData = [
  {
    label: "Canggu Median",
    occupancy: 60,
    color: "bg-white/20",
    tooltip:
      "Saturation Point reached. Oversupply of generic 1BR units is driving yields down to 6.5% Net",
  },
  {
    label: "Uluwatu Median",
    occupancy: 68,
    color: "bg-white/30",
    tooltip:
      "Organic growth area. Land scarcity provides a natural hedge, but 40% of new builds fail to meet premium standards",
  },
  {
    label: "EQUITY Selection",
    occupancy: 89,
    color: "bg-gradient-to-t from-accent-gold/60 to-accent-gold",
    isAccent: true,
    tooltip:
      "Optimized Asset. Target ROI: 14.7%. Selected based on 12-month forward-looking demand and high-performance architectural code",
  },
];

function AlphaGapChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-center gap-6 sm:gap-10 h-[200px] relative">
        {alphaBarData.map((bar, i) => (
          <div
            key={bar.label}
            className="flex flex-col items-center gap-2 relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute bottom-full mb-3 w-52 rounded-lg bg-deep-blue border border-white/10 p-3 text-xs text-muted leading-relaxed shadow-xl z-10 pointer-events-none"
                >
                  {bar.tooltip}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing Alpha badge for EQUITY bar */}
            {bar.isAccent && (
              <div className="flex items-center gap-1 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold" />
                </span>
                <span className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                  Alpha
                </span>
              </div>
            )}

            {/* Occupancy label */}
            <span className={`text-sm font-bold ${bar.isAccent ? "text-accent-gold" : "text-muted"}`}>
              {bar.occupancy}%
            </span>

            {/* Bar */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(bar.occupancy / 100) * 128}px` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`w-16 sm:w-20 rounded-t-lg cursor-pointer transition-opacity ${bar.color} ${hoveredIndex !== null && hoveredIndex !== i ? "opacity-50" : ""}`}
            />

            {/* Label */}
            <span className="text-[11px] text-muted text-center leading-tight mt-1 w-20">
              {bar.label}
            </span>
          </div>
        ))}
      </div>

      {/* Insight box */}
      <div className="flex items-start gap-2 rounded-lg bg-white/5 border border-white/5 px-3 py-2">
        <Zap className="h-3.5 w-3.5 text-accent-gold shrink-0 mt-0.5" />
        <p className="text-[11px] text-muted/70 leading-relaxed">
          Calculated by Equity Bali Proprietary AI: Analysis of 37,241 active listings
        </p>
      </div>
    </div>
  );
}

function PriceGrowthChart() {
  // Chart dimensions
  const W = 280, H = 140;
  const padL = 54, padR = 18, padT = 14, padB = 24;
  const cW = W - padL - padR; // 208
  const cH = H - padT - padB; // 102

  // Y-axis scale: $1,600 – $2,400
  const yMin = 1600, yMax = 2400;
  const toY = (val: number) => padT + cH - ((val - yMin) / (yMax - yMin)) * cH;

  // Data points
  const x0 = padL, x1 = padL + cW;
  const y0 = toY(2000); // ~56
  const y1 = toY(2200); // ~31

  const gridValues = [1600, 1800, 2000, 2200, 2400];

  return (
    <div className="space-y-3">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="priceGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C4B193" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C4B193" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y-axis grid lines + labels */}
        {gridValues.map((val) => {
          const gy = toY(val);
          return (
            <g key={val}>
              <line
                x1={padL} y1={gy} x2={padL + cW} y2={gy}
                stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1"
              />
              <text
                x={padL - 6} y={gy + 4}
                textAnchor="end"
                fill="#8A96A8"
                fontSize="9"
              >
                ${(val / 1000).toFixed(1)}k
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path
          d={`M${x0},${y0} L${x1},${y1} V${padT + cH} H${x0} Z`}
          fill="url(#priceGradient2)"
        />

        {/* Line */}
        <line
          x1={x0} y1={y0} x2={x1} y2={y1}
          stroke="#C4B193" strokeWidth="2.5" strokeLinecap="round"
        />

        {/* 2024 dot */}
        <circle cx={x0} cy={y0} r="5" fill="#0D1E35" stroke="#C4B193" strokeWidth="2" />
        {/* 2024 value label — right of dot, above the $2.0k grid label */}
        <text x={x0 + 8} y={y0 - 7} textAnchor="start" fill="#8A96A8" fontSize="10">
          $2,000
        </text>

        {/* 2025 dot */}
        <circle cx={x1} cy={y1} r="5" fill="#0D1E35" stroke="#C4B193" strokeWidth="2" />
        {/* 2025 value label — left-aligned from dot so it doesn't clip right edge */}
        <text x={x1} y={y1 - 10} textAnchor="end" fill="#C4B193" fontSize="10" fontWeight="bold">
          $2,200
        </text>

        {/* X-axis baseline */}
        <line
          x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH}
          stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"
        />
      </svg>

      {/* +10% badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-accent-gold" />
          <span className="text-xs font-semibold text-accent-gold">+10% YoY</span>
        </div>
        <span className="text-[11px] text-muted/60">USD per m²</span>
      </div>
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <SectionWrapper id={SECTION_IDS.expertise}>
      <SectionHeading
        title="Expertise & Data"
        subtitle="Decisions backed by algorithms, not intuition"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8 md:grid-cols-3 overflow-hidden"
      >
        {/* Founder Quote — spans 2 cols */}
        <motion.div variants={slideInFromLeft} className="md:col-span-2">
          <Card variant="glass" className="h-full flex flex-col justify-center">
            <blockquote className="text-xl md:text-2xl font-heading italic text-primary-white leading-relaxed mb-6">
              &ldquo;{founderQuote.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="/ceo-photo.jpg"
                alt={founderQuote.name}
                className="h-12 w-12 rounded-full object-cover"
              />
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
        className="mt-8 grid gap-6 md:grid-cols-2 overflow-hidden"
      >
        <motion.div variants={fadeInUp}>
          <Card variant="solid">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-5 w-5 text-accent-gold" />
              <span className="font-semibold text-primary-white">
                The Alpha Gap: Why 90% of Investors Underperform
              </span>
            </div>
            <p className="text-xs text-muted/70 mb-4 leading-relaxed">
              Most investors follow the crowd. We follow the logs. While the median market hits a ceiling, our selected assets operate in a different reality
            </p>
            <AlphaGapChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card variant="solid">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-accent-gold" />
              <span className="font-semibold text-primary-white">
                Average Price per Square Meter Growth in Bali (2024–2025)
              </span>
            </div>
            <PriceGrowthChart />
            <div className="mt-3 flex justify-between text-xs text-muted">
              <span>2024</span>
              <span>2025</span>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
