import React from 'react';
import { Star, Mic, Bot, CheckCircle2 } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      icon: <Star className="text-simpson-yellow" size={32} />,
      title: "CapCut PRO",
      description: "Acesso às funções avançadas: Templates premium, remoção de fundo e efeitos virais.",
      marketPrice: "R$ 49,90/mês",
      shadowColor: "shadow-simpson-yellow/20"
    },
    {
      icon: <Bot className="text-tiktok-cyan" size={32} />,
      title: "ChatGPT Plus",
      description: "Crie roteiros infinitos e estruturas de retenção validadas em segundos com IA 4.0.",
      marketPrice: "R$ 110,00/mês",
      shadowColor: "shadow-tiktok-cyan/20"
    },
    {
      icon: <Mic className="text-tiktok-pink" size={32} />,
      title: "ElevenLabs",
      description: "A melhor IA de voz do mundo. Narrações idênticas a humanos, sem parecer robô.",
      marketPrice: "R$ 150,00/mês",
      shadowColor: "shadow-tiktok-pink/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-simpson-yellow/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block shadow-lg shadow-red-600/20">
            Economia de R$ 309,90/mês
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ferramentas Pagas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpson-yellow to-yellow-200">QUE VOCÊ LEVA DE GRAÇA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Se você fosse assinar essas ferramentas separadamente, pagaria caro. 
            Dentro do método, nós te ensinamos como ter acesso a tudo isso sem custo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="gradient-border bg-gray-900/50 backdrop-blur-sm p-1 flex flex-col h-full group">
              <div className="bg-gray-900 rounded-[14px] p-6 md:p-8 flex flex-col h-full border border-gray-800 group-hover:border-gray-700 transition-colors">
                
                {/* Icon Header */}
                <div className={`w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-xl ${bonus.shadowColor} border border-gray-800`}>
                   {bonus.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                  {bonus.description}
                </p>

                {/* Price Anchor Section */}
                <div className="mt-auto pt-6 border-t border-gray-800">
                  <p className="text-[10px] uppercase font-bold text-gray-500 mb-1 tracking-wider">Valor de mercado:</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 line-through text-sm decoration-red-500/50 decoration-2">
                      {bonus.marketPrice}
                    </span>
                    <div className="flex items-center gap-1.5 bg-green-500/10 px-3 py-1 rounded-lg border border-green-500/20">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span className="text-green-400 font-bold text-sm tracking-wide">GRÁTIS</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-xl mx-auto border border-gray-800 bg-gray-900/50 rounded-full py-2 px-6 inline-block">
               💰 Só com esses bônus você já economiza mais de <span className="text-white font-bold">R$ 3.000,00 por ano</span>.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;