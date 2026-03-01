import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto border border-gray-700">
          <div className="flex-shrink-0">
             <ShieldCheck size={100} className="text-simpson-yellow" strokeWidth={1} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Garantia Total de 7 Dias</h3>
            <p className="text-gray-300 mb-6">
              Você tem 7 dias para testar. Se não fizer sentido pra você, se achar simples demais, ou se não quiser continuar… 
              <span className="text-white font-bold"> devolvemos 100% do valor.</span>
            </p>
            <p className="text-sm text-gray-500">Sem perguntas. Sem burocracia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;