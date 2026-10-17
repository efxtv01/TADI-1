/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { HomeView } from './components/HomeView';
import { SubpageHeader } from './components/SubpageHeader';
import { CatalogSection } from './components/CatalogSection';
import { InvitationSectionBuilder } from './components/InvitationSectionBuilder';
import { HowGroupsWorkSection } from './components/HowGroupsWorkSection';
import { PricingPackagesSection } from './components/PricingPackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VideoSamplesSection } from './components/VideoSamplesSection';
import { CorporateFestiveSection } from './components/CorporateFestiveSection';
import { Footer } from './components/Footer';
import { OrderFormModal } from './components/OrderFormModal';
import { InvitationItem } from './data/catalogData';
import { MessageCircle, Sliders, BookOpen, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<InvitationItem | null>(null);

  // Sync scroll to top on page change
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderForm = (item?: InvitationItem) => {
    if (item) {
      setSelectedItemForOrder(item);
    }
    setOrderFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      <div>
        {/* Top Navigation */}
        <Header
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenOrderForm={() => handleOpenOrderForm()}
        />

        {/* Dynamic Page Views */}
        <main>
          {/* 1. HOME VIEW */}
          {currentPage === 'home' && (
            <HomeView
              onNavigate={navigateTo}
              onOpenOrderForm={() => handleOpenOrderForm()}
            />
          )}

          {/* 2. CATALOG SUBPAGE */}
          {currentPage === 'catalogo' && (
            <div>
              <SubpageHeader
                title="Catálogo de Invitaciones Digitales"
                category="Invitaciones Digitales - Bodas, 15 Años, etc."
                description="Explora nuestras muestras reales de Bodas, 15 Años, Cumpleaños y Sacramentos. Cada diseño se adapta a tu temática y colores."
                onBackToHome={() => navigateTo('home')}
              />
              <CatalogSection
                onOpenOrderFormWithItem={handleOpenOrderForm}
              />
              <TestimonialsSection />
            </div>
          )}

          {/* 3. SECTION BUILDER SUBPAGE */}
          {currentPage === 'orden-secciones' && (
            <div>
              <SubpageHeader
                title="Escoger y Ordenar Secciones"
                category="Personalización Total"
                description="Tú decides el orden exacto de tu invitación: desde tipo de sobre, música y fotos, hasta la ubicación GPS y confirmación de WhatsApp."
                onBackToHome={() => navigateTo('home')}
              />
              <InvitationSectionBuilder />
            </div>
          )}

          {/* 4. CORPORATE B2B SUBPAGE */}
          {currentPage === 'corporativo' && (
            <div>
              <SubpageHeader
                title="Tarjetas Digitales Empresariales - Para empleados y ejecutivos"
                category="Comunicación & Empleados"
                description="Nosotros somos TADI: creando un vínculo cordial con sus colaboradores durante todo el año en fechas festivas con producción audiovisual y gráfica."
                onBackToHome={() => navigateTo('home')}
              />
              <CorporateFestiveSection />
            </div>
          )}

          {/* 5. PACKAGES & PRICING SUBPAGE */}
          {currentPage === 'paquetes' && (
            <div>
              <SubpageHeader
                title="Paquetes, Precios & Cotizador en Quetzales"
                category="Inversión Inteligente"
                description="Conoce por qué el sistema por grupos familiares te ahorra hasta 70% frente al papel tradicional y cotiza tu evento al instante."
                onBackToHome={() => navigateTo('home')}
              />
              <HowGroupsWorkSection />
              <PricingPackagesSection />
            </div>
          )}

          {/* 6. VIDEOS SUBPAGE */}
          {currentPage === 'videos' && (
            <div>
              <SubpageHeader
                title="Invitaciones en Video Animadas"
                category="Formato Audiovisual"
                description="Videos en alta definición en formato vertical (9:16) para compartir en historias de Instagram, reels y estados de WhatsApp (*Desde Q250)."
                onBackToHome={() => navigateTo('home')}
              />
              <VideoSamplesSection />
            </div>
          )}

          {/* 7. TESTIMONIOS SUBPAGE */}
          {currentPage === 'testimonios' && (
            <div>
              <SubpageHeader
                title="Opiniones & Experiencias de Clientes"
                category="Reseñas Verificadas"
                description="Conoce las opiniones de familias y parejas y comparte tu propio testimonio con nuestro formulario."
                onBackToHome={() => navigateTo('home')}
              />
              <TestimonialsSection />
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        onOpenOrderForm={() => handleOpenOrderForm()}
        onNavigate={navigateTo}
      />

      {/* Floating WhatsApp Quick Action (Removed the floating navigation pill button) */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/50236733749?text=Hola%20TADI,%20estoy%20en%20su%20p%C3%A1gina%20web%20y%20deseo%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xl cursor-pointer transition-transform hover:scale-105 active:scale-95"
          title="Chatear por WhatsApp con TADI"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp TADI</span>
        </a>
      </div>

      {/* Order / Briefing Form Modal */}
      <OrderFormModal
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
        presetItem={selectedItemForOrder}
      />

    </div>
  );
}
