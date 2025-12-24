import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lucas-santos-da-concei%C3%A7%C3%A3o-182b3622a/",
      icon: <FaLinkedin size={30} />,
      label: "Conectar profissionalmente"
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/LSCAlbion",
      icon: <FaGithub size={30} />,
      label: "Ver meus códigos"
    },
    {
      id: 3,
      name: "WhatsApp",
      link: "https://wa.me/5562992069322",
      icon: <FaWhatsapp size={30} />,
      label: "Vamos conversar agora"
    },
    {
      id: 4,
      name: "Email",
      link: "mailto:lcssantosdaconceicao@gmail.com",
      icon: <FaEnvelope size={30} />,
      label: "lcssantosdaconceicao@gmail.com"
    }
  ];

  return (
    <section id="contatos" className="py-24 px-4 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
          Vamos trabalhar juntos?
        </h2>
        
        <p className="text-gray-200 mb-12 max-w-xl mx-auto">
          Estou disponível para novos projetos e desafios. 
          Sinta-se à vontade para me chamar no "Zap" ou ver meu perfil profissional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact) => {
            // Lógica: Se for Email, usamos 'div'. Se não, usamos 'a' (link).
            const isEmail = contact.name === "Email";
            const Tag = isEmail ? 'div' : 'a';

            return (
              <Tag 
                key={contact.id}
                // Se NÃO for email, coloca o href. Se for, não coloca nada.
                {...(!isEmail && { 
                    href: contact.link, 
                    target: "_blank", 
                    rel: "noopener noreferrer" 
                })}
                
                className={`
                  group bg-surface/80 backdrop-blur-sm border border-surface-hover p-6 rounded-xl flex items-center gap-6 
                  transition-all duration-300
                  ${!isEmail ? 'hover:border-brand hover:-translate-y-1 cursor-pointer' : 'border-surface-hover'} 
                `}
              >
                <div className="bg-background/50 p-4 rounded-full text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {contact.icon}
                </div>
                
                <div className="text-left overflow-hidden">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">
                    {contact.name}
                  </h3>
                  
                  {/* Aqui está o segredo:
                     1. break-all: Se o email for muito grande, ele quebra a linha para não estourar o card.
                     2. select-text: Garante que o usuário consiga passar o mouse e selecionar.
                     3. cursor-text: Mostra o ícone de texto ao passar o mouse.
                  */}
                  <p className={`text-sm text-gray-200 break-all ${isEmail ? 'select-text cursor-text font-mono' : ''}`}>
                    {contact.label}
                  </p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;