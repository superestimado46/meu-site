import React, { useEffect, useMemo, useState } from "react";
import { Check, MessageCircle, Star, Users, Rocket, Zap } from "lucide-react";

const prices = {
  basic: { old: 97.9, current: 39.97 },
  premium: { old: 197.9, current: 97.9 },
  ultra: { old: 997.9, current: 497.9 },
};

const formatPrice = (value: number) => value.toFixed(2).replace(".", ",");

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

  // ✅ link do upsell (Plano 2 mais barato no pop-up)
  const UPSELL_CHECKOUT_URL = "https://checkout.ticto.app/O454C8D0C";

  // ✅ link do plano 1 (caso a pessoa recuse o upsell)
  const BASIC_CHECKOUT_URL = "https://checkout.ticto.app/OECD58110";

  // ✅ preço especial do pop-up
  const UPSELL_PRICE = 59.9;

  // ✅ contador (por sessão) dentro do pop-up
  const UPSELL_SECONDS = 10 * 60; // 10 minutos
  const [upsellTimeLeft, setUpsellTimeLeft] = useState(UPSELL_SECONDS);

  const savings = useMemo(() => {
    const diff = prices.premium.current - UPSELL_PRICE; // 97,90 - 59,90 = 38,00
    return diff > 0 ? diff : 0;
  }, []);

  // Fecha com ESC
  useEffect(() => {
    if (!isUpsellOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsUpsellOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isUpsellOpen]);

  // Timer do pop-up (usa localStorage para manter se recarregar)
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

            <p className="text-gray-400 mt-2">
              Acelere seus resultados com o grupo
            </p>

            <div className="mt-6">
              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.premium.old)}
              </p>

              <p className="text-5xl font-bold text-white mt-1">
                R$ {formatPrice(prices.premium.current)}
              </p>
            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-200">
              <li className="flex items-center gap-3">
                <Users size={18} />
                Curso Completo Storm Clips
              </li>

              <li className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg">
                <Users size={18} className="text-green-400" />
                <span className="text-green-400 font-bold">
                  BÔNUS: Grupo VIP no WhatsApp
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Network com outros alunos
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} />
                Pack Ferramentas PRO
              </li>
            </ul>

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
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 text-xs font-bold px-3 py-1 rounded-full w-fit">
              ALTA DEMANDA
            </div>

            <h3 className="text-2xl font-bold text-cyan-300 mt-3">
              Kit Acelerador
            </h3>

            <p className="text-gray-400">Comece já com tudo pronto</p>

            <div className="mt-6">
              <p className="text-gray-500 line-through text-sm">
                R$ {formatPrice(prices.ultra.old)}
              </p>

              <p className="text-5xl font-bold text-cyan-300 mt-1">
                R$ {formatPrice(prices.ultra.current)}
              </p>
            </div>

            <ul className="mt-8 space-y-4 flex-1 text-gray-200">
              <li className="flex items-center gap-3">
                <Check size={18} />
                Tudo do plano Comunidade
              </li>

              <li className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-lg">
                <Zap size={18} className="text-pink-400" />
                <div>
                  <p className="font-bold">1 CONTA MONETIZADA</p>
                  <p className="text-xs text-gray-400">
                    Pronta pra rodar e faturar
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Rocket size={18} />
                Pula a fase de validação
              </li>

              <li className="flex items-center gap-3">
                <Star size={18} />
                Suporte Individual VIP
              </li>
            </ul>

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
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsUpsellOpen(false)}
          />

          <div className="relative z-10 w-full max-w-md rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-[0_0_60px_rgba(0,0,0,0.65)] overflow-hidden">
            <div className="p-5 border-b border-white/10 flex items-start justify-between gap-4">
              <div className="w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-2 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Desbloqueado só hoje
                  </span>

                  <span className="inline-flex items-center bg-green-500/15 text-green-300 border border-green-500/25 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Economize R$ {formatPrice(savings)}
                  </span>

                  <span className="ml-auto inline-flex items-center bg-black/35 border border-white/10 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest">
                    ⏳ {mm}:{ss}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mt-3 flex items-center gap-2">
                  Completo + Comunidade{" "}
                  <Star size={18} fill="currentColor" className="text-yellow-300" />
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  Antes de ir no plano básico, pega esse upgrade com desconto exclusivo.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsUpsellOpen(false)}
                className="text-white/70 hover:text-white text-2xl leading-none"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            <div className="p-5">
              <div className="rounded-2xl border border-yellow-400/40 bg-black/20 p-5">
                <div className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full">
                  MAIS VENDIDO
                </div>

                <p className="text-gray-300 mt-3 text-sm">
                  Acelere seus resultados com o grupo
                </p>

                <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                  <span className="text-sm text-gray-400 line-through">
                    R$ {formatPrice(prices.premium.current)}
                  </span>
                  <span className="text-4xl font-black text-white">
                    R$ {formatPrice(UPSELL_PRICE)}
                  </span>
                  <span className="text-xs text-yellow-200 font-bold bg-yellow-400/10 border border-yellow-400/20 px-2 py-1 rounded-lg">
                    desbloqueio por tempo limitado
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  <li className="flex items-center gap-2">
                    <Users size={16} className="text-yellow-300" />
                    Curso Completo Storm Clips
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={16} className="text-green-400" />
                    <span className="text-green-400 font-bold">
                      BÔNUS: Grupo VIP no WhatsApp
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-white" />
                    Network com outros alunos
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-white" />
                    Pack Ferramentas PRO
                  </li>
                </ul>

                <a
                  href={UPSELL_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openCheckoutWithTracking(e, UPSELL_CHECKOUT_URL)}
                  className="mt-5 w-full bg-yellow-400 text-black font-black text-center py-4 rounded-xl hover:bg-yellow-300 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Sim! Quero o desconto de hoje
                </a>

                <a
                  href={BASIC_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openCheckoutWithTracking(e, BASIC_CHECKOUT_URL)}
                  className="mt-3 w-full border border-white/20 text-white font-bold text-center py-3 rounded-xl hover:bg-white/5 transition block"
                >
                  Não, quero apenas o curso
                </a>

                <p className="text-center text-[11px] text-gray-400 mt-4">
                  *Quando o tempo zerar, esse desconto some automaticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pricing-card{
          transition: all 0.35s ease;
        }

        .pricing-card:hover{
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
