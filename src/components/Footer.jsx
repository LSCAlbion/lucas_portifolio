import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-8 border-t border-surface-hover mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-text-secondary mb-2">
          &copy; {new Date().getFullYear()} <span className="text-brand font-bold">Lucas Santos</span>. 
          Todos os direitos reservados.
        </p>
        
        <p className="text-sm text-gray-500 flex justify-center items-center gap-2">
          Desenvolvido com 
          <span className="text-brand font-bold">React</span> 
          e muita 
          <span className="text-brand font-bold">Raça</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;