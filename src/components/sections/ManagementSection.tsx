"use client";

import { motion } from "framer-motion";
import { Wifi, Calendar, DollarSign, Star, Clock, Wrench } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { managementFeatures } from "@/data/mockData";
import { SECTION_IDS } from "@/lib/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";

function AirbnbDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[360px] px-4 sm:px-0">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-deep-blue/80 border border-white/10">
        {/* Equity Bali brand overlay — replaces Airbnb logo */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-light-blue to-deep-blue px-4 py-2 flex items-center gap-2">
          <div className="text-xs text-accent-gold font-semibold uppercase tracking-wider">
            Portfolio Dashboard
          </div>
          <span className="ml-auto text-xs font-bold text-primary-white">
            EQUITY BALI
          </span>
        </div>
        <img
          src="/airbnb-dashboard.jpg"
          alt="Portfolio management dashboard"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

const featureIcons = [Wifi, Calendar, DollarSign, Star, Clock, Wrench];

export function ManagementSection() {
  return (
    <SectionWrapper id={SECTION_IDS.management}>
      <SectionHeading
        title="Your Property, Our Management"
        subtitle="Transparent reporting 24/7. Receipts, occupancy, expenses — all in one dashboard."
      />

      <div className="grid gap-12 md:grid-cols-2 items-center overflow-hidden">
        {/* Text */}
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-6">
            Full-Service Property Management
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {managementFeatures.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                >
                  <Icon className="h-4 w-4 text-accent-gold shrink-0" />
                  <span className="text-sm text-primary-white">{feature}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center"
        >
          <AirbnbDashboard />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
