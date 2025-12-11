import profilePhoto from '@/assets/Foto_minha.jpeg';

const About = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-foreground">Olá, eu sou</span>
              <br />
              <span className="text-accent-glow">Marcelo Rangel Barros</span>
            </h1>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou estudante da Escola Técnica Estadual Monteiro Lobato (CIMOL), no curso Técnico em Informática, e apaixonado pelo mundo do desenvolvimento web. Ao longo desses anos de formação, desenvolvi experiência tanto no front-end quanto no back-end, o que me permite criar aplicações completas, estruturadas e focadas na experiência do usuário.
              </p>
              
              <p>
                Tenho grande interesse em desenvolvimento web, explorando tanto o front-end quanto o back-end para construir aplicações completas, eficientes e estruturadas.
                Gosto de entender como cada tecnologia funciona, do comportamento da interface ao fluxo de dados no servidor, buscando criar soluções rápidas, intuitivas e alinhadas às boas práticas.
              </p>
              
              <p>
                Após concluir a minha formação, estou constantemente em busca de novos aprendizados, sempre explorando meus conhecimentos em novas tecnologias e melhorando minhas habilidades no desenvolvimento web. Vejo o desenvolvimento web como uma forma de solucionar problemas e inovar.
              </p>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-accent/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src={profilePhoto}
                alt="Marcelo Rangel Barros"
                className="relative rounded-2xl w-80 h-80 object-cover border-2 border-accent/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
