import React from "react";

const testimonials = [
  "/assets/testimonials/test1.png",
  "/assets/testimonials/test2.png",
  "/assets/testimonials/test3.png",
  "/assets/testimonials/test4.png",
  "/assets/testimonials/test5.png",
];

export default function TestimonialsMarquee() {
  const firstRow = [...testimonials, ...testimonials];

  return (
    <section className="py-12 bg-black overflow-hidden">
      <style>{`
        .testimonials-wrap {
          width: 100%;
          overflow: hidden;
        }

        .testimonials-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: testimonialsReverse 15s linear infinite;
        }

        @keyframes testimonialsReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <h2 className="text-center text-2xl font-bold mb-8">
        Mensagens de alunos
      </h2>

      <div className="testimonials-wrap">
        <div className="testimonials-track">
          {firstRow.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Depoimento"
              className="h-80 rounded-xl shadow-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
