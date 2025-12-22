import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/seu-usuario",
      icon: <FaLinkedin size={30} />,
      label: "Conectar profissionalmente"
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/LucasSantos",
      icon: <FaGithub size={30} />,
      label: "Ver meus códigos"
    },
    {
      id: 3,
      name: "WhatsApp",
      link: "https://wa.me/5562900000000",
      icon: <FaWhatsapp size={30} />,
      label: "Vamos conversar agora"
    },
    {
      id: 4,
      name: "Email",
      link: "mailto:lucas.santos@exemplo.com",
      icon: <FaEnvelope size={30} />,
      label: "Mande um alô"
    }
  ];

  return (
    // MUDANÇA 1: Tirei 'bg-background' e coloquei 'bg-transparent relative z-10'
    // Isso garante que o fundo seja invisível, mostrando as partículas atrás
    <section id="contato" className="py-24 px-4 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
          Vamos trabalhar juntos?
        </h2>
        
        <p className="text-text-secondary mb-12 max-w-xl mx-auto">
          Estou disponível para novos projetos e desafios. 
          Sinta-se à vontade para me chamar no "Zap" ou ver meu perfil profissional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact) => (
            <a 
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              // MUDANÇA 2: Mudei 'bg-surface' para 'bg-surface/80' (80% opacidade)
              // Adicionei 'backdrop-blur-sm' para borrar as partículas que passam atrás do card
              className="group bg-surface/80 backdrop-blur-sm border border-surface-hover p-6 rounded-xl flex items-center gap-6 hover:border-brand hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-background/50 p-4 rounded-full text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                {contact.icon}
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">
                  {contact.name}
                </h3>
                <p className="text-sm text-text-secondary group-hover:text-gray-300">
                  {contact.label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;