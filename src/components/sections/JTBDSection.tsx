"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Home, Shield, ChevronDown as ChevronIcon } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { jtbdTabs } from "@/data/mockData";
import { SECTION_IDS } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const icons = {
  yield: TrendingUp,
  lifestyle: Home,
  capital: Shield,
};

export function JTBDSection() {
  const [activeTab, setActiveTab] = useState<"yield" | "lifestyle" | "capital">(
    "yield"
  );
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const activeData = jtbdTabs.find((t) => t.id === activeTab)!;

  return (
    <SectionWrapper id={SECTION_IDS.jtbd}>
      <SectionHeading
        title="What's Your Investment Goal?"
        subtitle="Different objectives demand different strategies. We tailor each portfolio to your specific need"
      />

      {isDesktop ? (
        /* Desktop: Tabs */
        <>
          <div className="mb-8 flex justify-center gap-2">
            {jtbdTabs.map((tab) => {
              const Icon = icons[tab.id];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
                    activeTab === tab.id
                      ? "bg-accent-gold text-deep-blue"
                      : "bg-white/5 text-muted hover:bg-white/10 hover:text-primary-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 md:grid-cols-2 items-center overflow-hidden"
            >
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-4">
                  {activeData.headline}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {activeData.description}
                </p>
                <ul className="space-y-3">
                  {activeData.metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-primary-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={activeData.imageUrl}
                  alt={activeData.headline}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        /* Mobile: Accordion */
        <div className="space-y-3 overflow-hidden">
          {jtbdTabs.map((tab) => {
            const Icon = icons[tab.id];
            const isOpen = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex w-full items-center justify-between px-5 py-4 text-left transition-colors cursor-pointer",
                    isOpen ? "bg-accent-gold/10" : "bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        isOpen ? "text-accent-gold" : "text-muted"
                      )}
                    />
                    <span
                      className={cn(
                        "font-semibold",
                        isOpen ? "text-accent-gold" : "text-primary-white"
                      )}
                    >
                      {tab.label}
                    </span>
                  </div>
                  <ChevronIcon
                    className={cn(
                      "h-5 w-5 transition-transform text-muted",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2">
                        <div className="relative aspect-video mb-4 overflow-hidden rounded-xl">
                          <img
                            src={tab.imageUrl}
                            alt={tab.headline}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-primary-white mb-3">
                          {tab.headline}
                        </h3>
                        <p className="text-muted text-sm mb-4 leading-relaxed">
                          {tab.description}
                        </p>
                        <ul className="space-y-2">
                          {tab.metrics.map((metric, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-primary-white"
                            >
                              <span className="h-1 w-1 rounded-full bg-accent-gold shrink-0" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
}
