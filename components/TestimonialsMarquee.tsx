import React from "react";

const testimonials = [
  "/assets/testimonials/test1.webp",
  "/assets/testimonials/test2.webp",
  "/assets/testimonials/test3.webp",
  "/assets/testimonials/test4.webp",
];

export default function TestimonialsMarquee() {
  return (
    <section className="py-10 bg-black overflow-hidden">
      
      <h2 className="text-center text-2xl font-bold mb-6">
        Mensagens de alunos
      </h2>

      <div className="flex gap-6 justify-center flex-wrap">
        {testimonials.map((img, index) => (
          <img
            key={index}
            src={img}
            className="h-64 rounded-xl shadow-lg"
          />
        ))}
      </div>

    </section>
  );
}
