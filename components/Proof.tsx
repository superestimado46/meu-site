import React from 'react';
import { IMAGES } from '../constants';

const Proof: React.FC = () => {
  // Using the images from constants
  const screenshots = [
    { src: IMAGES.proof1, alt: "Resultado Aluno 1", caption: "Faturamento Recente" },
    { src: IMAGES.proof2, alt: "Resultado Aluno 2", caption: "Crescimento Constante" },
    { src: IMAGES.proof3, alt: "Resultado Aluno 3", caption: "Escalando Resultados" },
    { src: IMAGES.proof4, alt: "Resultado Aluno 4", caption: "Consistência" },
  ];

  return (
    <section className="py-20 bg-tiktok-black relative">
       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
       
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            Resultados <span className="text-tiktok-cyan">Reais</span>
          </h2>
          <p className="text-gray-400">Pessoas comuns fazendo renda extra apenas postando cortes.</p>
        </div>

        {/* 
            Refatoração do Grid:
            - Mobile e Tablet: grid-cols-2 (2 colunas para melhor visualização vertical)
            - Desktop: lg:grid-cols-4 (4 colunas alinhadas)
            - Gap: Ajustado para gap-4 (mobile) até gap-8 (desktop) para um respiro visual melhor
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {screenshots.map((shot, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900 hover:border-tiktok-cyan transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,242,234,0.15)]">
              <div className="aspect-[9/16] relative bg-gray-800 overflow-hidden">
                <img 
                  src={shot.src} 
                  alt={shot.alt} 
                  className={`w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-300 ${index === 1 ? 'scale-125' : ''}`}
                />
                {/* Improved gradient overlay to ensure text is readable without obscuring the image too much */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-3 left-3 right-3">
                    <div className="h-0.5 w-8 bg-tiktok-cyan mb-2"></div>
                    <p className="text-white font-heading font-bold text-sm md:text-lg leading-tight drop-shadow-md">{shot.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-sm text-gray-500 italic">*Resultados variam de acordo com a dedicação e aplicação do método.</p>
        </div>
      </div>
    </section>
  );
};

export default Proof;