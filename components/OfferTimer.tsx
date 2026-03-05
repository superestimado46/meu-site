import React, { useEffect, useState } from "react";

const OfferTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-center py-10 px-4">

      {/* Título */}
      <p className="text-yellow-300 font-semibold text-sm flex items-center justify-center gap-2">
        OFERTA EXPIRA EM
        <span className="text-yellow-300 text-base">⚠</span>
      </p>

      {/* Timer */}
      <div className="text-5xl md:text-6xl font-black text-white mt-2">
        {minutes}:{seconds}
      </div>

      {/* Escassez */}
      <div className="mt-3 text-center leading-relaxed">
        <p className="text-yellow-300 text-sm md:text-base font-bold">
          RESTAM APENAS 12 VAGAS DISPONÍVEIS
        </p>

        <p className="text-white/90 text-xs md:text-sm mt-1">
          Quando o contador zerar ou as vagas acabarem, o valor volta ao normal.
        </p>

        <p className="text-white/70 text-xs mt-1">
          Após o tempo acabar o valor volta ao preço normal.
        </p>
      </div>

    </div>
  );
};

export default OfferTimer;
