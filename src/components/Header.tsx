import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sliders, Building2, BookOpen, Calculator, Home, Video } from 'lucide-react';

export type PageId = 'home' | 'catalogo' | 'orden-secciones' | 'corporativo' | 'paquetes' | 'videos' | 'testimonios';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenOrderForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenOrderForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand title and logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-stone-900 group flex items-center gap-2.5 text-left cursor-pointer"
          >
            <img 
              src="/tadi-logo.svg" 
              alt="Logotipo TADI" 
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-[#997736] font-bold">TADI</span>
          </button>

          {/* Zone 2: Clean navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'home' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('catalogo')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'catalogo' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Catálogos
            </button>
            <button
              onClick={() => handleNavClick('orden-secciones')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'orden-secciones' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Ordenar Secciones
            </button>
            <button
              onClick={() => handleNavClick('corporativo')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'corporativo' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Tarjetas Digitales Empresariales-Para empleados y ejecutivos
            </button>
            <button
              onClick={() => handleNavClick('paquetes')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'paquetes' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Precios & Cotizador
            </button>
            <button
              onClick={() => handleNavClick('videos')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'videos' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => handleNavClick('testimonios')}
              className={`transition-colors cursor-pointer ${
                currentPage === 'testimonios' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : 'hover:text-stone-950'
              }`}
            >
              Opiniones
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('orden-secciones')}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-2xs font-serif"
            >
              <Sliders className="w-3.5 h-3.5 text-[#997736]" />
              Elegir Secciones
            </button>
            <a
              href="https://wa.me/50236733749?text=Hola%20TADI,%20estoy%20interesado%20en%20el%20cat%C3%A1logo%20de%20invitaciones%20digitales."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-900 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 border border-[#DFCA85] rounded-xl transition-all whitespace-nowrap shadow-xs cursor-pointer font-serif"
            >
              <MessageCircle className="w-3.5 h-3.5 text-stone-900" />
              WhatsApp Directo
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('catalogo')}
              className="px-2.5 py-1.5 text-stone-800 bg-[#FAF7F2] border border-[#E4D9C8] rounded-lg text-xs font-semibold font-serif"
            >
              Catálogos
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'home' ? 'text-amber-900 font-bold' : ''}`}
            >
              <Home className="w-4 h-4 text-stone-400" />
              Página de Inicio
            </button>
            <button
              onClick={() => handleNavClick('catalogo')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'catalogo' ? 'text-amber-900 font-bold' : ''}`}
            >
              <BookOpen className="w-4 h-4 text-stone-400" />
              Catálogos de Invitaciones (Bodas, 15 Años, Cumpleaños)
            </button>
            <button
              onClick={() => handleNavClick('orden-secciones')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'orden-secciones' ? 'text-amber-900 font-bold' : ''}`}
            >
              <Sliders className="w-4 h-4 text-stone-400" />
              ✦ Escoger y Ordenar Secciones
            </button>
            <button
              onClick={() => handleNavClick('corporativo')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'corporativo' ? 'text-amber-900 font-bold' : ''}`}
            >
              <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
              Tarjetas Digitales Empresariales-Para empleados y ejecutivos
            </button>
            <button
              onClick={() => handleNavClick('paquetes')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'paquetes' ? 'text-amber-900 font-bold' : ''}`}
            >
              <Calculator className="w-4 h-4 text-stone-400" />
              Paquetes y Cotizador en Vivo
            </button>
            <button
              onClick={() => handleNavClick('videos')}
              className={`py-2 text-left flex items-center gap-2 ${currentPage === 'videos' ? 'text-amber-900 font-bold' : ''}`}
            >
              <Video className="w-4 h-4 text-stone-400" />
              Video-Invitaciones en YouTube
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderForm();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-stone-900 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] border border-[#DFCA85] rounded-xl font-serif shadow-xs cursor-pointer"
            >
              Llenar Formulario de Pedido
            </button>
            <a
              href="https://wa.me/50236733749?text=Hola%20TADI,%20estoy%20interesado%20en%20el%20cat%C3%A1logo%20de%20invitaciones%20digitales."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-stone-800 bg-[#FAF7F2] border border-[#E4D9C8] rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-[#997736]" />
              Chat de WhatsApp (+502 3673-3749)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
