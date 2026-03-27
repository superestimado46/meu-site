import React, { useEffect, useMemo, useState } from "react";
import { Check, MessageCircle, Star, Users, Rocket, Zap } from "lucide-react";

const prices = {
  basic: { old: 97.9, current: 39.97 },
  premium: { old: 197.9, current: 97.9 },
  ultra: { old: 997.9, current: 497.9 },
};

const formatPrice = (value: number) => value.toFixed(2).replace(".", ",");

// 🔥 NOVA FUNÇÃO (CORRIGIDA)
const openCheckoutWithTracking = (
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string
) => {
  e.preventDefault();

  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout");
  }

  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 400);
};

const Pricing: React.FC = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const UPSELL_CHECKOUT_URL = "https://checkout.ticto.app/O454C8D0C";
  const BASIC_CHECKOUT_URL = "https://checkout.ticto.app/OECD58110";

  const UPSELL_PRICE = 59.9;
  const UPSELL_SECONDS = 10 * 60;
  const [upsellTimeLeft, setUpsellTimeLeft] = useState(UPSELL_SECONDS);

  const savings = useMemo(() => {
    const diff = prices.premium.current - UPSELL_PRICE;
    return diff > 0 ? diff : 0;
  }, []);

  useEffect(() => {
    if (!isUpsellOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsUpsellOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isUpsellOpen]);

  useEffect(() => {
    if (!isUpsellOpen) return;

    const key = "upsellEndTime_v1";
    const now = Date.now();

    let endTime = Number(localStorage.getItem(key) || 0);
    if (!endTime || endTime < now) {
      endTime = now + UPSELL_SECONDS * 1000;
      localStorage.setItem(key, String(endTime));
    }

    const tick = () => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setUpsellTimeLeft(remaining);
      if (remaining <= 0) {
        localStorage.removeItem(key);
        setIsUpsellOpen(false);
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isUpsellOpen]);

  const mm = String(Math.floor(upsellTimeLeft / 60)).padStart(2, "0");
  const ss = String(upsellTimeLeft % 60).padStart(2, "0");

  return (
    <section id="oferta" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">

          {/* PLANO 1 */}
          <div className="pricing-card bg-gradient-to-br from-[#0f172a] to-[#020617] border border-gray-800 rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-200">Apenas o Curso</h3>

            <p className="text-gray-400 text-sm mt-2">
              Para quem quer aprender sozinho
            </p>

            <div className="mt-6">
              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.basic.old)}
              </p>

              <p className="text-4xl font-bold text-white mt-1">
                R$ {formatPrice(prices.basic.current)}
              </p>
            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-300">
              <li className="flex items-center gap-3">
                <Check size={18} />
                Curso Completo Storm Clips
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Acesso Vitalício
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setIsUpsellOpen(true)}
              className="mt-8 border border-gray-600 text-white text-center py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Quero apenas o curso
            </button>
          </div>

          {/* PLANO 2 */}
          <div className="pricing-card relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-yellow-400 rounded-2xl p-8 flex flex-col scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
              MAIS VENDIDO
            </div>

            <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
              Completo + Comunidade
              <Star size={20} fill="currentColor" />
            </h3>

            <a
              href="https://checkout.ticto.app/O5A79A605"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                openCheckoutWithTracking(e, "https://checkout.ticto.app/O5A79A605")
              }
              className="mt-8 bg-yellow-400 text-black font-bold text-center py-4 rounded-xl hover:bg-yellow-300 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Quero Acesso + Grupo VIP
            </a>
          </div>

          {/* PLANO 3 */}
          <div className="pricing-card bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#3b0a1a] border border-gray-700 rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-cyan-300 mt-3">
              Kit Acelerador
            </h3>

            <a
              href="https://checkout.ticto.app/ODA540CFB"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                openCheckoutWithTracking(e, "https://checkout.ticto.app/ODA540CFB")
              }
              className="mt-8 border border-cyan-400 text-cyan-300 text-center py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              Quero Conta Monetizada
            </a>
          </div>
        </div>
      </div>

      {isUpsellOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/75" onClick={() => setIsUpsellOpen(false)} />

          <div className="relative z-10 w-full max-w-md bg-[#1e293b] p-6 rounded-2xl">

            <a
              href={UPSELL_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                openCheckoutWithTracking(e, UPSELL_CHECKOUT_URL)
              }
              className="mt-5 w-full bg-yellow-400 text-black font-black text-center py-4 rounded-xl"
            >
              Sim! Quero o desconto de hoje
            </a>

            <a
              href={BASIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                openCheckoutWithTracking(e, BASIC_CHECKOUT_URL)
              }
              className="mt-3 w-full border border-white text-white text-center py-3 rounded-xl block"
            >
              Não, quero apenas o curso
            </a>

          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
