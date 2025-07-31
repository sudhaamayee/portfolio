import { Coffee, Music, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center animate-fade-in-up">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            The story behind the code and curtains
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Personal Story */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">My Journey</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Hi! I'm a driven full-stack developer and AI & Data Science student with a strong focus on backend systems and data-driven solutions. I thrive on solving technical challenges, whether it's designing efficient APIs, managing databases, or developing scalable web applications.

My journey into tech began with a fascination for how intelligent systems work, and it has grown into a deep passion for building meaningful, high-performance digital products.
                </p>
                <p>
                  Outside of code, I'm an active dancer and part of a competitive dance crew ,an experience that sharpened my creativity, discipline, and teamwork. From synchronizing on stage to collaborating in a codebase, I bring rhythm, precision, and innovation to every project.
                </p>
                <p>
                  To me, great software isn't just about clean code it's about crafting intuitive, reliable experiences that serve real users. I build with purpose, blending logic, empathy, and creativity to make technology that matters.
                </p>
              </div>
            </div>

            {/* Values/Interests */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Problem Solver</h3>
                <p className="text-muted-foreground">
                  I thrive on breaking down complex challenges into manageable solutions.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Music className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Creative Mind</h3>
                <p className="text-muted-foreground">
                  From rehearsals to stage lights, dance drives my passion, discipline, and creativity.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Team Player</h3>
                <p className="text-muted-foreground">
                  Collaboration and communication are key to building great software.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-section-bg rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">What I'm Exploring</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Currently Learning</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Scalable full-stack architecture with React, Node.js, and MongoDB</li>
                    <li>• Building intelligent features using AI/ML models</li>
                    <li>• Secure cloud deployments using AWS & modern DevOps tools</li>
                    <li>• Enhancing freestyle and choreography dance techniques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Passionate About</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>•  Crafting intuitive and robust backend systems</li>
                    <li>• Bridging creativity and logic in tech & performing arts</li>
                    <li>• Leading and mentoring in both developer circles and college dance crewss</li>
                    <li>• Expressing myself as a dancer, with multiple wins in solo and group intercollege competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;