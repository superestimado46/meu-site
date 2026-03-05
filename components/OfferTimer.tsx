import React, { useEffect, useState } from "react";

const OfferTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section className="py-10 bg-red-600 text-center">
      <div className="container mx-auto px-4">
        <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
          ⚠️ Oferta expira em ⚠️
        </p>

        <div className="text-5xl md:text-6xl font-black text-white mt-2">
          {minutes}:{seconds}
        </div>
{/* Mensagem de escassez abaixo do timer */}
<div className="mt-3 text-center leading-relaxed">
  <p className="text-yellow-300 text-sm md:text-base font-bold animate-pulse">
     restam apenas 12 vagas
  </p>

  <p className="text-white/80 text-xs md:text-sm mt-1">
    Quando o contador zerar ou as vagas acabarem, o valor volta ao normal.
  </p>
</div>
    </section>
  );
};

export default OfferTimer;
