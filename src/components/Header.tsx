import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('tecnologias')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            Tecnologias
          </button>
          <button
            onClick={() => scrollToSection('projetos')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection('participacoes')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            Participações
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
          >
            Contato
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
