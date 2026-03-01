import React from 'react';
import { X, Check, Smartphone, Clock, Brain } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            <span className="text-simpson-yellow">TikTok Dark 2.0:</span> Os Simpsons viraram uma máquina de dinheiro
          </h2>
          <p className="text-gray-300 text-lg">
            Enquanto todo mundo tenta dançar, aparecer ou vender curso complicado… 
            Tem gente postando cortes simples dos Simpsons e ganhando dinheiro todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Old Way */}
          <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <X size={28} />
              Você NÃO precisa
            </h3>
            <ul className="space-y-4">
              {['Aparecer', 'Criar personagem', 'Inventar história', 'Gastar com anúncio'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-400">
                  <div className="min-w-[24px] h-6 rounded-full bg-red-900/50 flex items-center justify-center">
                    <X size={14} className="text-red-400" />
                  </div>
                  <span className="text-lg line-through decoration-red-500/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The New Way */}
          <div className="bg-green-950/20 border border-green-900/50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 blur-[50px] opacity-20"></div>
            <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center gap-2">
              <Check size={28} />
              Você SÓ precisa
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-green-400">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Um celular</h4>
                  <p className="text-sm text-gray-400">Qualquer modelo funciona</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-green-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Poucos minutos</h4>
                  <p className="text-sm text-gray-400">Edição rápida e prática</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-green-400">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">O método certo</h4>
                  <p className="text-sm text-gray-400">Simpsons Cash</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-2">Por que funciona?</h3>
          <p className="text-gray-300">
            Porque o TikTok <span className="text-simpson-yellow font-bold">AMA retenção</span>. 
            E poucas coisas seguram mais atenção do que Simpsons.
            Aqui, você usa conteúdo que já nasce viral.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;