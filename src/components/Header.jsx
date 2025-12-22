import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-surface">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <h1 className="text-2xl font-bold text-brand hover:text-brand-hover cursor-pointer transition-colors">
          Lucas<span className="text-text-primary"></span>
        </h1>
        
        {/* Navegação */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#home" className="text-text-secondary hover:text-brand transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#projetos" className="text-text-secondary hover:text-brand transition-colors">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="bg-brand text-text-primary px-5 py-2 rounded-lg font-medium hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;