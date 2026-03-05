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
          ⚠️ Oferta expira em
        </p>

        <div className="text-5xl md:text-6xl font-black text-white mt-2">
          {minutes}:{seconds}
        </div>

        <p className="text-white/80 mt-3 text-sm">
          Após o tempo acabar o valor volta ao preço normal.
        </p>
      </div>
    </section>
  );
};

export default OfferTimer;
