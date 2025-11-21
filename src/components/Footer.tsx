import { Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="py-12 px-6 border-t border-border/50 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Entre em <span className="text-accent-glow">contato</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a
              href="mailto:marcelorangelb2006@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm 
                       border border-border/50 hover:border-accent/50 transition-all duration-300
                       glow-on-hover group"
            >
              <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground">marcelorangelb2006@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/Marcelo844"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm 
                       border border-border/50 hover:border-accent/50 transition-all duration-300
                       glow-on-hover group"
            >
              <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground">github.com/Marcelo844</span>
            </a>
          </div>
          
          <div className="mt-8 text-center text-muted-foreground text-sm">
            <p>© 2025 Marcelo Rangel Barros. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
