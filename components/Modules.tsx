import React from 'react';
import { BookOpen, Video, DollarSign, TrendingUp, Scissors } from 'lucide-react';

const Modules: React.FC = () => {
  const modules = [
    {
      icon: <BookOpen className="text-simpson-yellow" size={32} />,
      title: "Curso Completo",
      items: [
        "Como criar contas do zero",
        "Onde encontrar episódios e cenas que viralizam",
        "Como cortar vídeos que prendem atenção",
        "Como postar sem tomar shadowban"
      ]
    },
    {
      icon: <DollarSign className="text-green-400" size={32} />,
      title: "Método 'Postou, Monetizou'",
      items: [
        "Programas de monetização do TikTok",
        "Estratégias de Afiliados",
        "Tráfego indireto",
        "Mesmo com conta pequena"
      ]
    },
    {
      icon: <Scissors className="text-tiktok-pink" size={32} />,
      title: "Edição Ridiculamente Simples",
      items: [
        "CapCut Essencial",
        "Templates prontos",
        "Cortes estratégicos",
        "Conteúdo Dark: Você não aparece"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Tudo o que você vai <span className="text-simpson-yellow">aprender</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors border border-gray-700 hover:border-simpson-yellow/50">
              <div className="mb-6 bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center border border-gray-700">
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-simpson-yellow flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;