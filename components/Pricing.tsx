import React from 'react';
import { Check, MessageCircle, Star, Users, Rocket, Zap, Trophy } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-simpson-yellow/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Escolha sua Oferta
          </h2>
          <p className="text-gray-400">Comece hoje a construir sua renda passiva com TikTok.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          
          {/* --- OFFER 1: BASIC (R$ 48,99) --- */}
          <div className="w-full bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 flex flex-col h-full hover:border-gray-600 transition-colors">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-300">Apenas o Curso</h3>
              <p className="text-sm text-gray-500 mt-2">Para quem quer aprender sozinho</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-sm text-gray-500 line-through mr-2">R$ 97,90</span>
                <span className="text-4xl font-bold text-white">R$ 48,99</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm">Curso Completo Simpsons Cash</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Check size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm">Acesso Vitalício</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/OB7281165"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-gray-600 text-white font-bold hover:bg-gray-800 transition-colors text-sm md:text-base text-center block"
            >
              Quero apenas o curso
            </a>
          </div>

          {/* --- OFFER 2: PREMIUM (R$ 197,99) - HIGHLIGHTED --- */}
          <div className="w-full bg-gray-800 rounded-2xl p-6 lg:p-8 border-2 border-simpson-yellow flex flex-col transform lg:scale-110 shadow-[0_0_40px_rgba(255,217,15,0.15)] relative z-20 h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-simpson-yellow text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Mais Vendido
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-simpson-yellow flex items-center gap-2">
                 Completo + Comunidade
                 <Star size={20} fill="currentColor" />
              </h3>
              <p className="text-sm text-gray-400 mt-2">Acelere seus resultados com o grupo</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-sm text-gray-500 line-through mr-2">R$ 297,90</span>
                <span className="text-5xl font-bold text-white">R$ 197,99</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm">Curso Completo Simpsons Cash</span>
              </li>
              <li className="flex items-center gap-3 text-white bg-green-900/30 p-2 rounded-lg -mx-2 border border-green-500/30">
                <div className="bg-green-500 p-1 rounded-full text-black flex-shrink-0"><Users size={14} /></div>
                <span className="font-bold text-green-400 text-sm">BÔNUS: Grupo VIP no WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm">Network com outros alunos</span>
              </li>
               <li className="flex items-center gap-3 text-white">
                <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm">Pack Ferramentas PRO</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/OEC18BB05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-simpson-yellow hover:bg-yellow-300 text-black font-extrabold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-pulse-slow text-center block"
            >
              <MessageCircle size={20} />
              Quero Acesso + Grupo VIP
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">Pagamento 100% Seguro</p>
          </div>

          {/* --- OFFER 3: ULTRA (R$ 498,00) - NEW --- */}
          <div className="w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 lg:p-8 border border-gray-700 flex flex-col h-full relative overflow-hidden group">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-br from-tiktok-cyan to-tiktok-pink opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>
            
            <div className="absolute top-0 right-0 p-3">
               <Trophy className="text-yellow-500" size={24} />
            </div>

             <div className="mb-6 relative z-10">
              <div className="inline-block bg-gradient-to-r from-tiktok-cyan to-tiktok-pink text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                 Alta Demanda
              </div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                 Kit Acelerador
              </h3>
              <p className="text-sm text-gray-400 mt-2">Comece já com tudo pronto</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-sm text-gray-500 line-through mr-2">R$ 997,00</span>
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tiktok-cyan">R$ 498,00</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm">Tudo do plano Comunidade</span>
              </li>
              
              {/* Feature Destaque */}
              <li className="flex gap-3 text-white bg-gray-800 p-3 rounded-lg border border-gray-700">
                <div className="mt-1 bg-tiktok-pink p-1 rounded-full text-white flex-shrink-0 h-fit"><Zap size={14} /></div>
                <div>
                    <span className="font-bold text-white text-sm block">1 CONTA MONETIZADA</span>
                    <span className="text-xs text-gray-400">Pronta pra rodar e faturar</span>
                </div>
              </li>

              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-gray-800 p-1 rounded-full flex-shrink-0"><Rocket size={14} className="text-tiktok-cyan" /></div>
                <span className="text-sm">Pula a fase de validação</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-gray-800 p-1 rounded-full flex-shrink-0"><Star size={14} className="text-yellow-500" /></div>
                <span className="text-sm">Suporte Individual VIP</span>
              </li>
            </ul>

            <a 
              href="https://checkout.ticto.app/O2367133B"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-tiktok-cyan text-tiktok-cyan hover:bg-tiktok-cyan hover:text-black font-bold transition-all relative z-10 text-sm md:text-base text-center block"
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