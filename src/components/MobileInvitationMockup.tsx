import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { InvitationItem } from '../data/catalogData';

interface MobileInvitationMockupProps {
  item: InvitationItem;
}

export const MobileInvitationMockup: React.FC<MobileInvitationMockupProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Realistic Mobile Device Container - Click to go straight to real invitation */}
      <a
        href={item.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Abrir invitación real de ${item.title} (${item.code})`}
        className="group/phone relative block mx-auto w-full max-w-[240px] sm:max-w-[260px] aspect-[9/18.5] bg-stone-900 rounded-[2.6rem] p-2 sm:p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 ring-1 ring-white/20 border-[3.5px] border-stone-800 hover:border-amber-500/80 cursor-pointer overflow-hidden transform hover:-translate-y-1"
      >
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-3.5 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
            <span className="w-2 h-2 rounded-full bg-blue-950/70 border border-stone-700/50" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-3 left-6 right-6 z-20 flex items-center justify-between text-[8px] font-sans text-white/80 font-semibold pointer-events-none drop-shadow-xs">
          <span>19:30</span>
          <div className="flex items-center gap-1">
            <span className="text-[7px]">5G</span>
            <span>🔋 88%</span>
          </div>
        </div>

        {/* Phone Screen Canvas showing ONLY the Invitation Image */}
        <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-stone-100 flex flex-col items-center justify-center">
          <img
            src={item.previewImage}
            alt={`${item.code} - ${item.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
            onError={(e) => {
              const img = e.currentTarget;
              const altExt = item.previewImage.endsWith('.png') ? '.jpg' : '.png';
              const fallback = '/catalog/' + item.id + altExt;
              if (img.src !== fallback) {
                img.src = fallback;
              }
            }}
          />

          {/* Hover Overlay Hint: Direct Link to Real Invitation */}
          <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <div className="p-3 rounded-full bg-amber-500 text-stone-950 shadow-lg transform scale-90 group-hover/phone:scale-100 transition-transform duration-300">
              <ExternalLink className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="mt-2 text-xs font-serif font-bold text-white drop-shadow-md">
              Ver Invitación Real
            </span>
            <span className="text-[10px] text-amber-200 drop-shadow-xs mt-0.5">
              Clic para abrir demo en vivo
            </span>
          </div>

          {/* Bottom Bar Indicator inside screen */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-stone-300/80 rounded-full pointer-events-none" />
        </div>
      </a>

      {/* Label under the phone */}
      <a
        href={item.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-[11px] font-medium text-stone-500 hover:text-amber-800 flex items-center gap-1 transition-colors cursor-pointer"
      >
        <span>Toca la pantalla para ver el diseño real</span>
        <ExternalLink className="w-3 h-3 text-stone-400" />
      </a>
    </div>
  );
};
