import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Triksha AI Health Monitering System',
      description: 'Triksha is an AI-powered healthcare platform designed to predict and prevent health risks before they happen. With 24/7 wearable integration and personalized AI analytics, Triksha acts as a digital health companion, delivering proactive insights rather than reactive solutions',
      problem: 'Millions of people lack access to real-time, intelligent health monitoring that goes beyond basic fitness tracking. Triksha addresses this gap by offering affordable, scalable, and intelligent health prediction tools for individuals, families, and professionals.',
      technologies: ['React+Vite+TailwindCSS', 'Node.js', 'MongoDB', 'Express', 'Razorpay API', 'JWT','Google Oauth','Azure','Vercel','MongoDB','Postman'],
      features: [
        'AI-powered health predictions and alerts',

'24/7 integration with wearable devices',

'Personalized digital health book for every user',

'Role-based authentication (User/Admin)',

'Razorpay-integrated payment systems',

'Real-time risk notifications based on vitals and medical history',

'Scalable REST API with full-stack security'
      ],
      github: 'https://github.com/Triksha-health/Web-development',
      demo: 'https://trikshahealth.com/',
      image: '/image.png',
      category: ' Full Stack Internship'
    },
    {
      title: 'Global Disasters – Data Analysis & Visualization Project',
      description: 'This project aimed to uncover key insights from global disaster data over the last century. It involved analyzing disaster types, frequencies, regional impact, and death tolls to understand patterns and long-term trends affecting global populations.',
      problem: 'Governments and organizations often lack intuitive visual tools to assess historical disaster trends and prepare for future risks. This project addresses that gap by transforming raw disaster data into actionable insights through visual storytelling.',
      technologies: ['Python', 'Matplotlib', 'Seaborn', 'Numpy', 'Pandas', 'Google Colab'],
      features: [
        'Floods were the most frequent disaster globally',

'Earthquakes led to the highest number of deaths',

'A sharp increase in climate-related disasters has been observed post-1980',

'Asia and Africa were disproportionately affected in terms of both frequency and impact'
      ],
      github:'https://colab.research.google.com/drive/1umj85ATRRX-pDJYRNL_F6YXhc2isJqM8?usp=sharing#scrollTo=uxtpplqJ1pwp',
      demo: 'https://colab.research.google.com/drive/1umj85ATRRX-pDJYRNL_F6YXhc2isJqM8?usp=sharing#scrollTo=uxtpplqJ1pwp',
      image: '/image2.png',
      category: 'Data Analysis'
    },
    {
      title: 'Crypto‑Play: Real-Time Crypto Dashboard',
      description: 'Crypto‑Play is a real-time cryptocurrency dashboard built with my collaborator, Ankur. I led most of the backend development using Node.js and Express, integrating live crypto market data via external APIs, and deploying the backend on Azure. The frontend is fully hosted and live on Netlify.',
      problem: 'Many crypto apps offer static snapshots or delayed updates. Crypto‑Play solves this by providing a dynamically updating, interactive dashboard for crypto enthusiasts to track market trends in real time..',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'CryptoCurrency APIs','Azure','Netlify','MongoDb'],
      features: [
        'Real-time cryptocurrency statistics (prices, volume, market cap)',

'Scalable deployment strategy with cloud hosting for backend and frontendetch', 

'Designed and implemented server architecture, API routes, and data fetching logic' ,

'Deployed backend on Azure with automated builds and secure endpoints' ,

'Managed frontend deployment on Netlify and integrated live backend data' ,

'Ensured updates are seamless and real-time for all supported cryptocurrencies' 
      ],
      github: 'https://github.com/sudhaamayee/crypto-backend',
      demo: 'https://crypto-play.netlify.app/',
      image: '/image3.png',
      category: 'Backend'
    },
    {
      title: 'Static E-Commerce Website',
      description: 'Designed and built a fully functional e-commerce prototype using only HTML, CSS, and vanilla JavaScript, simulating end-to-end online shopping workflows including product browsing, cart management, and checkout flow.',
      problem:'Created a solid frontend base that mirrors real-world e-commerce platforms, this does not have integration with backend services, authentication, and payment systems.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Product catalog with category-wise filtering and detail pages',

'Interactive shopping cart with quantity updates and total price calculation',

'Responsive design optimized for desktop and mobile',

'Seamless user navigation with clean UI/UX structure'
      ],
      github: 'https://github.com/neha-lokireddy/e-commerce-project',
      demo: 'file:///C:/ecommerce/main.html',
      image: '/image4.png',
      category: 'frontend'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-center animate-fade-in-up">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            A showcase of applications I've built, problems I've solved, and technologies I've mastered
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`flex flex-col lg:flex-row gap-8 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        {project.title}
                      </h2>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Problem Solved</h3>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-skill-tag text-skill-tag-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <ArrowRight className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <Button asChild variant="default">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Projects;