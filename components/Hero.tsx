import React, { useEffect, useRef } from 'react';
import { DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import { SCROLL_TO_OFFER } from '../constants';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;

        if (scrolled < 1000) {
          parallaxRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tiktok-black to-gray-900 pt-24 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute top-0 right-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 bg-simpson-yellow/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-simpson-yellow/10 border border-simpson-yellow/30 text-simpson-yellow font-bold text-sm uppercase tracking-wide backdrop-blur-sm">
              <DollarSign size={16} />
              <span>Storm Clips</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight">
              Aprenda a criar páginas de{' '}
              <span className="text-simpson-yellow relative inline-block">
                clipes virais
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-simpson-yellow opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              no TikTok sem aparecer
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Descubra o método para montar páginas estratégicas, postar vídeos com alto potencial de retenção e transformar visualizações em uma fonte de renda, mesmo começando do zero.
            </p>

            <div className="grid gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-left justify-center lg:justify-start">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Sem precisar aparecer</span>
              </div>

              <div className="flex items-center gap-3 text-left justify-center lg:justify-start">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Mesmo sem experiência com edição</span>
              </div>

              <div className="flex items-center gap-3 text-left justify-center lg:justify-start">
                <CheckCircle size={18} className="text-simpson-yellow shrink-0" />
                <span className="text-gray-200">Usando um formato simples, rápido e replicável</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={SCROLL_TO_OFFER}
                className="w-full sm:w-auto px-8 py-5 bg-simpson-yellow hover:bg-yellow-300 text-black font-black text-lg rounded-xl shadow-[0_0_25px_rgba(255,217,15,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight size={24} />
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Acesso imediato + método prático para começar ainda hoje.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-simpson-yellow/5 blur-[60px] rounded-full pointer-events-none animate-pulse-slow"></div>

            <div
              ref={parallaxRef}
              className="relative w-full max-w-sm mx-auto z-10 will-change-transform"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,217,15,0.15)] border-[3px] border-simpson-yellow bg-black aspect-[9/16] transition-transform duration-500 ease-out hover:scale-[1.02] animate-float">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/iYzzwjV4jgc?controls=1&rel=0&playsinline=1"
                  title="VSL"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>

                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
