import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, Plus, Send, X, ThumbsUp, Heart } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  event: string;
  location: string;
  date: string;
  rating: number;
  modelUsed: string;
  comment: string;
  highlight: string;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alicia & Jonathan Ruiz',
    event: 'Boda Religiosa',
    location: 'Antigua Guatemala',
    date: 'Febrero 2024',
    rating: 5,
    modelUsed: 'BODA 001 · Tipo Sobre con Solapa',
    highlight: 'El 95% de los invitados confirmó en WhatsApp sin tener que llamar a nadie',
    comment: 'Queríamos algo diferente para nuestra boda en San José el Viejo y el modelo tipo sobre interactivo dejó a todos fascinados. Al abrir el enlace con la música y el botón directo a Waze, nadie se perdió en el empedrado de Antigua.'
  },
  {
    id: 'test-2',
    name: 'Sonia de Ramos (Mamá de Daniela)',
    event: '15 Años',
    location: 'Ciudad de Guatemala, Zona 10',
    date: 'Abril 2024',
    rating: 5,
    modelUsed: '15 AÑOS 003 · Mariposas Holográficas',
    highlight: 'Ahorramos más de Q1,500 en comparación con imprentas tradicionales',
    comment: 'Teníamos 160 invitados pero al agruparlos por familias solo contratamos el paquete de 50 grupos. Cada tía y primo recibió su enlace con su nombre exacto y cantidad de cupos. La atención de TADI en WhatsApp fue inmediata.'
  },
  {
    id: 'test-3',
    name: 'Carlos & Marcela Melgar',
    event: 'Boda de Gala',
    location: 'Carretera a El Salvador',
    date: 'Junio 2024',
    rating: 5,
    modelUsed: 'BODA 005 · Black & Gold Luxury',
    highlight: 'Excelente para incluir el número de cuenta y mesa de regalos',
    comment: 'El diseño nocturno en negro y dorado combinó exactamente con nuestra temática. Poner los datos de transferencia de Banco Industrial de forma tan discreta y elegante facilitó que la mayoría nos enviara su regalo con antelación.'
  },
  {
    id: 'test-4',
    name: 'Lic. Fernando Castillo',
    event: 'Convivio Corporativo',
    location: 'Zona 4, Cuatro Grados Norte',
    date: 'Diciembre 2024',
    rating: 5,
    modelUsed: 'CONVIVIO 001 · Navidad Empresarial',
    highlight: 'Control total de colaboradores con acompañante para la cena',
    comment: 'Para nuestra empresa de 80 colaboradores necesitábamos saber con precisión quiénes llevaban acompañante para el conteo de platos. El formulario y la confirmación por WhatsApp nos ahorraron semanas de correos internos.'
  },
  {
    id: 'test-5',
    name: 'Familia González Buch',
    event: 'Homenaje 80 Años',
    location: 'Mixco, Guatemala',
    date: 'Enero 2025',
    rating: 5,
    modelUsed: 'CUMPLE 004 · Don Agustín Ramos',
    highlight: 'Fácil de usar incluso para los adultos mayores de la familia',
    comment: 'Temíamos que los abuelitos y tíos mayores no supieran cómo abrir la tarjeta, pero fue tan sencillo como tocar un enlace en WhatsApp. Les encantó la marimba de fondo y las fotos familiares que incluimos.'
  },
  {
    id: 'test-6',
    name: 'Valeria Estrada',
    event: '15 Años de Gala',
    location: 'Hotel Casa Veranda, Zona 10',
    date: 'Agosto 2024',
    rating: 5,
    modelUsed: '15 AÑOS 002 · Corona de Princesa',
    highlight: 'El video para mis historias de Instagram y estados fue un éxito total',
    comment: 'Pedí el paquete con el video adicional y lo subí a mis estados de WhatsApp y TikTok. Todos mis amigos de colegio quedaron encantados y confirmaron su pase de inmediato.'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [event, setEvent] = useState('Boda');
  const [location, setLocation] = useState('Guatemala');
  const [rating, setRating] = useState(5);
  const [modelUsed, setModelUsed] = useState('BODA 001');
  const [highlight, setHighlight] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `test-user-${Date.now()}`,
      name: name.trim(),
      event: event.trim(),
      location: location.trim() || 'Guatemala',
      date: 'Reciente',
      rating,
      modelUsed: modelUsed.trim() || 'Diseño Personalizado',
      highlight: highlight.trim() || '¡Excelente experiencia con TADI!',
      comment: comment.trim()
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmittedSuccess(true);
    setShowForm(false);

    // Reset form
    setName('');
    setHighlight('');
    setComment('');

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 6000);
  };

  return (
    <section id="opiniones" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <MessageSquareQuote className="w-4 h-4 text-amber-700" />
            <span>Opiniones & Experiencias Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            Lo que Dicen Quienes Ya Celebraron con TADI
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Cientos de bodas, quinceañeras y eventos familiares han confiado en nuestras invitaciones digitales para sorprender a sus invitados.
          </p>

          {/* Aggregate Trust Bar & Leave Review Action */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
              ))}
            </div>
            <span className="font-semibold text-stone-900">4.9 / 5 Calificación Promedio</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Más de 400 eventos entregados</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-serif font-bold transition-all cursor-pointer shadow-xs border border-[#DFCA85]"
            >
              <Plus className="w-3.5 h-3.5 text-stone-900" />
              <span>{showForm ? 'Cerrar Formulario' : 'Dejar mi Testimonio'}</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {submittedSuccess && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center gap-3 text-emerald-900 text-xs animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="leading-relaxed">
              <strong>¡Muchas gracias por compartir tu experiencia!</strong> Tu reseña ha sido agregada y publicada a continuación.
            </p>
          </div>
        )}

        {/* Form to Submit Testimonial */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-stone-50 border border-stone-300 rounded-3xl p-6 sm:p-8 shadow-sm animate-in fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800">Tu opinión nos ayuda a crecer</span>
                <h3 className="font-serif text-xl font-bold text-stone-900">Comparte tu Experiencia con TADI</h3>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="p-1.5 text-stone-400 hover:text-stone-600 rounded-lg hover:bg-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-stone-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-stone-800 block mb-1">Nombre o Nombres de la Pareja / Familia *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofía & David Martínez"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-800 block mb-1">Tipo de Evento *</label>
                  <select
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700"
                  >
                    <option value="Boda Religiosa">Boda Religiosa</option>
                    <option value="Boda Civil">Boda Civil</option>
                    <option value="15 Años (Quinceañera)">15 Años (Quinceañera)</option>
                    <option value="Cumpleaños Adulto">Cumpleaños Adulto</option>
                    <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                    <option value="Convivio Corporativo">Convivio Corporativo</option>
                    <option value="Primera Comunión / Bautizo">Primera Comunión / Bautizo</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-semibold text-stone-800 block mb-1">Lugar / Ciudad *</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. Antigua Guatemala"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-800 block mb-1">Modelo Utilizado</label>
                  <input
                    type="text"
                    value={modelUsed}
                    onChange={(e) => setModelUsed(e.target.value)}
                    placeholder="Ej. BODA 001, 15 AÑOS 002"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-800 block mb-1">Calificación en Estrellas</label>
                  <div className="flex items-center gap-1 py-1.5">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        type="button"
                        key={starVal}
                        onClick={() => setRating(starVal)}
                        className="cursor-pointer"
                        title={`${starVal} estrellas`}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            starVal <= rating
                              ? 'fill-amber-400 stroke-amber-500'
                              : 'stroke-stone-300 fill-stone-100'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="font-mono text-xs text-stone-600 ml-1.5">({rating}/5)</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-800 block mb-1">Título de Resumen / Frase Destacada *</label>
                <input
                  type="text"
                  required
                  value={highlight}
                  onChange={(e) => setHighlight(e.target.value)}
                  placeholder="Ej. Los invitados quedaron fascinados con la música y el mapa"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-800 block mb-1">Tu Reseña Completa *</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Cuéntanos cómo fue el proceso, la atención recibida y qué tal respondieron tus invitados a la invitación..."
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-700 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-stone-700 hover:text-stone-900 bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E4D9C8] rounded-xl font-serif"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-serif font-bold rounded-xl flex items-center gap-2 shadow-sm cursor-pointer border border-[#DFCA85]"
                >
                  <Send className="w-3.5 h-3.5 text-stone-900" />
                  Publicar Testimonio
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/90 hover:border-amber-700/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Star rating & Model used */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded font-medium">
                    {t.modelUsed.split('·')[0].trim()}
                  </span>
                </div>

                {/* Highlight Callout */}
                <p className="text-xs font-semibold text-stone-900 leading-snug">
                  "{t.highlight}"
                </p>

                {/* Main Review Text */}
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {t.comment}
                </p>
              </div>

              {/* Author & Event Context */}
              <div className="pt-4 border-t border-stone-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-stone-900">{t.name}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                      <span>{t.event}</span>
                      <span aria-hidden="true">·</span>
                      <span>{t.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verificado</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
