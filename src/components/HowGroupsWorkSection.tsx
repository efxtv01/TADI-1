import React, { useState } from 'react';
import { Users, CheckCircle, Calculator, Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const HowGroupsWorkSection: React.FC = () => {
  const [totalGuestsInput, setTotalGuestsInput] = useState<number>(120);

  // Average 2.8 people per family group
  const estimatedGroups = Math.max(5, Math.ceil(totalGuestsInput / 2.7));

  let recommendedPackage = '1 a 25 grupos (Q300)';
  let priceQ = 300;
  if (estimatedGroups > 100) {
    recommendedPackage = '1 a 150 grupos (Q500)';
    priceQ = 500;
  } else if (estimatedGroups > 50) {
    recommendedPackage = '1 a 100 grupos (Q425)';
    priceQ = 425;
  } else if (estimatedGroups > 25) {
    recommendedPackage = '1 a 50 grupos (Q375)';
    priceQ = 375;
  }

  const paperTraditionalCost = totalGuestsInput * 12; // Typical physical invitation set cost in Guatemala
  const savings = Math.max(0, paperTraditionalCost - priceQ);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>El Método Inteligente TADI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
            ¿Por qué se cuenta por Grupos y no por Persona Individual?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            No necesitas pagar una invitación para cada ser humano que asista. En TADI organizamos tus invitados en núcleos familiares o parejas, ahorrándote cientos de quetzales.
          </p>
        </div>

        {/* 3 Steps / Example Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-lg font-bold">
              01
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              Un Pase por Familia
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Ejemplo: La <strong>Familia Pérez Sosa</strong> tiene 3 adultos y 2 menores (5 personas). En papel tradicional necesitarías varios sobres; con TADI es <strong>1 solo enlace personalizado</strong> con cupo exacto de 5.
            </p>
            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs font-mono text-stone-700">
              Pase: Familia Pérez Sosa (3 adultos, 2 niños)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-lg font-bold">
              02
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              Parejas, Amigos y Personas Solas
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Para compañeros de trabajo, parejas o invitados individuales: se asigna un enlace por grupo. <strong>Aclaración importante: También una persona sola conforma un grupo individual en caso no tenga pareja.</strong>
            </p>
            <div className="space-y-1.5">
              <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs font-mono text-stone-700">
                Pase: Pareja López (2 adultos)
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-amber-200 bg-amber-50/50 text-xs font-mono text-stone-800">
                Pase: Carlos Mendoza (1 persona sola / individual)
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-lg font-bold">
              03
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              Ahorro de hasta 70%
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Un evento de 150 personas suele tener entre 40 y 50 grupos familiares. Por eso pagas únicamente el paquete de <strong>1 a 50 grupos (Q375)</strong> en vez de 150 invitaciones impresas.
            </p>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs font-semibold text-emerald-800">
              ✓ Control de cupo garantizado sin desperdicio
            </div>
          </div>

        </div>

        {/* Captura Visual de Ejemplo: Cómo se arman los grupos */}
        <div className="mb-16 bg-[#FAF7F2] border border-[#E4D9C8] rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold block mb-1">
              Guía Visual para tu Lista de Invitados
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Captura de Ejemplo: ¿Cómo se arman los grupos para enviar a TADI?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              Al momento de prepararnos tu lista por WhatsApp o documento, los agrupas de esta manera sencilla. <strong>Ten en cuenta que también una persona sola conforma un grupo individual en caso no tenga pareja.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Capture Card simulating a formatted guest list */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-stone-500 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-stone-700">Ejemplo de Lista por Grupos</span>
                </div>
                <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Total: 5 Grupos (13 personas)
                </span>
              </div>

              <div className="space-y-2 text-stone-700">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900">1. Familia Morales Pérez</span>
                    <span className="block text-[11px] text-stone-500">Papá, mamá y 2 hijos</span>
                  </div>
                  <span className="font-bold text-amber-800 bg-amber-100/70 px-2 py-1 rounded text-[11px]">
                    4 Pases (1 grupo)
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900">2. Pareja Lic. Gómez & Esposa</span>
                    <span className="block text-[11px] text-stone-500">Matrimonio o novios</span>
                  </div>
                  <span className="font-bold text-amber-800 bg-amber-100/70 px-2 py-1 rounded text-[11px]">
                    2 Pases (1 grupo)
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-300 flex items-center justify-between ring-1 ring-amber-400/40">
                  <div>
                    <span className="font-bold text-amber-950">3. Ing. Carlos Mendoza</span>
                    <span className="block text-[11px] text-amber-800 font-semibold">
                      ★ Persona sola (asiste sin pareja)
                    </span>
                  </div>
                  <span className="font-bold text-amber-900 bg-amber-200/80 px-2 py-1 rounded text-[11px]">
                    1 Pase (1 grupo individual)
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900">4. Familia Rodas Estrada</span>
                    <span className="block text-[11px] text-stone-500">Familia con 3 integrantes</span>
                  </div>
                  <span className="font-bold text-amber-800 bg-amber-100/70 px-2 py-1 rounded text-[11px]">
                    3 Pases (1 grupo)
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-300 flex items-center justify-between ring-1 ring-amber-400/40">
                  <div>
                    <span className="font-bold text-amber-950">5. Licda. Sofía Castillo</span>
                    <span className="block text-[11px] text-amber-800 font-semibold">
                      ★ Persona sola (invitación personal)
                    </span>
                  </div>
                  <span className="font-bold text-amber-900 bg-amber-200/80 px-2 py-1 rounded text-[11px]">
                    1 Pase (1 grupo individual)
                  </span>
                </div>
              </div>
            </div>

            {/* Explanatory Callout Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-amber-800 font-serif font-bold text-base">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                  Regla de Grupos Individuales
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Aclaración fundamental:</strong> Una persona sola conforma un grupo individual en caso no tenga pareja.
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Cada grupo contratado recibe su propio link único personalizado donde verá su nombre exacto y la cantidad de cupos asignados (sean 5 pases, 2 pases o 1 pase individual).
                </p>
                <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-emerald-800 flex items-center gap-1.5 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Sin desperdiciar impresiones ni pagar de más
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-100/60 border border-amber-300 text-amber-950 text-xs">
                <p className="font-semibold mb-1 font-serif text-sm">¿Cómo enviarla a TADI?</p>
                <p className="text-[11px] leading-relaxed text-stone-700">
                  Simplemente escribe tu lista en un mensaje de WhatsApp o en una nota con el nombre del grupo y la cantidad de pases al lado. Nuestro equipo se encarga de programar cada enlace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Savings Calculator Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white shadow-xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Calculadora Rápida de Ahorro</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Simula tu evento en segundos
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                Mueve el número total de invitados para ver cuántos grupos familiares necesitas aproximadamente y cuál paquete TADI te conviene:
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-stone-300">
                  <span>Total estimado de personas:</span>
                  <span className="text-amber-300 font-mono text-sm tabular-nums font-bold">{totalGuestsInput} invitados</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="10"
                  value={totalGuestsInput}
                  onChange={(e) => setTotalGuestsInput(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-700 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>20 personas</span>
                  <span>150 personas</span>
                  <span>350 personas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950/70 border border-stone-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs text-stone-400">Grupos familiares estimados:</span>
                <span className="font-serif text-lg font-bold text-amber-300 tabular-nums">~{estimatedGroups} grupos</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs text-stone-400">Paquete TADI recomendado:</span>
                <span className="text-xs font-bold text-white bg-amber-600/30 px-2 py-1 rounded border border-amber-500/30">
                  {recommendedPackage}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400">Inversión con TADI:</span>
                <span className="font-serif text-2xl font-bold text-[#D4AF37] tabular-nums">Q{priceQ}.00</span>
              </div>

              <p className="text-[11px] text-stone-400 leading-normal italic">
                *Incluye enlaces personalizados por grupo, confirmación directa por WhatsApp, GPS en Waze y música de fondo.
              </p>

              <a
                href={`https://wa.me/50236733749?text=Hola%20TADI,%20tengo%20un%20evento%20para%20aproximadamente%20${totalGuestsInput}%20personas%20(${estimatedGroups}%20grupos)%20y%20deseo%20cotizar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#BFA15F] hover:brightness-105 text-stone-900 font-serif font-bold text-xs transition-all shadow-md cursor-pointer border border-[#DFCA85]"
              >
                Cotizar este Paquete por WhatsApp &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
