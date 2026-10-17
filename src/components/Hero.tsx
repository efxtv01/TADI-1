import React from 'react';
import { Smartphone, Sparkles, MapPin, Music, MessageCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100/70 via-stone-50 to-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#997736] tracking-wider uppercase">
              <span className="font-bold">TADI</span>
              <span aria-hidden="true">·</span>
              <span>Invitaciones Web & Digitales</span>
              <span aria-hidden="true">·</span>
              <span>Colección Exclusiva</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-[1.12] text-balance">
              Invitaciones digitales que transforman tu evento en un recuerdo inolvidable
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-light">
              Despídete del papel tradicional y los costos excesivos. Creamos experiencias interactivas con geolocalización en Waze y Google Maps, confirmación de asistencia por WhatsApp, música envolvente y control exacto de pases por grupo familiar.
            </p>

            {/* Unboxed Metadata Features */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-500 pt-1">
              <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Confirmación por WhatsApp
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                Ubicación Waze & Maps
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Music className="w-4 h-4 text-stone-700" />
                Música de Fondo
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Sobre Virtual
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#orden-secciones"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-stone-900 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 border border-[#DFCA85] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer transform active:scale-95 font-serif"
              >
                <Sparkles className="w-4 h-4 text-stone-900" />
                Escoger y Ordenar Secciones
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-colors cursor-pointer font-serif shadow-xs"
              >
                Explorar Catálogos
              </button>
            </div>

            {/* Quick Proof Metrics adjacent to claims */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200 text-stone-900">
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-amber-900 tabular-nums">30+</p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Modelos exclusivos</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-amber-900 tabular-nums">8 Meses</p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Vigencia garantizada</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-amber-900 tabular-nums">Desde Q300</p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Paquetes por grupo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back card glow & styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-white">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-200 relative group">
                  <img
                    src="/catalog/boda-001.png"
                    alt="Muestra de invitación digital moderna de TADI Boda 001 Tipo Sobre con Solapa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/20 to-transparent" />
                  
                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-300">Muestra en Vivo</p>
                    <p className="font-serif text-xl font-medium tracking-wide">Boda 001 · Tipo Sobre con Solapa</p>
                    <p className="text-xs text-stone-200 font-light mt-0.5">Animación de sello dorado, música y conteo regresivo</p>
                  </div>
                </div>

                {/* Sub-bar below image */}
                <div className="p-4 bg-stone-900 text-stone-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium">100% Personalizable a tu paleta de color</span>
                  </div>
                  <a
                    href="#catalogo"
                    className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Ver muestras reales &rarr;
                  </a>
                </div>
              </div>

              {/* Floating Testimonial / Detail Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-xl p-4 shadow-xl max-w-xs">
                <p className="text-xs font-semibold text-stone-900">Sistema por Grupos Familiares</p>
                <p className="text-xs text-stone-600 mt-1">
                  150 invitados organizados en 45 grupos = Pagas solo el paquete de 50 grupos. ¡Ahorras hasta 70%!
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
