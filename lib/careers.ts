import type { IconName } from "@/components/ui/Icon";

export interface CareerRole {
  title: string;
  type: string;
  outlet: string;
}

export interface CareerPerk {
  icon: IconName;
  title: string;
  description: string;
}

export const careerRoles: CareerRole[] = [
  {
    title: "Pastry Chef",
    type: "Full-time",
    outlet: "Central Kitchen",
  },
  {
    title: "Counter Sales Associate",
    type: "Full-time / Part-time",
    outlet: "Any outlet",
  },
  {
    title: "Outlet Manager",
    type: "Full-time",
    outlet: "South Khulshi & beyond",
  },
  {
    title: "Delivery Coordinator",
    type: "Full-time",
    outlet: "Head Office",
  },
];

export const careerPerks: CareerPerk[] = [
  {
    icon: "bread",
    title: "Learn from master bakers",
    description: "Hands-on training in cakes, breads, and traditional sweets.",
  },
  {
    icon: "store",
    title: "30+ outlets to grow",
    description: "Start local, move up — real paths across Chattogram.",
  },
  {
    icon: "heart",
    title: "A team that feels like family",
    description: "Warm culture, shared meals, and pride in every batch.",
  },
  {
    icon: "award",
    title: "Performance rewards",
    description: "Bonuses, festival benefits, and long-service recognition.",
  },
];

export const careerPositions = [
  "Pastry Chef",
  "Counter Sales Associate",
  "Outlet Manager",
  "Delivery Coordinator",
  "Kitchen Helper",
  "Other",
] as const;

export type CareerPosition = (typeof careerPositions)[number];

export const MAX_CV_SIZE_MB = 5;
export const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;
