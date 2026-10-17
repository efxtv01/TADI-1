import React from 'react';
import { MessageCircle, MapPin, Music, Sparkles, Gift, Smartphone, Clock, ShieldCheck } from 'lucide-react';

export const FeaturesShowcase: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Confirmación Directa a WhatsApp',
      desc: 'Tus invitados confirman con un solo toque. Recibes el mensaje exacto con nombres y cantidad de adultos y niños sin confusiones.'
    },
    {
      icon: MapPin,
      title: 'Geolocalización en Waze & Maps',
      desc: 'Botones directos para abrir la ruta en Waze o Google Maps hacia la iglesia y la recepción sin que nadie se pierda en el camino.'
    },
    {
      icon: Music,
      title: 'Música de Fondo Personalizada',
      desc: 'Tu canción favorita ambienta la lectura de la invitación, creando un momento emotivo y mágico para cada receptor.'
    },
    {
      icon: Sparkles,
      title: 'Efecto Sobre Virtual con Sello',
      desc: 'Apertura interactiva tipo sobre de gala con sello dorado o cera digital que desvela la tarjeta con elegancia.'
    },
    {
      icon: Gift,
      title: 'Mesa de Regalos & Lluvia de Sobres',
      desc: 'Comparte tu número de cuenta bancaria (Banrural, BI, G&T) o lista de tiendas de manera sutil y elegante.'
    },
    {
      icon: Clock,
      title: 'Cuenta Regresiva en Tiempo Real',
      desc: 'Un cronómetro dinámico en segundos, minutos y días que genera expectativa y emoción por tu gran celebración.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <span>Experiencia Interactiva Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            Todo lo que una Invitación Tradicional en Papel No Puede Hacer
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Modernidad, comodidad para tus invitados y control absoluto para los anfitriones desde cualquier smartphone o computadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
