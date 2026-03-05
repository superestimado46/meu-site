import React, { useState } from "react";

const faqs = [
  {
    question: "Como recebo acesso após a compra?",
    answer:
      "Após a confirmação do pagamento você receberá automaticamente um email com o acesso à área de membros.",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "Sim. Pagamentos por cartão e PIX liberam o acesso quase imediatamente após a confirmação.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer:
      "O acesso é vitalício. Você poderá acessar o conteúdo sempre que quiser.",
  },
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. O conteúdo foi feito para iniciantes e ensina tudo passo a passo.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. Todo pagamento é processado por plataforma segura com criptografia e proteção de dados.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-5 cursor-pointer bg-white/5"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">
                  {faq.question}
                </h3>

                <span className="text-yellow-400 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="text-white/70 mt-3 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
