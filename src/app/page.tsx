import { HeroSection } from "@/components/sections/HeroSection";
import { GapSection } from "@/components/sections/GapSection";
import { JTBDSection } from "@/components/sections/JTBDSection";
import { TrackRecordSection } from "@/components/sections/TrackRecordSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { StrategicPicksSection } from "@/components/sections/StrategicPicksSection";
import { LegalSecuritySection } from "@/components/sections/LegalSecuritySection";
import { ManagementSection } from "@/components/sections/ManagementSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <GapSection />
      <JTBDSection />
      <TrackRecordSection />
      <ExpertiseSection />
      <LeadMagnetSection />
      <StrategicPicksSection />
      <LegalSecuritySection />
      <ManagementSection />
      <FooterSection />
    </main>
  );
}
