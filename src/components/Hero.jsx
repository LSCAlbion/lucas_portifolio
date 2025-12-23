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
        
        {/* Texto de Apresentação */}
        {/* Alterações:
            - max-w-3xl: Largura ideal para leitura (9xl ficaria muito esticado).
            - text-gray-200: Cor quase branca para contraste.
            - text-justify: Alinhamento justificado.
            - leading-relaxed: Espaço entre linhas para não ficar embolado.
        */}
        <div className="max-w-3xl mx-auto"> 
          <p className="text-lg md:text-xl text-gray-200 mb-8 text-justify hyphens-auto leading-relaxed">
            Olá! Sou <strong>Lucas Santos da Conceição</strong>, estudante de Engenharia de Software no 5º período pela Universidade Evangélica de Goiás. Minha jornada na tecnologia é impulsionada pelo desenvolvimento de soluções práticas, com experiência acadêmica em Python, incluindo projetos de visão computacional e algoritmos de recomendação, além de conhecimentos em Backend, Frontend e MySQL.
            <br /><br />
            Possuo inglês avançado e trago uma bagagem sólida do mercado de trabalho: na Fortbras (Jaicar Autopeças), fui promovido de estoquista a supervisor de expedição em curto prazo, o que comprova minha dedicação, fidelidade e capacidade de liderança. Atualmente, busco aplicar essa ética de trabalho no desenvolvimento de software e expandir meus horizontes para a Segurança da Informação.
          </p>
        </div>
        
        {/* Botões de Ação */}
        {/* Alteração: Adicionado 'mt-12' para dar mais espaço do texto */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="#projetos" className="px-8 py-4 bg-brand rounded-full font-bold text-white hover:bg-brand-hover transition-all hover:-translate-y-1 shadow-lg shadow-brand/25">
            Ver meu trabalho
          </a>
          <a href="https://github.com/LSCAlbion" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-surface border border-surface-hover rounded-full font-bold text-text-primary hover:bg-surface-hover transition-all hover:-translate-y-1">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;