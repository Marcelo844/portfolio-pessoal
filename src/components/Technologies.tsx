const technologies = [
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Tecnologias que <span className="text-accent-glow">utilizo</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm 
                         border border-border/50 hover:border-accent/50 transition-all duration-300
                         glow-on-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${tech.icon} text-6xl`}></i>
              <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
