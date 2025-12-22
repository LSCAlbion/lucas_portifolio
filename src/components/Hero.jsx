import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Badge / Subtítulo */}
        <span className="inline-block py-1 px-3 rounded-full bg-surface border border-surface-hover text-brand text-sm font-semibold tracking-wider uppercase mb-6">
          Disponível para novos projetos
        </span>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Criando soluções digitais com <br />
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            Inteligência e Código
          </span>
        </h1>
        
        {/* Descrição */}
        <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Sou o Lucas, um desenvolvedor focado em React e Ecossistema Python.
          Transformo problemas complexos em interfaces limpas e sistemas performáticos.
        </p>
        
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projetos" className="px-8 py-4 bg-brand rounded-full font-bold text-white hover:bg-brand-hover transition-all hover:-translate-y-1 shadow-lg shadow-brand/25">
            Ver meu trabalho
          </a>
          <a href="https://github.com/LSCAlbion" target="_blank" className="px-8 py-4 bg-surface border border-surface-hover rounded-full font-bold text-text-primary hover:bg-surface-hover transition-all hover:-translate-y-1">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;