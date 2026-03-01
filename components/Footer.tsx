import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">SIMPSONS CASH</h2>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Este site não faz parte do site do TikTok ou da ByteDance Ltd. Além disso, este site NÃO é endossado pelo TikTok de forma alguma.
        </p>
        <p className="text-gray-700 text-xs">
          &copy; {new Date().getFullYear()} Simpsons Cash. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;