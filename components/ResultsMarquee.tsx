import React from "react";

import r01 from "@/assets/results/result_01.webp";
import r02 from "@/assets/results/result_02.webp";
import r03 from "@/assets/results/result_03.webp";
import r04 from "@/assets/results/result_04.webp";
import r05 from "@/assets/results/result_05.webp";
import r06 from "@/assets/results/result_06.webp";
import r07 from "@/assets/results/result_07.webp";
import r08 from "@/assets/results/result_08.webp";
import r09 from "@/assets/results/result_09.webp";
import r10 from "@/assets/results/result_10.webp";
import r11 from "@/assets/results/result_11.webp";
import r12 from "@/assets/results/result_12.webp";

type Props = {
  title?: string;
  subtitle?: string;
  speedSeconds?: number;
};

const results = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10, r11, r12];

export default function ResultsMarquee({
  title = "Resultados Reais",
  subtitle = "Mais de 800 alunos já começaram com o Simpsons Cash",
  speedSeconds = 30,
}: Props) {
  const loop = [...results, ...results];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
            {title}
          </h2>
          <p className="mt-3 text-gray-300">{subtitle}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            className="flex gap-6 items-center will-change-transform"
            style={{ animation: `marquee ${speedSeconds}s linear infinite` }}
          >
            {loop.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-white/25 transition-colors"
              >
                <img
                  src={src}
                  alt="Resultado"
                  className="h-[220px] md:h-[260px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Esses são apenas alguns dos resultados. Novos alunos estão entrando todos os dias.
        </p>
      </div>

      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            div[style*="marquee"] {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
