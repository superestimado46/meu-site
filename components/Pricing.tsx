import React from "react";
import { Check, MessageCircle, Star, Users, Rocket, Zap } from "lucide-react";

const prices = {
  basic: { old: 97.9, current: 39.97 },
  premium: { old: 197.9, current: 97.9 },
  ultra: { old: 997.9, current: 497.9 },
};

const calculateDiscount = (oldPrice: number, currentPrice: number) => {
  return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
};

const formatPrice = (value: number) => {
  return value.toFixed(2).replace(".", ",");
};

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-black relative overflow-hidden">

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">

          {/* PLANO 1 */}

          <div className="pricing-card bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-800 rounded-2xl p-8 flex flex-col">

            <h3 className="text-xl font-bold text-gray-200">
              Apenas o Curso
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Para quem quer aprender sozinho
            </p>

            <div className="mt-6">

              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.basic.old)}
              </p>

              <p className="text-4xl font-bold text-white mt-1">
                R$ {formatPrice(prices.basic.current)}
              </p>

            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-300">

              <li className="flex items-center gap-3">
                <Check size={18} />
                Curso Completo Simpsons Cash
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Acesso Vitalício
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/OBF27819D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-gray-600 text-white text-center py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Quero apenas o curso
            </a>

          </div>

          {/* PLANO 2 */}

          <div className="pricing-card relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-yellow-400 rounded-2xl p-8 flex flex-col scale-105">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
              MAIS VENDIDO
            </div>

            <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
              Completo + Comunidade
              <Star size={20} fill="currentColor" />
            </h3>

            <p className="text-gray-400 mt-2">
              Acelere seus resultados com o grupo
            </p>

            <div className="mt-6">

              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.premium.old)}
              </p>

              <p className="text-5xl font-bold text-white mt-1">
                R$ {formatPrice(prices.premium.current)}
              </p>

            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-200">

              <li className="flex items-center gap-3">
                <Users size={18} />
                Curso Completo Simpsons Cash
              </li>

              <li className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg">
                <Users size={18} className="text-green-400" />
                <span className="text-green-400 font-bold">
                  BÔNUS: Grupo VIP no WhatsApp
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Network com outros alunos
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Pack Ferramentas PRO
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/O33C97F03"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-yellow-400 text-black font-bold text-center py-4 rounded-xl hover:bg-yellow-300 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Quero Acesso + Grupo VIP
            </a>

          </div>

          {/* PLANO 3 */}

          <div className="pricing-card bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#3b0a1a] border border-gray-700 rounded-2xl p-8 flex flex-col">

            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 text-xs font-bold px-3 py-1 rounded-full w-fit">
              ALTA DEMANDA
            </div>

            <h3 className="text-2xl font-bold text-cyan-300 mt-3">
              Kit Acelerador
            </h3>

            <p className="text-gray-400">
              Comece já com tudo pronto
            </p>

            <div className="mt-6">

              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.ultra.old)}
              </p>

              <p className="text-5xl font-bold text-cyan-300 mt-1">
                R$ {formatPrice(prices.ultra.current)}
              </p>

            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-200">

              <li className="flex items-center gap-3">
                <Check size={18} />
                Tudo do plano Comunidade
              </li>

              <li className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-lg">
                <Zap size={18} className="text-pink-400" />
                <div>
                  <p className="font-bold">
                    1 CONTA MONETIZADA
                  </p>
                  <p className="text-xs text-gray-400">
                    Pronta pra rodar e faturar
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Rocket size={18} />
                Pula a fase de validação
              </li>

              <li className="flex items-center gap-3">
                <Star size={18} />
                Suporte Individual VIP
              </li>

            </ul>

            <a
              href="https://checkout.ticto.app/O357A9DD7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-cyan-400 text-cyan-300 text-center py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              Quero Conta Monetizada
            </a>

          </div>

        </div>

      </div>

      <style>{`

      .pricing-card{
        transition: all 0.35s ease;
      }

      .pricing-card:hover{
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 50px rgba(0,0,0,0.6);
      }

      `}</style>

    </section>
  );
};

export default Pricing;
