import React, { useEffect, useRef } from 'react';
import { DollarSign, ArrowRight, TrendingUp, BarChart3, Play } from 'lucide-react';
import { SCROLL_TO_OFFER, IMAGES } from '../constants';

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
              O método mais <span className="text-simpson-yellow relative inline-block">
                simples
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-simpson-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> do TikTok
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              O caminho comprovado para faturar no TikTok usando vídeos virais, mesmo começando do zero e sem aparecer.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

              <button
                onClick={SCROLL_TO_OFFER}
                className="w-full sm:w-auto px-8 py-5 bg-simpson-yellow hover:bg-yellow-300 text-black font-black text-lg rounded-xl shadow-[0_0_25px_rgba(255,217,15,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
              >
                COMEÇAR AGORA
                <ArrowRight size={24} />
              </button>

            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-simpson-yellow/5 blur-[60px] rounded-full pointer-events-none animate-pulse-slow"></div>

            <div
              ref={parallaxRef}
              className="relative w-full max-w-md mx-auto z-10 will-change-transform"
            >

              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,217,15,0.15)] border-[3px] border-simpson-yellow bg-black aspect-[3/4] transition-transform duration-500 ease-out hover:scale-[1.02] animate-float">

                <img
                  src={IMAGES.hero}
                  alt="Storm Clips Viral"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <div className="bg-red-500 rounded-full p-1">
                      <Play size={10} fill="white" className="text-white ml-0.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Alta Retenção</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-gray-900/95 backdrop-blur-xl p-3 rounded-xl border border-gray-700 shadow-xl flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-600">
                        <TrendingUp className="text-tiktok-cyan" size={20} />
                      </div>

                      <div>
                        <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
                          Performance
                        </p>
                        <p className="text-white font-bold text-base leading-none mt-0.5">
                          Viralizou 🔥
                        </p>
                      </div>
                    </div>

                    <div className="h-6 w-[1px] bg-gray-700"></div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-green-400 text-xs font-bold">
                        <BarChart3 size={14} />
                        <span>+15.4K</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
