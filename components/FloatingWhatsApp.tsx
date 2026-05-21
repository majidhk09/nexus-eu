"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    if (tooltipDismissed) return;
    const t = setTimeout(() => setShowTooltip(true), 3000);
    const hide = setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, [tooltipDismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && !tooltipDismissed && (
        <div className="bg-white rounded-2xl shadow-xl border border-line p-4 max-w-xs animate-fade-in-up relative">
          <button
            onClick={() => {
              setShowTooltip(false);
              setTooltipDismissed(true);
            }}
            className="absolute top-2 right-2 text-muted hover:text-ink"
            aria-label="Close"
          >
            <X size={14} />
          </button>
          <div className="text-sm font-bold text-navy mb-1">Got questions? 👋</div>
          <div className="text-xs text-ink-soft leading-relaxed">
            Chat with us on WhatsApp — usually replies within minutes.
          </div>
        </div>
      )}
      <a
        href="https://wa.me/923212919592?text=Hi%20Nexus%20EU%2C%20I%27m%20interested%20in%20studying%20in%20Lithuania."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}
