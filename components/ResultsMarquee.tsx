import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  speedSeconds?: number;
};

const fileNames = [
  "result_01.webp",
  "result_02.webp",
  "result_03.webp",
  "result_04.webp",
  "result_05.webp",
  "result_06.webp",
  "result_07.webp",
  "result_08.webp",
  "result_09.webp",
  "result_10.webp",
  "result_11.webp",
  "result_12.webp",
];

const getSrc = (name: string) =>
  new URL(`../assets/results/${name}`, import.meta.url).href;

export default function ResultsMarquee({
  title = "Alguns resultados de alunos aplicando o Storm Clips",
  speedSeconds = 28,
}: Props) {

  const images = fileNames.map(getSrc);
  const loop = [...images, ...images];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
            {title}
          </h2>

          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            🔥 Mais de <span className="text-simpson-yellow font-extrabold">1457 alunos</span> já começaram 
            a aplicar o método Storm Clips criando páginas de clipes virais no TikTok.
          </p>

        </div>

        <div className="relative overflow-hidden">

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            className="flex flex-nowrap w-max gap-6 items-center will-change-transform"
            style={{ animation: `marquee ${speedSeconds}s linear infinite` }}
          >
            {loop.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <img
                  src={src}
                  alt="Resultado de aluno"
                  className="h-[210px] md:h-[260px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-6 max-w-xl mx-auto">
          Esses são apenas alguns resultados compartilhados por alunos que começaram 
          a aplicar o método Storm Clips. Novas páginas e novos resultados aparecem todos os dias.
        </p>

      </div>

      <style>
        {`
          @keyframes marquee {
            0%   { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-50%,0,0); }
          }
        `}
      </style>
    </section>
  );
}
