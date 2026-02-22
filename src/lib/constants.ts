export const WHATSAPP_NUMBER = "0000000000";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SECTION_IDS = {
  hero: "hero",
  gap: "gap",
  jtbd: "jtbd",
  trackRecord: "track-record",
  expertise: "expertise",
  leadMagnet: "lead-magnet",
  strategicPicks: "strategic-picks",
  legal: "legal",
  management: "management",
  quiz: "quiz",
  footer: "footer",
} as const;
