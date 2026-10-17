import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface SubpageHeaderProps {
  title: string;
  category: string;
  description?: string;
  onBackToHome: () => void;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  title,
  category,
  description,
  onBackToHome
}) => {
  return (
    <div className="bg-stone-100/90 border-b border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="space-y-1.5">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#997736] hover:text-[#7A5E26] transition-colors cursor-pointer group font-serif"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a la Página Principal</span>
            </button>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">{category}</span>
              <span className="text-stone-300">/</span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{title}</h1>
            </div>

            {description && (
              <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl">{description}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="px-3.5 py-2 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-all cursor-pointer flex items-center gap-1.5 font-serif shadow-2xs"
            >
              <Home className="w-3.5 h-3.5 text-[#997736]" />
              <span>Inicio</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
