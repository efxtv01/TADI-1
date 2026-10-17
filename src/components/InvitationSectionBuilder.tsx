import React, { useState } from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  Check, 
  Sparkles, 
  MessageCircle, 
  RotateCcw, 
  Sliders, 
  Eye, 
  Music, 
  Video, 
  MapPin, 
  Calendar, 
  Clock, 
  Camera, 
  Gift, 
  Heart, 
  Mail, 
  Image as ImageIcon,
  HelpCircle
} from 'lucide-react';

export interface SectionBlock {
  id: string;
  name: string;
  selectedOption: string;
  options: string[];
  description: string;
  iconName: string;
  enabled: boolean;
}

const DEFAULT_SECTIONS: SectionBlock[] = [
  {
    id: 'apertura',
    name: 'Tipo de Apertura',
    selectedOption: 'Tipo sobre con sello',
    options: ['Tipo sobre con sello', 'Tipo normal entrada directa a una foto o imagen'],
    description: 'Efecto inicial al abrir el enlace web de la invitación.',
    iconName: 'mail',
    enabled: true
  },
  {
    id: 'nombres',
    name: 'Estilo de Nombres',
    selectedOption: 'Nombres animados',
    options: ['Nombres animados', 'Nombres sin animación'],
    description: 'Aparición caligráfica fluida o tipografía estática de alta elegancia.',
    iconName: 'sparkles',
    enabled: true
  },
  {
    id: 'conteo',
    name: 'Conteo Regresivo',
    selectedOption: 'Conteo regresivo en vivo',
    options: ['Conteo regresivo en vivo', 'Sin conteo regresivo'],
    description: 'Reloj dinámico en días, horas, minutos y segundos.',
    iconName: 'clock',
    enabled: true
  },
  {
    id: 'multimedia',
    name: 'Reproductor Multimedia',
    selectedOption: 'Solo música play',
    options: ['Solo música play', 'Video play'],
    description: 'Reproducción de fondo de tu tema especial o video teaser.',
    iconName: 'music',
    enabled: true
  },
  {
    id: 'oracion',
    name: 'Oración / Frase',
    selectedOption: 'Oración o versículo bíblico',
    options: ['Oración o versículo bíblico', 'Omitir oración'],
    description: 'Cita espiritual o dedicatoria de bendición para el evento.',
    iconName: 'heart',
    enabled: true
  },
  {
    id: 'padres',
    name: 'Mención de Padres',
    selectedOption: 'En compañía de nuestros padres',
    options: ['En compañía de nuestros padres', 'Sin mención de padres'],
    description: 'Reconocimiento y bendición de los padres de los novios o festejada.',
    iconName: 'heart',
    enabled: true
  },
  {
    id: 'fecha',
    name: 'Fecha y Hora',
    selectedOption: 'Fecha y hora destacada',
    options: ['Fecha y hora destacada'],
    description: 'Día de la semana, fecha completa y horario de inicio.',
    iconName: 'calendar',
    enabled: true
  },
  {
    id: 'misa',
    name: 'Ceremonia Religiosa',
    selectedOption: 'Lugar la misa + botón de ubicación GPS',
    options: ['Lugar la misa + botón de ubicación GPS', 'Omitir misa / Solo recepción'],
    description: 'Iglesia o templo con enlace directo a Waze y Google Maps.',
    iconName: 'map',
    enabled: true
  },
  {
    id: 'recepcion',
    name: 'Lugar de Recepción',
    selectedOption: 'Lugar de recepción + botón de ubicación GPS',
    options: ['Lugar de recepción + botón de ubicación GPS'],
    description: 'Salón, finca u hotel con botón interactivo de GPS.',
    iconName: 'map',
    enabled: true
  },
  {
    id: 'itinerario',
    name: 'Itinerario del Evento',
    selectedOption: 'Itinerario con horarios',
    options: ['Itinerario con horarios', 'Omitir itinerario'],
    description: 'Línea de tiempo detallada (Misa, Cóctel, Vals, Cena, Fiesta).',
    iconName: 'clock',
    enabled: true
  },
  {
    id: 'galeria',
    name: 'Galería de Fotos',
    selectedOption: 'Galería de fotos de novios/festejado',
    options: ['Galería de fotos de novios/festejado', 'Omitir galería'],
    description: 'Álbum fotográfico interactivo con sesión previa.',
    iconName: 'camera',
    enabled: true
  },
  {
    id: 'regalos',
    name: 'Mesa de Regalos / Sobres',
    selectedOption: 'Mesa de regalos + botón con link',
    options: ['Mesa de regalos + botón con link', 'Lluvia de sobres'],
    description: 'Cuentas de banco, tiendas departamentales o lluvia de sobres.',
    iconName: 'gift',
    enabled: true
  },
  {
    id: 'confirmacion',
    name: 'Confirmación de Asistencia',
    selectedOption: 'Confirmación con personalización + botón a WhatsApp',
    options: [
      'Confirmación con personalización + botón a WhatsApp',
      'Confirmación sin personalización + botón a WhatsApp'
    ],
    description: 'Pases por grupo familiar con cupo exacto de adultos y niños.',
    iconName: 'message',
    enabled: true
  },
  {
    id: 'dress_code',
    name: 'Código de Vestimenta',
    selectedOption: 'Código de vestimenta con guía',
    options: ['Código de vestimenta con guía', 'Omitir código de vestimenta'],
    description: 'Etiqueta rigurosa, formal, cóctel o colores reservados.',
    iconName: 'sparkles',
    enabled: true
  },
  {
    id: 'fotos_invitados',
    name: 'Fotos de Invitados',
    selectedOption: 'Comparte tus fotos del evento',
    options: ['Comparte tus fotos del evento', 'Omitir esta sección'],
    description: 'Código QR o carpeta en la nube para que suban fotos de la fiesta.',
    iconName: 'camera',
    enabled: true
  },
  {
    id: 'agradecimiento',
    name: 'Cierre de Invitación',
    selectedOption: 'Agradecimiento final',
    options: ['Agradecimiento final', 'Omitir agradecimiento'],
    description: 'Mensaje emotivo despidiendo la invitación y bendiciendo a los invitados.',
    iconName: 'heart',
    enabled: true
  }
];

export const InvitationSectionBuilder: React.FC = () => {
  const [sections, setSections] = useState<SectionBlock[]>(DEFAULT_SECTIONS);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const moveUp = (index: number) => {
    if (index === 0) return;
    setSections(prev => {
      const copy = [...prev];
      const temp = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;
    setSections(prev => {
      const copy = [...prev];
      const temp = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const toggleEnable = (id: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const changeOption = (id: string, option: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, selectedOption: option } : s));
  };

  const resetOrder = () => {
    setSections(DEFAULT_SECTIONS);
  };

  const activeSections = sections.filter(s => s.enabled);

  const generateWhatsAppMessage = () => {
    let msg = `*MI ORDEN DE SECCIONES PARA INVITACIÓN TADI*\n\n`;
    msg += `Deseo que mi invitación digital esté estructurada en el siguiente orden:\n\n`;
    
    activeSections.forEach((s, idx) => {
      msg += `${idx + 1}. *${s.name}*: ${s.selectedOption}\n`;
    });

    msg += `\n¿Me pueden confirmar este orden y enviarme el costo/cotización para mi evento?`;
    return `https://wa.me/50236733749?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="orden-secciones" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5 text-amber-700" />
            <span>Personalización Estructural Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            Escoge y Ordena las Secciones de tu Invitación
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Tú decides el flujo exacto de tu tarjeta: desde si quieres sobre con sello o foto directa, hasta la música, el orden de la misa, itinerario y confirmación de WhatsApp.
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          
          {/* Top Bar with actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:px-8 border-b border-stone-200 bg-stone-50">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-stone-900">
                Estructura de la Invitación
              </span>
              <span className="text-xs text-stone-500 font-mono">
                ({activeSections.length} de {sections.length} secciones activas)
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={resetOrder}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-700 hover:text-stone-900 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] hover:border-[#C5A059] rounded-xl transition-all cursor-pointer font-serif shadow-2xs"
              >
                <RotateCcw className="w-3 h-3 text-[#997736]" />
                Orden Sugerido
              </button>

              <div className="flex bg-stone-200 p-0.5 rounded-lg text-xs font-medium lg:hidden">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'editor' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600'
                  }`}
                >
                  Ordenar
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeTab === 'preview' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600'
                  }`}
                >
                  Ver Flujo
                </button>
              </div>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-900 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 border border-[#DFCA85] rounded-xl transition-all shadow-xs font-serif"
              >
                <MessageCircle className="w-3.5 h-3.5 text-stone-900" />
                Pedir con este Orden
              </a>
            </div>
          </div>

          {/* Main Grid: Left Reorder List, Right Flow Diagram / Phone Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
            
            {/* Left Column: Reordering List */}
            <div className={`lg:col-span-7 p-4 sm:p-6 space-y-3 max-h-[750px] overflow-y-auto ${
              activeTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}>
              <p className="text-xs text-stone-500 mb-2">
                Usa las flechas ▲ ▼ para mover una sección arriba o abajo, o cambia la variante específica:
              </p>

              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                    section.enabled
                      ? 'bg-stone-50/90 border-stone-200 hover:border-amber-700/40 shadow-2xs'
                      : 'bg-stone-100/50 border-stone-200 opacity-60'
                  }`}
                >
                  {/* Left: Position index + enable checkbox */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="w-6 text-center font-mono text-xs font-bold text-amber-900 tabular-nums">
                      {section.enabled ? String(activeSections.findIndex(s => s.id === section.id) + 1).padStart(2, '0') : '--'}
                    </span>
                    <input
                      type="checkbox"
                      checked={section.enabled}
                      onChange={() => toggleEnable(section.id)}
                      className="w-4 h-4 accent-amber-700 cursor-pointer rounded"
                      title={section.enabled ? 'Desactivar sección' : 'Activar sección'}
                    />
                  </div>

                  {/* Middle: Name & Option Switcher */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-xs font-bold truncate ${section.enabled ? 'text-stone-900' : 'text-stone-500'}`}>
                        {section.name}
                      </p>
                    </div>

                    {/* Options selector dropdown or radio pill */}
                    {section.options.length > 1 ? (
                      <div className="mt-1">
                        <select
                          value={section.selectedOption}
                          disabled={!section.enabled}
                          onChange={(e) => changeOption(section.id, e.target.value)}
                          className="w-full text-[11px] py-1 px-2 bg-white border border-stone-300 rounded-md text-stone-800 font-medium focus:outline-none focus:border-amber-700 truncate"
                        >
                          {section.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                        {section.selectedOption}
                      </p>
                    )}
                  </div>

                  {/* Right: Up / Down order buttons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-stone-200 border border-stone-200 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                      title="Mover arriba"
                      aria-label="Mover arriba"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      disabled={index === sections.length - 1}
                      className="w-7 h-7 flex items-center justify-center rounded bg-white hover:bg-stone-200 border border-stone-200 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                      title="Mover abajo"
                      aria-label="Mover abajo"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Right Column: Live Visual Flow Representation */}
            <div className={`lg:col-span-5 p-5 sm:p-8 bg-stone-950 text-white flex flex-col justify-between ${
              activeTab === 'editor' ? 'hidden lg:flex' : 'flex'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs font-mono uppercase tracking-widest text-amber-300">
                      Flujo Resultante de tu Invitación
                    </h3>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {activeSections.length} Bloques
                  </span>
                </div>

                <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
                  Así se desplegarán las pantallas de tu invitación según el orden que seleccionaste a la izquierda:
                </p>

                {/* Timeline Visual Cards */}
                <div className="mt-4 space-y-2 max-h-[500px] overflow-y-auto pr-1">
                  {activeSections.map((section, idx) => (
                    <div
                      key={section.id}
                      className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-600/40 transition-colors flex items-center gap-3 text-xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-600/20 text-amber-400 border border-amber-500/40 font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white truncate text-[11px]">{section.name}</p>
                        <p className="text-[10px] text-amber-300/80 truncate font-mono">{section.selectedOption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Call to Action */}
              <div className="pt-6 border-t border-stone-800 mt-4 space-y-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-serif font-bold text-xs tracking-wide shadow-lg transition-all border border-[#DFCA85]"
                >
                  <MessageCircle className="w-4 h-4 text-stone-900" />
                  Enviar este Orden por WhatsApp a TADI
                </a>
                <p className="text-[10px] text-stone-500 text-center">
                  Te confirmamos en minutos la integración exacta para tu evento.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
