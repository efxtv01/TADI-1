import React from 'react';
import { 
  BookOpen, 
  Sliders, 
  Building2, 
  Calculator, 
  Sparkles, 
  Video, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Users
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: 'catalogo' | 'orden-secciones' | 'corporativo' | 'paquetes' | 'videos') => void;
  onOpenOrderForm: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenOrderForm }) => {
  return (
    <div className="space-y-0">
      
      {/* Hero with Visual Collage */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100/80 via-stone-50 to-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-[1.12] text-balance">
              Invitaciones y Tarjetas Digitales que Conectan y Emocionan
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
              Experiencias interactivas para celebraciones sociales y soluciones audiovisuales festivas para empresas.
            </p>
          </div>

          {/* Visual Collage: Invitaciones Sociales, Empresas y Videos */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Collage Card 1: Invitaciones Sociales (Bodas & 15 Años) */}
              <div 
                onClick={() => onNavigate('catalogo')}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200 cursor-pointer bg-stone-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/catalog/boda-001.png"
                    alt="Invitaciones Digitales - Bodas, 15 Años, etc."
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">Invitaciones Digitales</span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">Invitaciones Digitales- Bodas, 15 Años, etc.</h3>
                  <p className="text-xs text-stone-300 font-light mt-0.5">Sobre con sello, GPS Waze y música</p>
                </div>
              </div>

              {/* Collage Card 2: Invitaciones de Empresas & Convivios */}
              <div 
                onClick={() => onNavigate('corporativo')}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200 cursor-pointer bg-stone-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/catalog/varias-001.jpg"
                    alt="Tarjetas Digitales Empresariales - Para empleados y ejecutivos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">Empresarial</span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">Tarjetas Digitales Empresariales-Para empleados y ejecutivos</h3>
                  <p className="text-xs text-stone-300 font-light mt-0.5">Vínculo con colaboradores todo el año</p>
                </div>
              </div>

              {/* Collage Card 3: Video-Invitaciones */}
              <div 
                onClick={() => onNavigate('videos')}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200 cursor-pointer bg-stone-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/catalog/xv-001.png"
                    alt="Video Invitaciones para Reels y WhatsApp"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-300">Audiovisual</span>
                  <h3 className="font-serif text-lg font-bold text-white">Video-Invitaciones</h3>
                  <p className="text-xs text-stone-300 font-light mt-0.5">Para estados de WhatsApp e Instagram</p>
                </div>
              </div>

            </div>
          </div>

          {/* Centered Equal-Sized Navigation Buttons */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-stone-500 text-center">
              ¿Qué deseas realizar hoy?
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Button 1: Ver Catálogos - Champagne Gold */}
              <button
                onClick={() => onNavigate('catalogo')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B89047] hover:brightness-105 text-stone-900 border border-[#DFCA85] font-serif text-base sm:text-lg font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer group transform active:scale-98"
              >
                <BookOpen className="w-5 h-5 text-stone-900 shrink-0" />
                <span>Ver Catálogos de Invitaciones</span>
                <ArrowRight className="w-4 h-4 text-stone-900 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Escoger y Ordenar Secciones - Burnished Gold */}
              <button
                onClick={() => onNavigate('orden-secciones')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#997736] via-[#85652B] to-[#735520] hover:brightness-110 text-white border border-[#C5A059] font-serif text-base sm:text-lg font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer group transform active:scale-98"
              >
                <Sliders className="w-5 h-5 text-[#EFE3C3] shrink-0" />
                <span>Escoger y Ordenar Secciones</span>
                <ArrowRight className="w-4 h-4 text-[#EFE3C3] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 3: Tarjetas Digitales Empresariales */}
              <button
                onClick={() => onNavigate('corporativo')}
                className="w-full py-4 px-6 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3EDE2] text-stone-800 border-2 border-[#E4D9C8] hover:border-[#C5A059] font-serif text-base sm:text-lg font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer group transform active:scale-98"
              >
                <Building2 className="w-5 h-5 text-[#997736] shrink-0" />
                <span>Tarjetas Digitales Empresariales - Para empleados y ejecutivos</span>
                <ArrowRight className="w-4 h-4 text-stone-500 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 4: Paquetes y Precios - Wedding Silver */}
              <button
                onClick={() => onNavigate('paquetes')}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 hover:from-stone-200 hover:to-stone-300 text-stone-800 border-2 border-stone-300 hover:border-[#C5A059] font-serif text-base sm:text-lg font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer group transform active:scale-98"
              >
                <Calculator className="w-5 h-5 text-stone-700 shrink-0" />
                <span>Paquetes y Cotizador en Vivo</span>
                <ArrowRight className="w-4 h-4 text-stone-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-[#997736] uppercase tracking-widest">
              Nuestra Esencia
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-bold">
              Quiénes Somos en TADI
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto" />
          </div>

          <div className="space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed font-light">
            <p>
              En <strong>TADI (Tarjetas Digitales e Interactivas)</strong> somos un estudio creativo dedicado al diseño de invitaciones web interactivas y producción audiovisual de tarjetas festivas personalizadas.
            </p>

            <p>
              Creemos firmemente que la primera impresión de un gran momento debe ser extraordinaria. Sustituimos las limitaciones del papel impreso tradicional —que suele perderse o descartarse— por enlaces elegantes y dinámicos que integran tecnología moderna: <strong>confirmación instantánea a WhatsApp, ubicación GPS en Waze y Google Maps, música de fondo personalizada y control riguroso de cupos por grupo familiar</strong>.
            </p>

            <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#997736]" />
                Nuestros Dos Grandes Enfoques:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
                <div className="space-y-1">
                  <strong className="text-stone-900 block font-sans">1. Eventos Sociales Familiares:</strong>
                  <span>Bodas, 15 Años, Cumpleaños de niños y adultos, Bautizos, Primeras Comuniones y Baby Showers con personalización al 100%.</span>
                </div>
                <div className="space-y-1">
                  <strong className="text-stone-900 block font-sans">2. Comunicación Festiva Empresarial:</strong>
                  <span>Tarjetas digitales y audiovisuales para empresas que buscan conectar con sus trabajadores en fechas festivas durante todo el año.</span>
                </div>
              </div>
            </div>

            <p>
              Todos nuestros trabajos se adaptan estrictamente a los gustos, colores y temáticas de cada cliente. Si viste alguna idea en internet o redes sociales, con gusto la tomamos de inspiración para crear una propuesta única hecha exclusivamente para ti.
            </p>
          </div>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-200 text-center">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <p className="font-serif text-sm font-bold text-stone-900">100% Interactivo</p>
              <p className="text-[11px] text-stone-500">Música, Waze & RSVP</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
              <Users className="w-5 h-5 text-amber-700 mx-auto mb-1.5" />
              <p className="font-serif text-sm font-bold text-stone-900">Ahorro por Grupo</p>
              <p className="text-[11px] text-stone-500">Pagas familias, no personas</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <p className="font-serif text-sm font-bold text-stone-900">8 Meses Activa</p>
              <p className="text-[11px] text-stone-500">Vigencia garantizada</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
              <MessageCircle className="w-5 h-5 text-amber-700 mx-auto mb-1.5" />
              <p className="font-serif text-sm font-bold text-stone-900">Atención WhatsApp</p>
              <p className="text-[11px] text-stone-500">+502 3673-3749</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
