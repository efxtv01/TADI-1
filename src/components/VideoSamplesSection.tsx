import React from 'react';
import { Play, Video, ExternalLink, Youtube, Sparkles, CheckCircle2 } from 'lucide-react';

export const VideoSamplesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Video Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
              <Youtube className="w-4 h-4 text-red-600" />
              <span>Invitaciones en Video & Formato Vertical</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-[1.15]">
              Impacta a tus invitados con una Video-Invitación Animada
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Además de tu enlace web interactivo, creamos videos en alta definición en formato vertical (9:16) y horizontal. Ideales para compartir en estados de WhatsApp, historias de Instagram y reels para emocionar a tus invitados desde semanas antes.
            </p>

            <div className="space-y-3 pt-2 text-xs text-stone-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Animaciones tipográficas fluidas al ritmo de tu canción favorita.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ideal para "Save the Date" o recordatorio previo a la fecha oficial.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Compatibilidad total para descargar y reenviar en cualquier teléfono sin pérdida de calidad.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.youtube.com/playlist?list=PLd7p1RGYzSfJv6M8ap1GicpEz_RbTJmSN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#997736] via-[#85652B] to-[#735520] hover:brightness-110 border border-[#C5A059] rounded-xl transition-all shadow-md cursor-pointer font-serif"
              >
                <Youtube className="w-4 h-4 text-[#EFE3C3]" />
                Ver Playlist de Invitaciones en Video
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="https://wa.me/50236733749?text=Hola%20TADI,%20deseo%20cotizar%20una%20video-invitaci%C3%B3n%20animada%20(*Desde%20Q250)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-colors font-serif shadow-2xs"
              >
                Preguntar por Video (*Desde Q250)
              </a>
            </div>
          </div>

          {/* Right Column: Visual Video Mockup Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md bg-stone-900 rounded-3xl p-4 shadow-2xl border border-stone-800 text-white">
              
              <div className="relative aspect-[16/10] bg-stone-950 rounded-2xl overflow-hidden flex items-center justify-center border border-stone-800 group">
                <img
                  src="/src/assets/images/tadi_catalog_birthday_celebration_1791317852461.jpg"
                  alt="Muestra de video invitación"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                
                {/* Big Play Button */}
                <a
                  href="https://www.youtube.com/playlist?list=PLd7p1RGYzSfJv6M8ap1GicpEz_RbTJmSN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute z-10 w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Abrir playlist de YouTube"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </a>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-stone-300 bg-stone-950/80 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  <span className="font-mono">TADI Studio · Video Invitaciones</span>
                  <span className="text-red-400 font-semibold flex items-center gap-1">
                    *Desde Q250
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-stone-950/60 rounded-xl border border-stone-800/80 flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-amber-300">Playlist Oficial de Video-Invitaciones</p>
                  <p className="text-[11px] text-stone-400">Bodas, 15 Años y Cumpleaños en Video</p>
                </div>
                <a
                  href="https://www.youtube.com/playlist?list=PLd7p1RGYzSfJv6M8ap1GicpEz_RbTJmSN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 text-[11px]"
                >
                  Ver Videos &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
