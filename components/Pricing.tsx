import React from 'react';
import { Check, MessageCircle, Star, Users, Rocket } from 'lucide-react';

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

  return (
    <section id="oferta" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Oferta especial disponível agora
          </h2>
          <p className="text-gray-300 text-lg">
            Escolha o plano ideal para você abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">

          {/* BASIC */}
          <div className="w-full bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 flex flex-col h-full">

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-300">
                Apenas o Curso
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Para quem quer aprender sozinho
              </p>

              <div className="mt-4 flex items-baseline gap-2 flex-wrap">

                <span className="text-sm text-gray-500 line-through">
                  R$ {formatPrice(prices.basic.old)}
                </span>

                <span className="text-4xl font-bold text-white">
                  R$ {formatPrice(prices.basic.current)}
                </span>

                <span className="text-xs font-bold text-green-400">
                  {calculateDiscount(prices.basic.old, prices.basic.current)}% OFF
                </span>

              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">

              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} />
                Curso Completo Simpsons Cash
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} />
                Acesso Vitalício
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/OBF27819D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-gray-600 text-white font-bold hover:bg-gray-800 text-center"
            >
              Quero apenas o curso
            </a>

          </div>

          {/* PREMIUM */}
          <div className="w-full bg-gray-800 rounded-2xl p-6 lg:p-8 border-2 border-yellow-400 flex flex-col transform lg:scale-110 relative overflow-hidden">

            {/* BORDA ANIMADA */}
            <div className="absolute inset-0 premium-border pointer-events-none"></div>

            {/* ESTRELA */}
            <div className="absolute -top-3 -left-3 z-30">
              <div className="premium-star w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                ★
              </div>
            </div>

            <div className="mb-6 relative z-10">

              <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
                Completo + Comunidade
                <Star size={20} fill="currentColor"/>
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Acelere seus resultados com o grupo
              </p>

              <div className="mt-4 flex items-baseline gap-2 flex-wrap">

                <span className="text-sm text-gray-500 line-through">
                  R$ {formatPrice(prices.premium.old)}
                </span>

                <span className="text-5xl font-bold text-white">
                  R$ {formatPrice(prices.premium.current)}
                </span>

                <span className="text-xs font-bold text-green-400">
                  {calculateDiscount(prices.premium.old, prices.premium.current)}% OFF
                </span>

              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1 relative z-10">

              <li className="flex items-center gap-3 text-white">
                <Users size={16}/>
                Grupo VIP no WhatsApp
              </li>

              <li className="flex items-center gap-3 text-white">
                <Check size={16}/>
                Network com outros alunos
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/O33C97F03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center relative z-10"
            >
              <MessageCircle size={20}/>
              Quero Acesso + Grupo VIP
            </a>

          </div>

          {/* ULTRA */}
          <div className="w-full bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-700 flex flex-col h-full">

            <div className="mb-6">

              <h3 className="text-xl font-bold text-white">
                Kit Acelerador
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Comece já com tudo pronto
              </p>

              <div className="mt-4 flex items-baseline gap-2 flex-wrap">

                <span className="text-sm text-gray-500 line-through">
                  R$ {formatPrice(prices.ultra.old)}
                </span>

                <span className="text-4xl font-bold text-white">
                  R$ {formatPrice(prices.ultra.current)}
                </span>

                <span className="text-xs font-bold text-green-400">
                  {calculateDiscount(prices.ultra.old, prices.ultra.current)}% OFF
                </span>

              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">

              <li className="flex items-center gap-3 text-gray-300">
                <Rocket size={16}/>
                Conta pronta para monetizar
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <Star size={16}/>
                Suporte Individual VIP
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/O357A9DD7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black font-bold text-center"
            >
              Quero Conta Monetizada
            </a>

          </div>

        </div>

      </div>

      <style>{`

      .premium-border{
        border-radius:16px;
        padding:2px;
        background:linear-gradient(270deg,#ffcc00,#00ffff,#ff00ff,#00ff88,#ffcc00);
        background-size:600% 600%;
        animation:borderFlow 6s ease infinite;
        mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
        mask-composite:exclude;
      }

      .premium-star{
        font-size:18px;
        font-weight:bold;
        color:white;
        background:linear-gradient(270deg,#ffcc00,#00ffff,#ff00ff,#00ff88,#ffcc00);
        background-size:600% 600%;
        animation:starFlow 6s ease infinite;
      }

      @keyframes borderFlow{
        0%{background-position:0% 50%;}
        50%{background-position:100% 50%;}
        100%{background-position:0% 50%;}
      }

      @keyframes starFlow{
        0%{background-position:0% 50%;}
        50%{background-position:100% 50%;}
        100%{background-position:0% 50%;}
      }

      `}</style>

    </section>
  );
};

export default Pricing;
