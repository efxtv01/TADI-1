import React from 'react';
import { Mail, MessageCircle, Youtube, Phone, MapPin, Heart, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenOrderForm: () => void;
  onNavigate?: (page: 'home' | 'catalogo' | 'orden-secciones' | 'corporativo' | 'paquetes' | 'videos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderForm, onNavigate }) => {
  const handleNav = (page: 'home' | 'catalogo' | 'orden-secciones' | 'corporativo' | 'paquetes' | 'videos') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNav('home')}
              className="font-serif text-2xl font-bold tracking-wider text-white inline-flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="/tadi-logo.svg" 
                  alt="Logotipo TADI" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
              <span className="text-[#D4AF37]">TADI</span>
            </button>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Tarjetas e invitaciones digitales e interactivas para bodas, 15 años, cumpleaños y eventos en toda la región y el extranjero.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Envíos digitales globales</span>
            </div>
          </div>

          {/* Catalog Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              Catálogos
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('catalogo')} className="hover:text-white transition-colors cursor-pointer">
                  Catálogo de Bodas (15 Diseños)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalogo')} className="hover:text-white transition-colors cursor-pointer">
                  Catálogo de 15 Años (13 Diseños)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalogo')} className="hover:text-white transition-colors cursor-pointer">
                  Catálogo de Cumpleaños
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporativo')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tarjetas Digitales Empresariales - Para empleados y ejecutivos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('orden-secciones')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  ✦ Elegir y Ordenar Secciones
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing & Form */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              Servicios & Pedidos
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('paquetes')} className="hover:text-white transition-colors cursor-pointer">
                  Paquetes de 1 a 150 Grupos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('paquetes')} className="hover:text-white transition-colors cursor-pointer">
                  Calculadora y Cotizador en Vivo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('videos')} className="hover:text-white transition-colors cursor-pointer">
                  Video-Invitaciones (*Desde Q250)
                </button>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-white transition-colors">
                  Opiniones de Clientes Verificadas
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenOrderForm}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Llenar Formulario de Datos
                </button>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLd7p1RGYzSfJv6M8ap1GicpEz_RbTJmSN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" /> Video-Invitaciones (YouTube)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PLHLCa6JVwwpQ6D2exsYH3O7JwcxflQasd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" /> Tarjetas Festivas Empresas (YouTube)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              Contáctanos
            </p>
            <div className="space-y-2 text-xs text-stone-300">
              <a
                href="https://wa.me/50236733749?text=Hola%20TADI,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20invitaciones%20digitales."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>+502 3673-3749 (WhatsApp)</span>
              </a>

              <a
                href="https://www.instagram.com/invitacionesdigitalesinternet/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors text-stone-300"
              >
                <Instagram className="w-4 h-4 shrink-0 text-pink-500" />
                <span className="truncate">Instagram Oficial: @invitacionesdigitalesinternet</span>
              </a>

              <a
                href="mailto:tadi.tarjetasdigitales@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors text-stone-400"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                <span className="truncate">tadi.tarjetasdigitales@gmail.com</span>
              </a>

              <p className="text-[11px] text-stone-500 pt-2 leading-relaxed">
                Horario de atención: Lunes a Sábado de 8:00 AM a 8:00 PM.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Quiet Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-3">
          <p>© 2024–2025 TADI - Tarjetas Digitales e Interactivas. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Hecho con dedicación para bodas y eventos inolvidables</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
