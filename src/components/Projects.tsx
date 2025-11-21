import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Connect Skills',
    description: 'Plataforma que conecta candidatos e empresas com base em habilidades comportamentais com uso de inteligência artificial.',
    link: 'https://github.com/brunowasch/connect-skills'
  },
  {
    title: 'Consumo de API de filme em React',
    description: 'Aplicação React que exibe um catálogo de filmes com busca e filtro por gênero, consumindo dados de uma API.',
    link: 'https://github.com/Marcelo844/catalogo-filmes-react'
  },
  {
    title: 'Batalha Naval Em Java',
    description: 'Recriação do jogo Batalha Naval utilizando Java como linguagem de programação. Jogado diretamente pelo terminal.',
    link: 'https://github.com/brunowasch/java-navalbattle'
  },
  {
    title: 'Dashboard interativo utilizando Python com StreamLit',
    description: 'Dashboard interativo em Streamlit que analisa dados do Kaggle sobre características de veículos e seus respectivos preços (MSRP).',
    link: 'https://github.com/Marcelo844/Trabalho-Dashboard'
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Meus <span className="text-accent-glow">Projetos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 
                         hover:border-accent/50 transition-all duration-300 glow-on-hover
                         animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground 
                            transition-all duration-300"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver projeto
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
