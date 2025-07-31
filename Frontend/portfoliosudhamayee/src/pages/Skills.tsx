import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💬',
      skills: ['English', 'Telugu', 'Kannada', 'Hindi']
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL']
    },
    {
      title: 'Frontend Frameworks',
      icon: '🎨',
      skills: ['React', 'Next.js', 'GSAP', 'Tailwind CSS', 'Bootstrap', 'Styled Components']
    },
    {
      title: 'Backend Technologies',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js',  'FastAPI', 'REST APIs','Integrations']
    },
    {
      title: 'Databases & Storage',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: ['Git', 'Azure', 'AWS', 'Vercel', 'Postman', 'Netlify', 'GitHub Actions']
    },
    {
      title: 'Third-party Integrations',
      icon: '💳',
      skills: ['Razorpay API', 'Google Oauth', 'PayPal', 'Spotigy APIs']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center animate-fade-in-up">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-skill-tag text-skill-tag-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Learning Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Always Learning
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices in software development.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2 text-primary">Next on my list</h3>
                <p className="text-muted-foreground">LLM models, Microservices, Machine Learning</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2 text-primary">Improving</h3>
                <p className="text-muted-foreground">System Design, Performance Optimization</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2 text-primary">Exploring</h3>
                <p className="text-muted-foreground">Web3, Blockchain, IoT Applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;