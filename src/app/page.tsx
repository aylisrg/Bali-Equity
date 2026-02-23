import { HeroSection } from "@/components/sections/HeroSection";
import { AirbnbBadgeSection } from "@/components/sections/AirbnbBadgeSection";
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
    <main>
      <HeroSection />
      <AirbnbBadgeSection />
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
