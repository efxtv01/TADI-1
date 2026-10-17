import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, MessageCircle, Sparkles, Filter, Check, Palette, Lightbulb } from 'lucide-react';
import { CATALOG_ITEMS, InvitationItem } from '../data/catalogData';
import { MobileInvitationMockup } from './MobileInvitationMockup';

interface CatalogSectionProps {
  onOpenOrderFormWithItem?: (item: InvitationItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onOpenOrderFormWithItem
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bodas' | '15-anos' | 'cumpleanos' | 'varias'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.style.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = {
    all: CATALOG_ITEMS.length,
    bodas: CATALOG_ITEMS.filter(i => i.category === 'bodas').length,
    '15-anos': CATALOG_ITEMS.filter(i => i.category === '15-anos').length,
    cumpleanos: CATALOG_ITEMS.filter(i => i.category === 'cumpleanos').length,
    varias: CATALOG_ITEMS.filter(i => i.category === 'varias').length,
  };

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-800 tracking-widest uppercase">
            <span>Catálogo Oficial TADI</span>
            <span aria-hidden="true">·</span>
            <span>Diseños Reales & Personalizados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            Colección de Muestras e Inspiración
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Explora los ejemplos reales de Bodas, 15 Años, Cumpleaños y Eventos Corporativos elaborados por TADI. Toca "Ver Muestra Real" en cualquier modelo para ver su diseño interactivo en vivo.
          </p>
        </div>

        {/* Customization Guarantee Banner (User point 3) */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-stone-50 border border-amber-300/80 rounded-3xl p-6 sm:p-9 shadow-sm mb-12">
          <div className="max-w-4xl mx-auto space-y-4 text-stone-800">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Diseño 100% Personalizado a su Medida</span>
            </div>

            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
              Cada invitación se crea de forma totalmente personalizada según la temática, colores, estilo, información, distribución y detalles que usted desee. Si tiene alguna idea, inspiración o un ejemplo que le haya gustado, puede enviárnoslo y con gusto diseñaremos una propuesta similar adaptada a su evento.
            </p>

            <p className="text-xs sm:text-sm text-amber-950 font-serif italic border-l-2 border-amber-600 pl-3.5 py-0.5">
              Nos ajustamos a sus gustos para crear una invitación única y hecha especialmente para usted.
            </p>

            <div className="pt-2 border-t border-amber-200/60">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                <strong className="text-stone-900">No está limitado a esos diseños.</strong> Podemos crear la invitación con la temática, colores, estilo y contenido que usted desee. Si ha visto algún diseño que le guste en internet, redes sociales o de otro proveedor, puede compartirnos la referencia y elaboraremos una propuesta personalizada para su evento.
              </p>
              <p className="text-xs sm:text-sm text-stone-900 font-semibold mt-1.5">
                Nuestro objetivo es que su invitación sea exactamente como la imagina.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/50236733749?text=Hola%20TADI,%20tengo%20una%20referencia%20o%20dise%C3%B3%20de%20internet%20que%20me%20gust%C3%B3%20y%20deseo%20saber%20si%20pueden%20hacerlo%20para%20mi%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#997736] via-[#85652B] to-[#735520] hover:brightness-110 border border-[#C5A059] rounded-xl transition-all shadow-xs font-serif"
              >
                <Palette className="w-3.5 h-3.5 text-[#EFE3C3]" />
                Enviar mi Referencia o Diseño por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Fast Category Selector Cards (Control Directo de Categorías) */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono uppercase tracking-widest text-stone-600 font-semibold">
              Selecciona el Tipo de Evento Directamente:
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className={`text-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === 'all' ? 'text-[#997736] font-bold underline' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Ver Todas las Categorías ({categoryCounts.all})
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Bodas */}
            <button
              onClick={() => { setSelectedCategory('bodas'); setSearchQuery(''); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedCategory === 'bodas'
                  ? 'bg-gradient-to-br from-[#997736] via-[#85652B] to-[#6E5019] text-white border-[#C5A059] shadow-md ring-2 ring-[#D4AF37]'
                  : 'bg-[#FAF7F2] text-stone-900 border-[#E4D9C8] hover:border-[#C5A059] hover:bg-[#F3EDE2]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xl">💍</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  selectedCategory === 'bodas' ? 'bg-[#735520] text-[#EFE3C3]' : 'bg-stone-200/80 text-stone-700'
                }`}>
                  {categoryCounts.bodas} Diseños
                </span>
              </div>
              <div>
                <h3 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  selectedCategory === 'bodas' ? 'text-white' : 'text-stone-900'
                }`}>
                  Bodas & Matrimonios
                </h3>
                <p className={`text-[11px] mt-0.5 ${
                  selectedCategory === 'bodas' ? 'text-[#EFE3C3]' : 'text-stone-500'
                }`}>
                  Boda 001 a Boda 015
                </p>
              </div>
            </button>

            {/* Card 2: 15 Años */}
            <button
              onClick={() => { setSelectedCategory('15-anos'); setSearchQuery(''); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedCategory === '15-anos'
                  ? 'bg-gradient-to-br from-[#8C7A70] via-[#A8988E] to-[#6E5E55] text-white border-[#C8BDB6] shadow-md ring-2 ring-[#D4AF37]'
                  : 'bg-[#FAF7F2] text-stone-900 border-[#E4D9C8] hover:border-[#C5A059] hover:bg-[#F3EDE2]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xl">👑</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  selectedCategory === '15-anos' ? 'bg-[#5A4D45] text-stone-200' : 'bg-stone-200/80 text-stone-700'
                }`}>
                  {categoryCounts['15-anos']} Diseños
                </span>
              </div>
              <div>
                <h3 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  selectedCategory === '15-anos' ? 'text-white' : 'text-stone-900'
                }`}>
                  15 Años (Quinceañeras)
                </h3>
                <p className={`text-[11px] mt-0.5 ${
                  selectedCategory === '15-anos' ? 'text-stone-200' : 'text-stone-500'
                }`}>
                  15 Años 000 a 013 + Sobres
                </p>
              </div>
            </button>

            {/* Card 3: Cumpleaños */}
            <button
              onClick={() => { setSelectedCategory('cumpleanos'); setSearchQuery(''); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedCategory === 'cumpleanos'
                  ? 'bg-gradient-to-br from-[#AA8C48] via-[#BFA15F] to-[#997736] text-white border-[#DFCA85] shadow-md ring-2 ring-[#D4AF37]'
                  : 'bg-[#FAF7F2] text-stone-900 border-[#E4D9C8] hover:border-[#C5A059] hover:bg-[#F3EDE2]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xl">🎂</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  selectedCategory === 'cumpleanos' ? 'bg-[#85652B] text-[#EFE3C3]' : 'bg-stone-200/80 text-stone-700'
                }`}>
                  {categoryCounts.cumpleanos} Diseños
                </span>
              </div>
              <div>
                <h3 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  selectedCategory === 'cumpleanos' ? 'text-white' : 'text-stone-900'
                }`}>
                  Cumpleaños & Jubileos
                </h3>
                <p className={`text-[11px] mt-0.5 ${
                  selectedCategory === 'cumpleanos' ? 'text-[#EFE3C3]' : 'text-stone-500'
                }`}>
                  Infantiles, 70 y 80 Años
                </p>
              </div>
            </button>

            {/* Card 4: Corporativo & Otros */}
            <button
              onClick={() => { setSelectedCategory('varias'); setSearchQuery(''); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedCategory === 'varias'
                  ? 'bg-gradient-to-br from-[#4A4744] via-[#5C5955] to-[#383634] text-white border-[#9E9B96] shadow-md ring-2 ring-stone-400'
                  : 'bg-[#FAF7F2] text-stone-900 border-[#E4D9C8] hover:border-[#C5A059] hover:bg-[#F3EDE2]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xl">🏢</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  selectedCategory === 'varias' ? 'bg-stone-800 text-stone-200' : 'bg-stone-200/80 text-stone-700'
                }`}>
                  {categoryCounts.varias} Diseños
                </span>
              </div>
              <div>
                <h3 className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                  selectedCategory === 'varias' ? 'text-white' : 'text-stone-900'
                }`}>
                  Corporativo & Varias
                </h3>
                <p className={`text-[11px] mt-0.5 ${
                  selectedCategory === 'varias' ? 'text-stone-300' : 'text-stone-500'
                }`}>
                  Convivios, Comunión, Bautizo
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Todos ({categoryCounts.all})
            </button>
            <button
              id="bodas"
              onClick={() => setSelectedCategory('bodas')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'bodas'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bodas ({categoryCounts.bodas})
            </button>
            <button
              id="xv-anos"
              onClick={() => setSelectedCategory('15-anos')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === '15-anos'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              15 Años ({categoryCounts['15-anos']})
            </button>
            <button
              id="cumpleanos"
              onClick={() => setSelectedCategory('cumpleanos')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'cumpleanos'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cumpleaños ({categoryCounts.cumpleanos})
            </button>
            <button
              id="varias"
              onClick={() => setSelectedCategory('varias')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'varias'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Corporativo & Otros ({categoryCounts.varias})
            </button>
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por código, novios o estilo..."
              className="w-full text-xs pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Limpiar
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
          <span>
            Mostrando <strong className="text-stone-900 tabular-nums">{filteredItems.length}</strong> invitaciones disponibles
          </span>
          <span className="text-stone-400 hidden sm:inline">
            Haz clic en "Ver Muestra Real" para abrir el diseño en vivo
          </span>
        </div>

        {/* Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-serif font-semibold text-stone-800">No encontramos diseños con ese término</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Intenta con palabras como "Boda 001", "15 Años", "Sobre", "Elegante" o borra el filtro.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl border border-stone-200/90 hover:border-amber-800/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Top Header Info */}
                <div className="p-4 pb-2 flex items-center justify-between border-b border-stone-100 bg-stone-50/50">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold tracking-wider px-2.5 py-1 bg-stone-900 text-amber-300 rounded-md shadow-2xs">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-sans font-semibold text-stone-500 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="font-sans text-[10px] font-bold tracking-wider px-2 py-0.5 bg-amber-600 text-white rounded-md flex items-center gap-1 shadow-2xs">
                      <Sparkles className="w-3 h-3" /> Destacado
                    </span>
                  )}
                </div>

                {/* Mobile Phone Mockup Display - Direct Link to Real Invitation */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-stone-100/90 via-stone-50 to-white border-b border-stone-200/80 flex flex-col items-center">
                  <MobileInvitationMockup item={item} />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div>
                      <h3 className="font-serif text-xl font-bold tracking-wide text-stone-900">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-800/90 leading-snug mt-0.5">
                        {item.style}
                      </p>
                    </div>

                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Unboxed Metadata Features Separated by '·' */}
                    <div className="pt-1 text-[11px] text-stone-500 leading-normal">
                      {item.features.map((feat, idx) => (
                        <React.Fragment key={idx}>
                          <span>{feat}</span>
                          {idx < item.features.length - 1 && (
                            <span className="text-stone-300 mx-1.5" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Color Palette Indicators */}
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-stone-500">
                      <span className="font-medium text-stone-600">Paleta:</span>
                      <div className="flex items-center gap-1.5">
                        {item.palette.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            className="w-3.5 h-3.5 rounded-full border border-stone-300/90 shadow-2xs inline-block"
                            style={{ backgroundColor: color }}
                            title={`Tono ${color}`}
                          />
                        ))}
                      </div>
                      <span className="ml-auto text-[10px] font-mono text-stone-400 truncate max-w-[120px]">
                        ♫ {item.musicGenre}
                      </span>
                    </div>
                  </div>

                  {/* Actions Bar - Direct Real Demo & WhatsApp */}
                  <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-stone-900 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 border border-[#DFCA85] rounded-xl transition-all shadow-xs font-serif"
                      title="Ver diseño real en Google Sites"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-stone-900" />
                      Ver Invitación Real en Vivo
                    </a>

                    <a
                      href={`https://wa.me/50236733749?text=Hola%20TADI,%20estoy%20interesado%20en%20el%20modelo%20${encodeURIComponent(item.code)}%20(${encodeURIComponent(item.title)})%20del%20catálogo.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-stone-800 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-colors cursor-pointer font-serif shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#997736]" />
                      Cotizar {item.code} en WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

