export const WHATSAPP_NUMBER = "6281325815600";

export const whatsappUrl = (message: string) => `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

export const SECTION_IDS = {
  hero: "hero",
  quiz: "quiz",
  gap: "gap",
  jtbd: "jtbd",
  trackRecord: "track-record",
  expertise: "expertise",
  leadMagnet: "lead-magnet",
  strategicPicks: "strategic-picks",
  legal: "legal",
  management: "management",
  footer: "footer",
};