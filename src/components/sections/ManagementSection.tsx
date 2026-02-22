"use client";

import { motion } from "framer-motion";
import { Wifi, Calendar, DollarSign, Star, Clock, Wrench } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { managementFeatures } from "@/data/mockData";
import { SECTION_IDS } from "@/lib/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";

function PhoneDashboard() {
  return (
    <div className="relative mx-auto w-[260px] md:w-[280px]">
      {/* Phone Frame */}
      <div className="rounded-[2.5rem] border-4 border-white/20 bg-deep-blue p-2 shadow-2xl shadow-deep-blue/80">
        {/* Notch */}
        <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-white/10" />

        {/* Screen */}
        <div className="rounded-[2rem] bg-surface overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-light-blue to-deep-blue px-4 py-3">
            <div className="text-xs text-muted">Portfolio Dashboard</div>
            <div className="text-sm font-bold text-primary-white">
              EQUITY BALI
            </div>
          </div>

          {/* Occupancy */}
          <div className="px-4 py-3 border-b border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted">Occupancy Rate</span>
              <span className="text-sm font-bold text-accent-gold">87%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-gold/60 to-accent-gold"
                style={{ width: "87%" }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 p-3">
            <div className="rounded-lg bg-white/5 p-2">
              <DollarSign className="h-3.5 w-3.5 text-accent-gold mb-1" />
              <div className="text-[10px] text-muted">Monthly Rev</div>
              <div className="text-xs font-bold text-primary-white">
                $4,280
              </div>
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <Star className="h-3.5 w-3.5 text-accent-gold mb-1" />
              <div className="text-[10px] text-muted">Guest Rating</div>
              <div className="text-xs font-bold text-primary-white">4.92</div>
            </div>
          </div>

          {/* Bookings */}
          <div className="px-4 pb-3">
            <div className="text-xs text-muted mb-2">Recent Bookings</div>
            {[
              { guest: "J. Smith", dates: "Dec 14–20", amount: "$890" },
              { guest: "M. Chen", dates: "Dec 22–28", amount: "$1,120" },
              { guest: "L. Weber", dates: "Jan 2–8", amount: "$980" },
            ].map((booking, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
              >
                <div>
                  <div className="text-[11px] font-semibold text-primary-white">
                    {booking.guest}
                  </div>
                  <div className="text-[9px] text-muted">{booking.dates}</div>
                </div>
                <span className="text-[11px] font-bold text-accent-gold">
                  {booking.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/20" />
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

      <div className="grid gap-12 md:grid-cols-2 items-center">
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
          <PhoneDashboard />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
