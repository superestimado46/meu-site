import React, { useEffect, useState } from 'react';
import { Check, MessageCircle, Star, Users, Rocket, Zap, Trophy } from 'lucide-react';

const prices = {
  basic: { old: 97.90, current: 39.97 },
  premium: { old: 197.90, current: 97.90 },
  ultra: { old: 997.90, current: 497.90 }
};

const calculateDiscount = (oldPrice: number, currentPrice: number) => {
  return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
};

const formatPrice = (value: number) => {
  return value.toFixed(2).replace('.', ',');
};

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const storedEnd = localStorage.getItem("offerEnd");
    let endTime = storedEnd ? parseInt(storedEnd) : Date.now() + 86400000;

    if (!storedEnd) {
      localStorage.setItem("offerEnd", endTime.toString());
    }

    const interval = setInterval(() => {
      const remaining = Math.floor((endTime - Date.now()) / 1000);

      if (remaining <= 0) {
        const newEnd = Date.now() + 86400000;
        localStorage.setItem("offerEnd", newEnd.toString());
        endTime = newEnd;
        setTimeLeft(86400);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <section id="oferta" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Oferta por Tempo Limitado
          </h2>
          <p className="text-red-400 font-bold text-lg">
            ⏳ Essa condição especial termina em:
          </p>
          <div className="text-3xl md:text-4xl font-extrabold text-yellow-400 mt-2 tracking-widest">
            {hours}:{minutes}:{seconds}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          
          {/* --- OFFER 1: BASIC --- */}
          <div className="w-full bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 flex flex-col h-full hover:border-gray-600 transition-colors">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-300">Apenas o Curso</h3>
              <p className="text-sm text-gray-500 mt-2">Para quem quer aprender sozinho</p>
              <div className="mt-4 flex items-baseline flex-wrap gap-y-2">
                <span className="text-sm text-gray-500 line-through mr-2">R$ {formatPrice(prices.basic.old)}</span>
                <span className="text-4xl font-bold text-white">R$ {formatPrice(prices.basic.current)}</span>
                <span className="ml-3 text-xs font-bold text-green-400">
                  {calculateDiscount(prices.basic.old, prices.basic.current)}% OFF
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} />
                <span className="text-sm">Curso Completo Simpsons Cash</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} />
                <span className="text-sm">Acesso Vitalício</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/OBF27819D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-gray-600 text-white font-bold hover:bg-gray-800 transition-colors text-center block"
            >
              Quero apenas o curso
            </a>
          </div>

          {/* --- OFFER 2: PREMIUM --- */}
          <div className="w-full bg-gray-800 rounded-2xl p-6 lg:p-8 border-2 border-yellow-400 flex flex-col transform lg:scale-110 relative z-20 h-full">
            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                 Completo + Comunidade
                 <Star size={20} />
              </h3>
              <p className="text-sm text-gray-400 mt-2">Acelere seus resultados com o grupo</p>
              <div className="mt-4 flex items-baseline flex-wrap gap-y-2">
                <span className="text-sm text-gray-500 line-through mr-2">R$ {formatPrice(prices.premium.old)}</span>
                <span className="text-5xl font-bold text-white">R$ {formatPrice(prices.premium.current)}</span>
                <span className="ml-3 text-xs font-bold text-green-400">
                  {calculateDiscount(prices.premium.old, prices.premium.current)}% OFF
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <Users size={16} />
                <span className="text-sm">Grupo VIP no WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check size={16} />
                <span className="text-sm">Network com outros alunos</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/O33C97F03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-yellow-400 text-black font-extrabold text-lg text-center block"
            >
              <MessageCircle size={20} />
              Quero Acesso + Grupo VIP
            </a>
          </div>

          {/* --- OFFER 3: ULTRA --- */}
          <div className="w-full bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-700 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Kit Acelerador</h3>
              <p className="text-sm text-gray-400 mt-2">Comece já com tudo pronto</p>
              <div className="mt-4 flex items-baseline flex-wrap gap-y-2">
                <span className="text-sm text-gray-500 line-through mr-2">R$ {formatPrice(prices.ultra.old)}</span>
                <span className="text-4xl font-bold text-white">R$ {formatPrice(prices.ultra.current)}</span>
                <span className="ml-3 text-xs font-bold text-green-400">
                  {calculateDiscount(prices.ultra.old, prices.ultra.current)}% OFF
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <Rocket size={16} />
                <span className="text-sm">Conta pronta para monetizar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Star size={16} />
                <span className="text-sm">Suporte Individual VIP</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/O357A9DD7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-center block"
            >
              Quero Conta Monetizada
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
