"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { salonConfig } from "@/config/salon";

export function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#472d27] px-4 py-2 text-[#fffaf7]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 text-sm">
        <p>{salonConfig.demoNotice}</p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="grid size-8 shrink-0 place-items-center rounded-full hover:bg-[#fffaf7]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          aria-label="Dismiss demo notice"
        >
          <X aria-hidden="true" size={16} />
        </button>
      </div>
    </div>
  );
}
