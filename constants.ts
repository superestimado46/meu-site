// These represent the images provided by the user. 
// NOTE: Ensure these are DIRECT image links (ending in .jpg, .png) for best results.

export const IMAGES = {
    // The Main Hero image
    hero: "https://i.ibb.co/ccfCq9gn/Image-fx.jpg", 
    
    // The screenshots of earnings
    proof1: "https://i.ibb.co/3m82BxH3/Captura-de-tela-2025-12-13-015741.png", // Imagem atualizada
    proof2: "https://i.ibb.co/XZzzqN53/Screenshot-2025-10-02-10-25-40-879-com-geniuscloud-overseasplatform.jpg",
    proof3: "https://i.ibb.co/Y7wFNY48/Captura-de-tela-2025-11-06-111939.png",
    proof4: "https://i.ibb.co/TBwmV42v/IMG-2175.png",
    proof5: "https://ibb.co/Pvksd4B2",
};

export const SCROLL_TO_OFFER = () => {
    const element = document.getElementById('oferta');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};