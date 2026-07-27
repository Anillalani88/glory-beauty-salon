import type { Location } from "@/types/salon";

export const locations: Location[] = [
  {
    id: "stoney-creek",
    name: "Stoney Creek",
    status: "Current location",
    addressLines: ["388 Old Mud Street", "Stoney Creek, Ontario", "L8J 1X1"],
    phone: "9052674841",
    phoneDisplay: "(905)-267-4841",
    hours: "Business hours coming soon",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=388%20Old%20Mud%20Street%20Stoney%20Creek%20Ontario%20L8J%201X1",
    image: "/images/locations/stoney-creek.jpg",
    imageAlt: "Elegant exterior-inspired image representing the Stoney Creek salon location."
  },
  {
    id: "welland",
    name: "Welland",
    status: "Coming Soon",
    addressLines: ["102 Primeway Drive", "Welland, Ontario", "L3B 0A1"],
    phoneDisplay: "Phone coming soon",
    hours: "Business hours coming soon",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=102%20Primeway%20Drive%20Welland%20Ontario%20L3B%200A1",
    image: "/images/locations/welland.jpg",
    imageAlt: "Elegant exterior-inspired image representing the future Welland salon location."
  }
];

export function getLocationById(id: string) {
  return locations.find((location) => location.id === id);
}
