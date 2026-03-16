import React, { useState } from 'react';
import { DollarSign, ArrowRight, CheckCircle, Volume2 } from 'lucide-react';
import { SCROLL_TO_OFFER } from '../constants';

const Hero: React.FC = () => {
  const [muted, setMuted] = useState(true);

  const handleSound = () => {
    setMuted(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tiktok-black to-gray-900 pt-6 pb-14 lg:pt-14 lg:pb-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center gap-10">

          {/* TITULO VSL */}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center leading-tight max-w-3xl">
            Assista ao vídeo curto de{" "}
            <span className="text-simpson-yellow text-4xl sm:text-5xl lg:text-6xl drop-shadow-[0_0_12px_rgba(255,217,15,0.8)]">
              2 minutos
            </span>{" "}
            abaixo antes de continuar rolando
          </h1>

          {/* VIDEO */}

          <div className="relative w-full max-w-[380px] mx-auto">

            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,217,15,0.18)] border-[3px] border-simpson-yellow bg-black aspect-[9/16]">

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/iYzzwjV4jgc?autoplay=1&mute=${muted ? 1 : 0}&controls=1&rel=0&playsinline=1`}
                title="VSL"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              {muted && (
                <div
                  onClick={handleSound}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3 bg-black/70 px-6 py-4 rounded-xl text-white font-bold text-lg border border-white/20">
                    <Volume2 size={24} />
                    Toque para ouvir
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* TEXTO */}

          <div className="text-center max-w-3xl space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-simpson-yellow/10 border border-simpson-yellow/30 text-simpson-yellow font-bold text-sm uppercase tracking-wide backdrop-blur-sm">
              <DollarSign size={16} />
              <span>Storm Clips</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Aprenda a criar páginas de{' '}
              <span className="text-simpson-yellow">clipes virais</span> no TikTok sem aparecer
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
              Descubra o método para montar páginas estratégicas, postar vídeos com alto potencial de retenção e transformar visualizações em uma fonte de renda, mesmo começando do zero.
            </p>

            <div className="grid gap-3">

              <div className="flex items-center gap-3 justify-center">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Sem precisar aparecer</span>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Mesmo sem experiência com edição</span>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Usando um formato simples e replicável</span>
              </div>

            </div>

            <div className="pt-4">

              <button
                onClick={SCROLL_TO_OFFER}
                className="px-8 py-5 bg-simpson-yellow hover:bg-yellow-300 text-black font-black text-lg rounded-xl shadow-[0_0_25px_rgba(255,217,15,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 mx-auto"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight size={24} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
