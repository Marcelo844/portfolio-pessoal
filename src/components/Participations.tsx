import { Card } from '@/components/ui/card';
import { Award, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const participations = [
  {
    title: 'Hackatime',
    date: '2024',
    description: 'Hackatime organizado pela Sicredi caminho das águas, onde tivemos 48h para desenvolver um protótipo de uma ideia',
    award: true,
    image: '/images/Hackatime_2024.jpeg',
  },
  {
    title: 'Taquara Summit',
    date: '2024',
    description: 'O maior evento de inovação e empreendedorismo do Vale do Paranhana',
    image: '/images/Taquara_Summit_2024.jpeg',
  },
  {
    title: 'Meetup dos Devs do Paranhana',
    date: '2025',
    description: 'Encontro de Devs do Paranhana com Palestras sobre inovação',
    image: '/images/Meetup_2025.jpeg',
  },
  {
    title: 'Hackatime',
    date: '2025',
    description: 'Hackatime organizado pela Sicredi caminho das águas, onde tivemos 48h para desenvolver um protótipo de uma ideia',
    award: false,
    image: '/images/Hackatime_2025.jpeg',
  },
  {
    title: 'Taquara Summit',
    date: '2025',
    description: 'O maior evento de inovação e empreendedorismo do Vale do Paranhana',
    award: false,
    image: '/images/Taquara_Summit_2025.jpeg',
  },
  {
    title: 'Oktober Summit',
    date: '2025',
    description: 'Um evento que conecta indústria, comércio, serviços, turismo, tecnologia e educação, reunindo líderes empresariais, startups, universidades, entidades e governo em um só lugar para transformar conhecimento em ação.',
    award: false,
    image: '/images/Oktober_Summit_2025.jpeg',
  },
  {
    title: 'FEINTEC',
    date: '2025',
    description: 'Feira de Inovação Tecnológica onde com o projeto Connect Skills conseguimos o 2° Lugar do Eixo Inovação/Tecnológica e também uma Bolsa na Faculdade Feevale',
    award: true, 
    image: '/images/Feintec_2025.jpeg',   
  },
  {
    title: 'Meetup dos Devs do Paranhana',
    date: '2025',
    description: 'Encontro de Devs do Paranhana com Palestras sobre inovação',
    image: '/images/Meetup_2025pt.2.jpeg',
  },
  {
    title: 'Hackaton ESG Now',
    date: '2025',
    description: 'Hackathon realizado pela ESG Now promovendo a inovação e colaboração em projetos de sustentabilidade e ESG.',
    image: '/images/Hackathon_ESG-2.png',
  },
  {
    title: 'Workshop InovaLabs',
    date: '2025',
    description: 'Workshop de inovação e tecnologia do Crisdu Labs, promovendo o avanço em dedcultura de inovação e inteligência artificial.',
    image: '/images/Workshop_InovaLabs-2.png',
  },
];

const Participations = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);
  
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

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => setSelectedImage({ title: participation.title, image: participation.image })}
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Ver Imagem do Evento
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-2xl max-h-[100vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          <div className="w-full flex justify-center">
            <img
              src={selectedImage?.image}
              alt={selectedImage?.title}
              className="w-full max-h-[85vh] h-auto rounded-lg object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Participations;