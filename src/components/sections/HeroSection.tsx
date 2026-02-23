"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl, SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const scrollToQuiz = () => {
    document
      .getElementById(SECTION_IDS.quiz)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8"
      >
        {/* Logo / Brand */}
        <motion.div variants={fadeInUp} className="mb-8 flex flex-col items-center gap-4">
          <span className="inline-block text-accent-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
            Equity Bali
          </span>
          {/* Airbnb Badge */}
          <a
            href="https://www.airbnb.ae/users/profile/1463776046956512996?previous_page_name=PdpHomeMarketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/15 border border-accent-gold/40 hover:border-accent-gold/80 transition-all duration-300 group"
          >
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent-gold fill-accent-gold" />
              <span className="text-accent-gold font-bold text-sm">4.9</span>
            </div>
            <span className="text-accent-gold text-sm font-semibold">Superhost</span>
            <ExternalLink className="h-3.5 w-3.5 text-accent-gold/60 group-hover:text-accent-gold transition-colors" />
          </a>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-primary-white"
        >
          Bali — as a Strategic Asset
          <span className="block text-accent-gold">
            in Your Capital Geography
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-muted leading-relaxed"
        >
          We build liquidity portfolios backed by 37,000+ Airbnb listing
          analytics. Our managed properties consistently perform in the top 10%.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            href={whatsappUrl(
              "Hello, I'd like to view properties with ROI from 12%"
            )}
            icon={<MessageCircle className="h-5 w-5" />}
            className="w-full sm:w-auto"
          >
            View Properties (ROI from 12%)
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToQuiz}
            className="w-full sm:w-auto"
          >
            Calculate My ROI
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted/60"
        >
          <span>37,000+ listings analyzed</span>
          <span className="h-4 w-px bg-muted/20" />
          <span>Top 10% performance</span>
          <span className="hidden sm:block h-4 w-px bg-muted/20" />
          <span className="hidden sm:block">In-house management</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6 text-accent-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
