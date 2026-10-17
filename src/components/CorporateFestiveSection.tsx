import React from 'react';
import { Youtube, ExternalLink, MessageCircle, Briefcase, Sparkles, CheckCircle2, Award, Building2, Palette } from 'lucide-react';

export const CorporateFestiveSection: React.FC = () => {
  return (
    <section id="corporativo" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Servicio Corporativo & Empresas</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            TADI - Tarjetas Digitales Empresariales para Empleados y Ejecutivos
          </h2>
          
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            Fortaleciendo el vínculo humano y el clima laboral entre las organizaciones y sus colaboradores durante todo el año.
          </p>
        </div>

        {/* Main Presentation Box */}
        <div className="bg-stone-950/90 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                <p className="text-base sm:text-lg font-serif italic text-amber-200 border-l-2 border-amber-500 pl-4">
                  "Nosotros somos TADI - Tarjetas Digitales de Felicitación, dedicadas a trabajadores de empresas, brindadas por medio de sus propias empresas, logrando un vínculo y un ambiente más cercano y cordial con sus empleados, sorprendiendo e interactuando con ellos durante todo el año en esas fechas festivas importantes, y de una manera personalizada."
                </p>

                <p>
                  Realizamos <strong>Tarjetas de Felicitación y de Días Festivos en formato Audiovisual</strong> y creación de contenido para Redes Sociales.
                </p>

                <p className="text-stone-300">
                  Así mismo realizamos toda su producción en <strong>Diseño, Imagen y Audiovisual INTERNA</strong> como Diseño de logotipos, Flyers, Catálogos, Banners, todo material gráfico para promoción y Publicidad impreso o digital, manejo y producción de contenido para Redes Sociales y contenido interno y externo.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.youtube.com/playlist?list=PLHLCa6JVwwpQ6D2exsYH3O7JwcxflQasd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#997736] via-[#85652B] to-[#735520] hover:brightness-110 border border-[#C5A059] rounded-xl transition-all shadow-md cursor-pointer font-serif"
                >
                  <Youtube className="w-4 h-4 text-[#EFE3C3]" />
                  Ver Tarjetas Festivas en YouTube
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href="https://wa.me/50236733749?text=Hola%20TADI,%20represento%20a%20una%20empresa%20y%20deseo%20cotizar%20Tarjetas%20Digitales%20de%20Felicitaci%C3%B3n%20y%20Producci%C3%B3n%20Gr%C3%A1fica%20para%20empleados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-stone-900 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-colors cursor-pointer font-serif shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#997736]" />
                  Cotizar Servicios Corporativos en WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Visual Video Playlist Embed Card */}
            <div className="lg:col-span-5">
              <div className="bg-stone-900 rounded-2xl border border-stone-800 p-5 space-y-4">
                <div className="relative aspect-[16/10] bg-stone-950 rounded-xl overflow-hidden border border-stone-800 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent z-10" />
                  
                  <div className="z-20 text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
                      <Youtube className="w-6 h-6" />
                    </div>
                    <p className="font-serif text-sm font-bold text-white">Tarjetas Festivas & de Felicitación</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">Playlist Oficial en YouTube de TADI</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-300">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-[11px] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fechas Especiales que Cubrimos:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-400">
                    <p>• Día de la Madre y del Padre</p>
                    <p>• Aniversarios de Empresa</p>
                    <p>• Fiestas Navideñas y Año Nuevo</p>
                    <p>• Cumpleaños de Colaboradores</p>
                    <p>• Día del Trabajador</p>
                    <p>• Logros y Reconocimientos</p>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/playlist?list=PLHLCa6JVwwpQ6D2exsYH3O7JwcxflQasd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-[#D4AF37] text-xs font-semibold rounded-xl transition-colors border border-[#BFA15F]/40 font-serif"
                >
                  Abrir Playlist de YouTube Oficial &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars of Corporate Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Tarjetas Festivas Audiovisuales</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Videos emotivos de alta calidad con el logo y colores de su empresa para felicitar a su personal en cumpleaños, aniversarios, días festivos y cierres de año.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Diseño Gráfico & Publicidad</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Logotipos, flyers, catálogos, banners y todo material gráfico para promoción y publicidad impreso o digital para uso interno y comercial.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Contenido para Redes Sociales</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Manejo y producción integral de contenido visual y audiovisual para sus canales de comunicación interna, LinkedIn, Facebook, Instagram y WhatsApp institucional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
