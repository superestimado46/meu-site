import React from "react";
import ResultsMarquee from "./ResultsMarquee";
import TestimonialsMarquee from "./TestimonialsMarquee";

export default function Proof() {
return (
<>
{/* LINHA 1: Prints de resultados rolando */} <ResultsMarquee />

```
  {/* Texto entre as duas linhas */}
  <p className="text-center text-lg opacity-80 my-10">
    Esses são apenas alguns dos resultados…
  </p>

  {/* LINHA 2: Depoimentos rolando */}
  <TestimonialsMarquee />
</>
```

);
}
