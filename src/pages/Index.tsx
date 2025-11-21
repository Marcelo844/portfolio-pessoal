import Header from '@/components/Header';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
