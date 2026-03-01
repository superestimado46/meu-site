import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SCROLL_TO_OFFER } from '../constants';

const Summary: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
         
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 opacity-90 select-none">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-500">POSTOU</h2>
            <ArrowRight className="hidden md:block text-simpson-yellow" size={32} />
            <ArrowRight className="md:hidden text-simpson-yellow rotate-90" size={32} />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">MONETIZOU</h2>
             <ArrowRight className="hidden md:block text-simpson-yellow" size={32} />
            <ArrowRight className="md:hidden text-simpson-yellow rotate-90" size={32} />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-tiktok-cyan">LUCROU</h2>
         </div>

         <div className="max-w-xl mx-auto space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
                Se você chegou até aqui, já entendeu.<br/>
                Ou você continua só assistindo TikTok… <span className="text-white font-bold">ou começa a ganhar dinheiro com ele.</span>
            </p>

            <button 
                onClick={SCROLL_TO_OFFER}
                className="w-full px-8 py-5 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all flex items-center justify-center gap-3 transform hover:scale-105"
            >
                QUERO FAZER PARTE AGORA
                <ArrowRight />
            </button>
         </div>
      </div>
    </section>
  );
};

export default Summary;