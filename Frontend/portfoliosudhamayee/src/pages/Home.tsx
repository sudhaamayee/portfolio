import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
           Sudhamayee
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-100 animate-fade-in-up [animation-delay:0.2s]">
            Full Stack Developer | Backend Specialist | Data Analyst
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.4s]">
            Passionate Full Stack developer and AI & Data Science student dedicated to building scalable web applications and intelligent systems.
When I'm not coding, you’ll find me performing with my college dance crew. Creativity fuels both my code and choreography.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.6s]">
            <Link to="/projects">
              <Button size="lg" variant="secondary" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
  href="/resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </Button>
</a>

          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Crafting Scalable Solutions, Line by Line
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Full Stack developer and AI & Data Science student, building dynamic web apps, designing efficient backend systems, and transforming data into insights. With a passion for clean code and creative thinking, I bridge logic and innovation in every project.
          </p>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'Python', 'React', 'Node.js', 'MongoDB', 'Git', 'Express', 'Tailwind','Machine Learning','Data Analytics','MySQL','UI/UX'].map((tech, index) => (
              <div 
                key={tech}
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-semibold text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;