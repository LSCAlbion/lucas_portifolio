import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Projetos Selecionados
          </h2>
          <p className="text-text-secondary max-w-xl">
            Uma coleção de aplicações que desenvolvi, variando de sistemas de gestão complexos a interfaces web modernas.
          </p>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-surface border border-surface-hover rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10">
              
              {/* Corpo do Card */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">
                        {project.title}
                    </h3>
                    {/* Ícone de seta opcional ou link visual */}
                </div>
                
                <p className="text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-background text-text-secondary px-3 py-1.5 rounded-md border border-surface-hover">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer do Card */}
                <a 
                  href={project.linkRepo} 
                  target="_blank" 
                  className="inline-flex items-center text-brand font-semibold text-sm hover:text-brand-hover transition-colors"
                >
                  Ver Código Fonte
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;    