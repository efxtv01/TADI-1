import React, { useState } from 'react';
import { Check, Sparkles, Plus, MessageCircle, HelpCircle, FileText, Video, Image as ImageIcon, X, Eye, ZoomIn } from 'lucide-react';
import { PRICING_PACKAGES, ADDONS } from '../data/catalogData';

export const PricingPackagesSection: React.FC = () => {
  const [selectedBasePackage, setSelectedBasePackage] = useState<number>(375); // default 1 to 50
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    sobres: true, // popular
    video: false,
    pdf: false
  });
  const [envelopeModalImage, setEnvelopeModalImage] = useState<string | null>(null);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentAddonTotal = ADDONS.reduce((acc, addon) => {
    return acc + (selectedAddons[addon.id] ? addon.price : 0);
  }, 0);

  const finalTotal = selectedBasePackage + currentAddonTotal;

  const getPackageName = (price: number) => {
    const pkg = PRICING_PACKAGES.find(p => p.priceQ === price);
    return pkg ? pkg.groups : 'Personalizado';
  };

  const generateWhatsAppQuoteLink = () => {
    const baseName = getPackageName(selectedBasePackage);
    const activeAddonsList = ADDONS.filter(a => selectedAddons[a.id]).map(a => `${a.title} (+Q${a.price})`);
    
    let text = `¡Hola TADI! Deseo contratar una invitación digital:\n`;
    text += `• Paquete Base: ${baseName} (Q${selectedBasePackage})\n`;
    if (activeAddonsList.length > 0) {
      text += `• Complementos: ${activeAddonsList.join(', ')}\n`;
    }
    text += `• Inversión Total: Q${finalTotal}.00\n`;
    text += `¿Me podrían dar los pasos para iniciar?`;

    return `https://wa.me/50236733749?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="paquetes" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <span>Precios Claros & Sin Sorpresas</span>
            <span aria-hidden="true">·</span>
            <span>En Quetzales (Q)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            Paquetes Oficiales de Invitaciones Digitales
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Elige el paquete que mejor se adapte al tamaño de tu familia y amigos. Todos incluyen diseño interactivo, mapa Waze/Maps, confirmación por WhatsApp y 8 meses de vigencia activa.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'bg-stone-900 text-white shadow-xl ring-2 ring-amber-500 transform lg:-translate-y-2'
                  : 'bg-white text-stone-900 border border-stone-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#B89047] text-stone-900 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1 font-serif border border-[#DFCA85]">
                  <Sparkles className="w-3 h-3 text-stone-900" /> Más Solicitado
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`font-serif text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-stone-900'}`}>
                    {pkg.groups}
                  </h3>
                  <p className={`text-xs mt-1 ${pkg.popular ? 'text-stone-300' : 'text-stone-500'}`}>
                    {pkg.idealFor}
                  </p>
                </div>

                <div className="py-2 border-y border-stone-200/20">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-bold tracking-tight text-amber-500 tabular-nums">
                      Q{pkg.priceQ}
                    </span>
                    <span className={`text-xs ${pkg.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                      / total único
                    </span>
                  </div>
                  <p className={`text-[11px] mt-0.5 font-mono ${pkg.popular ? 'text-amber-300/80' : 'text-stone-400'}`}>
                    {pkg.perInvitation}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 pt-2 text-xs">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.popular ? 'text-amber-400' : 'text-emerald-600'}`} />
                      <span className={pkg.popular ? 'text-stone-200' : 'text-stone-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={`https://wa.me/50236733749?text=Hola%20TADI,%20deseo%20contratar%20el%20paquete%20de%20${encodeURIComponent(pkg.groups)}%20por%20Q${pkg.priceQ}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all font-serif ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 border border-[#DFCA85] shadow-md'
                      : 'bg-[#FAF7F2] hover:bg-[#F3EDE2] text-stone-800 border border-[#E4D9C8] hover:border-[#C5A059] shadow-2xs'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Elegir Paquete Q{pkg.priceQ}
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Formatos Adicionales & Complementos */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest block mb-1">
              Formatos Adicionales & Opciones Económicas
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
              Personaliza tu Entrega con Sobres, Videos o PDF
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
              Puedes complementar tu enlace interactivo con imágenes tipo sobre personalizadas, un video de alta definición para tus estados de WhatsApp o un documento PDF interactivo con hipervínculos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDONS.map((addon) => {
              const isSobres = addon.id === 'sobres';
              return (
                <div
                  key={addon.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 ${
                    isSobres
                      ? 'bg-amber-50/40 border-amber-300/80 shadow-sm ring-1 ring-amber-400/30'
                      : 'bg-stone-50 border-stone-200/90'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-stone-900">{addon.title}</span>
                      <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                        +Q{addon.price}
                      </span>
                    </div>

                    {isSobres && (
                      <div className="relative group rounded-xl overflow-hidden border border-amber-200/90 bg-stone-900 aspect-[4/3] flex items-center justify-center cursor-pointer"
                        onClick={() => setEnvelopeModalImage('/sobres 001.png')}
                      >
                        <img
                          src="/sobres 001.png"
                          alt="sobres 001.png - Ejemplo de Imagen Tipo Sobre TADI"
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-serif font-bold">
                          <Eye className="w-4 h-4 text-amber-300" />
                          <span>Ver Muestra de Sobre (sobres 001.png)</span>
                        </div>
                        <span className="absolute bottom-2 left-2 text-[10px] bg-stone-900/90 text-amber-300 px-2 py-0.5 rounded font-mono border border-amber-500/30">
                          sobres 001.png
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {addon.description}
                    </p>

                    {isSobres && (
                      <button
                        type="button"
                        onClick={() => setEnvelopeModalImage('/sobres 001.png')}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-2 cursor-pointer pt-1"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        Ver ejemplo de sobre (sobres 001.png)
                      </button>
                    )}
                  </div>

                  {addon.badge && (
                    <span className="inline-block text-[10px] font-semibold text-amber-800 uppercase tracking-wide">
                      ★ {addon.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Cotizador Interactivo */}
        <div id="cotizador" className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Cotizador Dinámico TADI
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  Arma tu Cotización en Tiempo Real
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                  Selecciona la cantidad de grupos y los complementos que necesitas para obtener el precio total exacto.
                </p>
              </div>

              {/* Package Selector */}
              <div className="space-y-2">
                <label className="text-xs text-stone-400 block uppercase tracking-wider">
                  Paso 1: Selecciona tu Paquete Base
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRICING_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.priceQ}
                      onClick={() => setSelectedBasePackage(pkg.priceQ)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedBasePackage === pkg.priceQ
                          ? 'bg-amber-600/30 border-amber-500 text-white ring-1 ring-amber-500'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:bg-stone-800'
                      }`}
                    >
                      <span className="block text-xs font-bold text-white">{pkg.groups}</span>
                      <span className="block text-sm font-serif font-bold text-amber-400 mt-1 tabular-nums">
                        Q{pkg.priceQ}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons Selector */}
              <div className="space-y-2">
                <label className="text-xs text-stone-400 block uppercase tracking-wider">
                  Paso 2: Agrega Complementos Opcionales
                </label>
                <div className="space-y-2">
                  {ADDONS.map((addon) => {
                    const isChecked = !!selectedAddons[addon.id];
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-stone-800/80 border-amber-500/60 text-white'
                            : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:bg-stone-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-amber-500 border-amber-400 text-stone-950' : 'border-stone-600'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-stone-200 block">{addon.title}</span>
                            <span className="text-[11px] text-stone-400">{addon.description}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400 shrink-0 ml-3 tabular-nums">
                          +Q{addon.price}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Inline preview banner when sobres addon is selected in cotizador */}
                {selectedAddons.sobres && (
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <div 
                        onClick={() => setEnvelopeModalImage('/sobres 001.png')}
                        className="w-12 h-14 bg-stone-900 rounded-lg overflow-hidden border border-amber-400/50 shrink-0 cursor-pointer hover:opacity-90 flex items-center justify-center"
                      >
                        <img 
                          src="/sobres 001.png" 
                          alt="sobres 001.png" 
                          className="w-full h-full object-contain p-0.5" 
                        />
                      </div>
                      <div>
                        <span className="text-amber-300 font-bold block">✓ Muestra de Imagen Tipo Sobre: sobres 001.png (+Q50)</span>
                        <span className="text-[11px] text-stone-300">Se entregan hasta 100 imágenes personalizadas con nombre y pases.</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEnvelopeModalImage('/sobres 001.png')}
                      className="px-2.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-[11px] font-serif font-bold shrink-0 transition-colors cursor-pointer"
                    >
                      Ver Ejemplo
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Summary Box Right */}
            <div className="lg:col-span-5 bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] pb-2 border-b border-stone-800 font-semibold">
                Resumen de tu Cotización
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Paquete Base ({getPackageName(selectedBasePackage)}):</span>
                  <span className="font-mono text-white tabular-nums">Q{selectedBasePackage}.00</span>
                </div>

                {ADDONS.map(addon => {
                  if (!selectedAddons[addon.id]) return null;
                  return (
                    <div key={addon.id} className="flex justify-between text-stone-300">
                      <span>+ {addon.title}:</span>
                      <span className="font-mono text-amber-300 tabular-nums">Q{addon.price}.00</span>
                    </div>
                  );
                })}

                <div className="pt-3 border-t border-stone-800 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-white">Inversión Final:</span>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-bold text-[#D4AF37] tabular-nums">
                      Q{finalTotal}.00
                    </span>
                    <span className="block text-[10px] text-stone-500 font-mono">Quetzales</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={generateWhatsAppQuoteLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-bold text-xs tracking-wide transition-all shadow-lg cursor-pointer font-serif border border-[#DFCA85]"
                >
                  <MessageCircle className="w-4 h-4 text-stone-900" />
                  Enviar esta Cotización por WhatsApp
                </a>
                <p className="text-[10px] text-stone-500 text-center mt-2">
                  Atención directa: +502 3673-3749 · Respuesta en minutos
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Envelope Sample Image */}
      {envelopeModalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setEnvelopeModalImage(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-stone-200 text-stone-900 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold">
                  Muestra Real de Imagen Tipo Sobre TADI
                </span>
                <h4 className="font-serif text-lg font-bold text-stone-900">
                  Ejemplo de Imagen Tipo Sobre (+Q50)
                </h4>
              </div>
              <button
                onClick={() => setEnvelopeModalImage(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-stone-900 rounded-2xl p-4 flex flex-col items-center justify-center border border-stone-800">
              <img
                src={envelopeModalImage}
                alt="Muestra real de sobre digital - sobres 001.png"
                className="max-h-[55vh] object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-stone-700 leading-relaxed font-sans">
              <p>
                <strong>Opción Económica:</strong> Si lo que desea es economizar, y solamente comprar la invitación sin nombres y número de invitados dentro de la misma invitación (libre), la opción última que es una imagen aparte de la invitación con nombre y número de invitados (tipo sobre), se le puede realizar de 1 a 100 por solo Q50 extra. Se le entrega entonces la invitación y hasta 100 imágenes (tipo sobre) que usted enviará a cada invitado (invitación/link + imagen).
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500">
                Modelo: sobres 001.png
              </span>
              <button
                onClick={() => setEnvelopeModalImage(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-serif font-bold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Cerrar Muestra
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
