import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Uma breve descrição do projeto, destacando as principais tecnologias e funcionalidades implementadas.',
    image: '/placeholder.svg',
  },
  {
    title: 'Projeto 2',
    description: 'Uma breve descrição do projeto, destacando as principais tecnologias e funcionalidades implementadas.',
    image: '/placeholder.svg',
  },
  {
    title: 'Projeto 3',
    description: 'Uma breve descrição do projeto, destacando as principais tecnologias e funcionalidades implementadas.',
    image: '/placeholder.svg',
  },
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
              <div className="aspect-video bg-muted/50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground 
                           transition-all duration-300"
                >
                  Ver projeto
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
