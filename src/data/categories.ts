import type { ServiceCategory } from "@/types/salon";

export const categories: ServiceCategory[] = [
  {
    id: "threading",
    slug: "threading",
    name: "Threading",
    shortDescription: "Precise facial hair removal and brow shaping with minimal discomfort.",
    description:
      "Our threading services offer precise and gentle hair removal, ideal for shaping eyebrows and removing facial hair. This technique provides flawless results with minimal discomfort, making it perfect for sensitive skin.",
    image: "/images/services/threading.jpg",
    imageAlt: "Threading service setup for precise eyebrow shaping.",
    order: 1
  },
  {
    id: "waxing",
    slug: "waxing",
    name: "Waxing",
    shortDescription: "Smooth, long-lasting hair removal for face and body.",
    description:
      "Our waxing treatments range from quick touch-ups to full-body sessions, using careful technique and high-quality products to leave skin feeling silky soft.",
    image: "/images/services/waxing.jpg",
    imageAlt: "Warm salon waxing treatment room with soft towels and skincare products.",
    order: 2
  },
  {
    id: "nufree",
    slug: "nufree-hair-removal",
    name: "Nufree Hair Removal",
    shortDescription: "Organic, non-wax hair removal for sensitive skin.",
    description:
      "Nufree is a non-wax hair removal treatment designed to remove hair gently and effectively without causing irritation. It is antimicrobial and antibacterial for a safe, comfortable experience.",
    image: "/images/services/nufree.jpg",
    imageAlt: "Clean non-wax hair removal treatment setup representing Nufree services.",
    order: 3
  },
  {
    id: "casmara-facials",
    slug: "casmara-facials",
    name: "Casmara Facials",
    shortDescription: "Targeted facial treatments for glow, clarity, firmness and balance.",
    description:
      "Casmara facial options are designed to support different skin concerns, including pigmentation, acne-prone skin, mature skin and visible signs of aging.",
    image: "/images/services/casmara-facial.jpg",
    imageAlt: "Relaxing facial treatment with mask application in a calm salon setting.",
    order: 4
  },
  {
    id: "advanced-facials",
    slug: "advanced-facial-treatments",
    name: "Advanced Facial Treatments",
    shortDescription: "Hydradermabrasion, microdermabrasion and dermaplaning treatments.",
    description:
      "Advanced facial treatments use specialized techniques and equipment to exfoliate, refresh and rejuvenate the skin.",
    image: "/images/services/hydradermabrasion.jpg",
    imageAlt: "Hydradermabrasion-style facial treatment equipment in use.",
    order: 5
  },
  {
    id: "mens-services",
    slug: "mens-services",
    name: "Men’s Services",
    shortDescription: "Brow grooming services for men.",
    description: "Focused eyebrow grooming options for men.",
    image: "/images/services/mens-services.jpg",
    imageAlt: "Men's brow grooming service in a refined salon setting.",
    order: 6
  }
];

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}
