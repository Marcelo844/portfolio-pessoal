import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

const participations = [
  {
    title: 'Hackatime',
    date: '2024',
    description: 'Hackatime organizado pela Sicredi caminho das águas, onde tivemos 48h para desenvolver um protótipo de uma ideia',
    award: true,
  },
  {
    title: 'Taquara Summit',
    date: '2024',
    description: 'O maior evento de inovação e empreendedorismo do Vale do Paranhana',
  },
  {
    title: 'Meetup dos Devs do Paranhana',
    date: '2025',
    description: 'Encontro de Devs do Paranhana com Palestras sobre inovação',
  },
  {
    title: 'Hackatime',
    date: '2025',
    description: 'Hackatime organizado pela Sicredi caminho das águas, onde tivemos 48h para desenvolver um protótipo de uma ideia',
    award: false,
  },
  {
    title: 'Taquara Summit',
    date: '2025',
    description: 'O maior evento de inovação e empreendedorismo do Vale do Paranhana',
    award: false,
  },
  {
    title: 'Oktober Summit',
    date: '2025',
    description: 'Um evento que conecta indústria, comércio, serviços, turismo, tecnologia e educação, reunindo líderes empresariais, startups, universidades, entidades e governo em um só lugar para transformar conhecimento em ação.',
    award: false,
  },
  {
    title: 'FEINTEC',
    date: '2025',
    description: 'Feira de Inovação Tecnológica onde com o projeto Connect Skills conseguimos o 2° Lugar do Eixo Inovação/Tecnológica e também uma Bolsa na Faculdade Feevale',
    award: true,    
  },
  {
    title: 'Meetup dos Devs do Paranhana',
    date: '2025',
    description: 'Encontro de Devs do Paranhana com Palestras sobre inovação',
  },
  {
    title: 'Hackaton ESG Now',
    date: '2025',
    description: 'Descrição da participação ou premiação obtida na competição.',
  },
];

const Participations = () => {
  return (
    <section id="participacoes" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Participações e <span className="text-accent-glow">Premiações</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {participations.map((participation, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 
                         hover:border-accent/50 transition-all duration-300 glow-on-hover
                         animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground flex-1">
                    {participation.title}
                  </h3>
                  {participation.award && (
                    <Award className="w-6 h-6 text-accent flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-accent text-sm font-medium">
                  {participation.date}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {participation.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participations;