import type { TrackRecordCase, StrategicPick, JTBDTab, LegalItem } from "@/types";

export const trackRecordCases: TrackRecordCase[] = [
  {
    id: "case-1",
    title: "Villa Horizon, Canggu",
    location: "Canggu, Bali",
    entryPrice: 280000,
    capitalization: 47,
    annualROI: 14.2,
    status: "Completed — Generating Yield",
    imageUrl: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80",
  },
  {
    id: "case-2",
    title: "The Pearl Residence, Seminyak",
    location: "Seminyak, Bali",
    entryPrice: 450000,
    capitalization: 20,
    annualROI: 12.8,
    status: "Under Management — Top-10% Occupancy",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: "case-3",
    title: "Cliff Edge Estate, Uluwatu",
    location: "Uluwatu, Bali",
    entryPrice: 350000,
    capitalization: 66,
    annualROI: 18.5,
    status: "Completed — Land Appreciation +66%",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];

export const strategicPicks: StrategicPick[] = [
  {
    id: "pick-1",
    title: "Berawa 2BR Villa",
    location: "Berawa, Bali",
    price: 220000,
    expectedROI: 11.5,
    insightBadge: "Supply Deficit — 15% Fewer Permits",
    insightReason: "Building permits in this zone dropped 15% YoY, driving scarcity value for existing assets.",
    features: ["2 Bed", "10m to Beach"],
    imageUrl: "https://drive.google.com/uc?export=view&id=1hy7MniZCksWqJnIvd0LfSF63M-mM-TV4",
  },
  {
    id: "pick-2",
    title: "Ubud 3BR Villa",
    location: "Ubud, Bali",
    price: 380000,
    expectedROI: 12.0,
    insightBadge: "Emerging Zone — Infrastructure Boost",
    insightReason: "New residential community with its own infrastructure: parking, landscaped park area, walking paths and a waterfall.",
    features: ["3 Bed", "Jungle View"],
    imageUrl: "https://drive.google.com/uc?export=view&id=1AJeTKGWsVHTtoGyLNHDvRMaAM-2Woi4s",
  },
  {
    id: "pick-3",
    title: "Canggu 2BR Villa",
    location: "Canggu, Bali",
    price: 200000,
    expectedROI: 12.5,
    insightBadge: "High Yield — Tourist Demand",
    insightReason: "Rising tourist inflows are supporting rental returns of up to 10% for villas in Canggu.",
    features: ["2 Bed", "Rice View"],
    imageUrl: "https://drive.google.com/uc?export=view&id=12DHf17yI8SSA-xATzgmhVxI6UTtDn-4a",
  },
];

export const jtbdTabs: JTBDTab[] = [
  {
    id: "yield",
    label: "I Want Income",
    headline: "Maximize Yield with Data-Driven Short-Term Rental",
    description:
      "Properties positioned in the epicenter of tourism flow. Algorithmically priced, professionally managed, and designed for maximum occupancy.",
    metrics: [
      "85%+ average occupancy rate",
      "6–7 year payback period",
      "Net yield from 12% annually",
      "Daily pricing optimization via AI",
    ],
    imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
  },
  {
    id: "lifestyle",
    label: "I Want a Home Base",
    headline: "A Home That Grows in Value While You Live It",
    description:
      "3–4 bedroom villas in family-friendly zones with international schools, hospitals, and co-working spaces. Your lifestyle upgrade that doubles as an investment.",
    metrics: [
      "3–4BR family configurations",
      "International school proximity",
      "Infrastructure & community focus",
      "Projected appreciation 7–15% annually",
      "Large-format layout designed for privacy and tropical serenity",
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "capital",
    label: "I Want to Preserve Capital",
    headline: "Beachfront & Clifftop — Where Land Only Appreciates",
    description:
      "Premium beachfront and cliff-edge properties where supply is physically limited. Ironclad legal structuring protects your capital while land values climb 20–30% annually.",
    metrics: [
      "Beachfront & cliff locations",
      "Land appreciation +20–30% per year",
      "Full legal due diligence",
      "Capital protection first",
    ],
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
];

export const legalItems: LegalItem[] = [
  {
    icon: "Shield",
    title: "Ownership Structure",
    description:
      "Leasehold and Freehold options via PT PMA. We structure each deal for maximum legal protection and tax efficiency for foreign investors.",
  },
  {
    icon: "RefreshCw",
    title: "Secure Transactions",
    description:
      "We support transactions through licensed escrow partners with transparent audit trails.",
  },
  {
    icon: "FileSearch",
    title: "4-Stage Due Diligence",
    description:
      "Title verification, zoning audit, encumbrance check, and independent valuation.",
  },
];

export const comparisonData = {
  typicalBroker: {
    title: "Typical Broker",
    points: [
      "Promises 20% ROI on paper",
      "Renders without market analysis",
      "No accountability after the deal",
      "Result: underperformance",
    ],
  },
  equityBali: {
    title: "EQUITY BALI",
    points: [
      "Revenue projections based on Data Science",
      "Full Due Diligence before every listing",
      "In-house Property Management",
      "Result: top-10% market performance",
    ],
  },
};

export const founderQuote = {
  text: "We don't believe in 'intuition.' Our algorithms process 37,000 listings weekly to find the assets that actually perform.",
  name: "Alex Kasatskiy",
  role: "Founder & CEO, EQUITY BALI",
};

export const expertiseStats = [
  { label: "Listings Analyzed Weekly", value: "37,000+" },
  { label: "Average Client ROI", value: "14%" },
  { label: "Avg Occupancy (Managed)", value: "87%" },
  { label: "Legal properties with SLF/PBG", value: "100%" },
];

export const managementFeatures = [
  "Real-time occupancy dashboard",
  "Transparent expense reports",
  "Automated guest communication",
  "Dynamic pricing engine",
  "Monthly owner statements",
  "24/7 maintenance response",
];
