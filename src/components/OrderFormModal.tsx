import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, Clock, MapPin, Music, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { InvitationItem } from '../data/catalogData';

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetItem?: InvitationItem | null;
}

export const OrderFormModal: React.FC<OrderFormModalProps> = ({
  isOpen,
  onClose,
  presetItem
}) => {
  const [eventType, setEventType] = useState('Boda');
  const [modelCode, setModelCode] = useState('');
  const [honoreesNames, setHonoreesNames] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [ceremonyPlace, setCeremonyPlace] = useState('');
  const [receptionPlace, setReceptionPlace] = useState('');
  const [dressCode, setDressCode] = useState('Formal');
  const [songName, setSongName] = useState('');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [estimatedGroups, setEstimatedGroups] = useState('1 a 50 grupos (Q375)');
  const [giftRegistry, setGiftRegistry] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (presetItem) {
      setModelCode(presetItem.code);
      if (presetItem.category === 'bodas') setEventType('Boda');
      else if (presetItem.category === '15-anos') setEventType('15 Años');
      else if (presetItem.category === 'cumpleanos') setEventType('Cumpleaños');
      else setEventType('Corporativo / Varias');
    }
  }, [presetItem]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*DATOS PARA MI INVITACIÓN DIGITAL TADI*\n\n`;
    message += `• *Tipo de Evento:* ${eventType}\n`;
    message += `• *Modelo Elegido:* ${modelCode || 'Por definir con asesor'}\n`;
    message += `• *Festejado(s) / Novios:* ${honoreesNames}\n`;
    message += `• *Fecha:* ${eventDate}\n`;
    message += `• *Hora:* ${eventTime}\n`;
    if (ceremonyPlace) message += `• *Lugar Ceremonia:* ${ceremonyPlace}\n`;
    if (receptionPlace) message += `• *Lugar Recepción:* ${receptionPlace}\n`;
    message += `• *Código de Vestimenta:* ${dressCode}\n`;
    if (songName) message += `• *Canción Deseada:* ${songName}\n`;
    message += `• *WhatsApp para Confirmaciones:* ${whatsappPhone}\n`;
    message += `• *Paquete / Grupos:* ${estimatedGroups}\n`;
    if (giftRegistry) message += `• *Mesa de Regalos / Cuenta:* ${giftRegistry}\n`;
    if (additionalNotes) message += `• *Notas Especiales:* ${additionalNotes}\n`;

    const whatsappUrl = `https://wa.me/50236733749?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800">
              Formulario Oficial de Información
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Datos para Realizar tu Invitación
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-stone-900">¡Información Lista!</h4>
            <p className="text-xs text-stone-600 max-w-md mx-auto">
              Hemos abierto tu chat de WhatsApp con TADI para enviar los detalles de tu evento. Nuestro equipo de TADI se pondrá en contacto contigo para coordinar la muestra previa.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="px-5 py-2.5 text-xs font-semibold bg-[#FAF7F2] hover:bg-[#F3EDE2] text-stone-800 border border-[#E4D9C8] rounded-xl font-serif"
              >
                Cerrar Formulario
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-xs text-stone-800">
            <p className="text-stone-500 text-[11px] leading-relaxed">
              Llena los campos a continuación para preparar tu invitación personalizada. No te preocupes si te falta algún detalle; podremos afinarlo directamente por WhatsApp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Tipo de Evento *</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                  required
                >
                  <option value="Boda">Boda</option>
                  <option value="15 Años">15 Años (Quinceañera)</option>
                  <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                  <option value="Cumpleaños Adulto / Jubileo">Cumpleaños Adulto / Jubileo</option>
                  <option value="Primera Comunión / Bautizo">Primera Comunión / Bautizo</option>
                  <option value="Baby Shower / Revelación">Baby Shower / Revelación</option>
                  <option value="Corporativo / Convivio">Corporativo / Convivio</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Código del Modelo Deseado</label>
                <input
                  type="text"
                  value={modelCode}
                  onChange={(e) => setModelCode(e.target.value)}
                  placeholder="Ej. BODA 001, 15 AÑOS 002"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">
                Nombre(s) de los Festejados o Novios *
              </label>
              <input
                type="text"
                value={honoreesNames}
                onChange={(e) => setHonoreesNames(e.target.value)}
                placeholder="Ej. Jonathan Ruiz & Alicia Morales"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Fecha del Evento *</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Hora de Inicio *</label>
                <input
                  type="text"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  placeholder="Ej. 4:00 PM"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Lugar de Ceremonia / Iglesia</label>
                <input
                  type="text"
                  value={ceremonyPlace}
                  onChange={(e) => setCeremonyPlace(e.target.value)}
                  placeholder="Ej. Iglesia San José el Viejo, Antigua"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Lugar de Recepción / Fiesta *</label>
                <input
                  type="text"
                  value={receptionPlace}
                  onChange={(e) => setReceptionPlace(e.target.value)}
                  placeholder="Ej. Hotel Casa Santo Domingo, Salón Mayor"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Código de Vestimenta</label>
                <input
                  type="text"
                  value={dressCode}
                  onChange={(e) => setDressCode(e.target.value)}
                  placeholder="Ej. Rigurosa Etiqueta / Traje Formal / Guayabera"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Canción para la Música de Fondo</label>
                <input
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="Ej. A Thousand Years - Christina Perri (Instrumental)"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Tu WhatsApp para Recibir Confirmaciones *
                </label>
                <input
                  type="tel"
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  placeholder="Ej. 502 4433-2211"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Paquete Estimado</label>
                <select
                  value={estimatedGroups}
                  onChange={(e) => setEstimatedGroups(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
                >
                  <option value="1 a 25 grupos (Q300)">1 a 25 grupos (Q300)</option>
                  <option value="1 a 50 grupos (Q375)">1 a 50 grupos (Q375) - Recomendado</option>
                  <option value="1 a 100 grupos (Q425)">1 a 100 grupos (Q425)</option>
                  <option value="1 a 150 grupos (Q500)">1 a 150 grupos (Q500)</option>
                  <option value="Opción Económica Libre">Opción Libre sin nombres (Q50 extra por sobres)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">
                Mesa de Regalos o Cuenta Bancaria
              </label>
              <input
                type="text"
                value={giftRegistry}
                onChange={(e) => setGiftRegistry(e.target.value)}
                placeholder="Ej. Lluvia de sobres / Banco Industrial Monetarios 045-XXXXXX / Siman"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Notas Adicionales o Dedicatoria</label>
              <textarea
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                rows={2}
                placeholder="Versículo bíblico, frase especial o instrucciones de no niños / hospedaje..."
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
              />
            </div>

            <div className="pt-3 border-t border-stone-200">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-serif font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#DFCA85]"
              >
                <Send className="w-3.5 h-3.5 text-stone-900" />
                Enviar Información por WhatsApp a TADI (+502 3673-3749)
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
