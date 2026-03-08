import React from "react";

const testimonials = [
"/assets/testimonials/test1.png",
"/assets/testimonials/test2.png",
"/assets/testimonials/test3.png",
"/assets/testimonials/test4.png",
"/assets/testimonials/test5.png",
];

export default function TestimonialsMarquee() {
const items = [...testimonials, ...testimonials];

return ( <section className="py-12 bg-black overflow-hidden">

```
  <h2 className="text-center text-2xl font-bold mb-8">
    Mensagens de alunos
  </h2>

  <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
    {items.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Depoimento"
        className="h-80 rounded-xl shadow-lg"
      />
    ))}
  </div>

</section>
```

);
}
