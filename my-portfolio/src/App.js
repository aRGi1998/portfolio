import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Logibids Client & Service Provider",
      description: "A bidding-based logistics platform where service providers can register their vehicles and drivers, while clients can place bids and schedule trips.",
      tech: ["Angular", "Node.js", "Bootstrap"],
      link: "#"
    },
    {
      id: 2,
      title: "Ahlan eCommerce",
      description: "An online shopping platform designed for UAE customers to purchase products from Ahlan Supermarket.",
      tech: ["Angular", "Python", "Bootstrap"],
      link: "#"
    },
    {
      id: 3,
      title: "Product Hub",
      description: "A product management system used for storing and organizing product details efficiently.",
      tech: ["Angular", "Python", "Bootstrap"],
      link: "#"
    },
    {
      id: 4,
      title: "Sidra Bazar",
      description: "A global eCommerce website similar to Amazon, allowing users worldwide to buy and sell products.",
      tech: ["Angular", "Python", "Bootstrap"],
      link: "#"
    },
    {
      id: 5,
      title: "Proteous",
      description: "A blockchain-based enterprise software application focusing on secure and decentralized transactions.",
      tech: ["Angular", "Java", "Bootstrap", "PrimeNG"],
      link: "#"
    },
    {
      id: 6,
      title: "Flamming App",
      description: "A gaming-focused mobile app developed for students of Flamming College in Canada.",
      tech: ["React", "Python", "Bootstrap"],
      link: "#"
    },
    {
      id: 7,
      title: "DailyFit",
      description: "An eCommerce platform offering personalized gym protein and fitness food products.",
      tech: ["React", "Node.js", "Bootstrap"],
      link: "#"
    },
    {
      id: 8,
      title: "CCTV Monitoring System",
      description: "A camera health monitoring system used for tracking and maintaining the performance of CCTV networks.",
      tech: ["React", "Laravel", "Python", "Bootstrap"],
      link: "#"
    },
    {
      id: 9,
      title: "HRMS",
      description: "An HR management system designed to handle employee details and operations within an organization.",
      tech: ["React", "Laravel", "Tailwind CSS"],
      link: "#"
    }
  ];


const skills = [
  "JavaScript", "TypeScript", "React", "Angular", "Redux", "RxJS",
  "HTML5", "CSS3", "SCSS", "Bootstrap", "Material UI", "Tailwind CSS",
  "Node.js", "Express.js", "REST APIs", "Git", "GitHub", "GitLab", "Bitbucket",
  "Jest", "React Testing Library", "Docker", "PostgreSQL",
  "NGRX", "Angular CLI", "d3js", "Jasmine", "Karma", "PrimeNG",
  "Figma to HTML/CSS", "Responsive Design", "SEO Best Practices", "ES6+", "Vite", "Webpack", 
  "Babel", "Yarn", "npm", "VS Code", "Agile Methodology", "Scrum", "Jira",
  "Confluence", "Project Coordination", "Client Communication", "Requirement Gathering",
  "Team Collaboration", "Problem Solving"
];



  const navigation = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Bootstrap CSS CDN will be added to index.html */}
      <style jsx>{`
        .app {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          min-height: 100vh;
          color: white;
        }
        
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
        }
        
        .hero-content {
          transform: ${isLoaded ? 'translateY(0)' : 'translateY(50px)'};
          opacity: ${isLoaded ? '1' : '0'};
          transition: all 0.8s ease-out;
        }
        
        .profile-image {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .custom-navbar {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-link-custom {
          color: rgba(255, 255, 255, 0.8) !important;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 0 5px;
          padding: 8px 15px !important;
        }
        
        .nav-link-custom:hover,
        .nav-link-custom.active {
          color: #667eea !important;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .section-bg {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
        }
        
        .card-custom {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .card-custom:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }
        
        .skill-badge {
          background: rgba(102, 126, 234, 0.2);
          border: 1px solid rgba(102, 126, 234, 0.4);
          color: #667eea;
          transition: all 0.3s ease;
        }
        
        .skill-badge:hover {
          background: rgba(102, 126, 234, 0.3);
          transform: scale(1.05);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
        
        .btn-outline-custom {
          border: 2px solid #667eea;
          color: #667eea;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-outline-custom:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .tech-badge {
          background: rgba(102, 126, 234, 0.2);
          color: #667eea;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }
        
        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold gradient-text fs-3" href="#home">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navigation.map(({ id, label, icon: Icon }) => (
                <li key={id} className="nav-item">
                  <button
                    className={`nav-link nav-link-custom ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollToSection(id)}
                  >
                    <Icon size={18} className="me-2" style={{ display: 'inline' }} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <div className="profile-image">
              <User size={80} />
            </div>
            <h1 className="display-1 fw-bold mb-4 gradient-text">
              ARGI GOPI
            </h1>
            <p className="lead mb-5 text-white-50 fs-3">
              React and Angular Developer focused on delivering high-quality, interactive web solutions.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-gradient btn-lg px-4 py-3"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline-custom btn-lg px-4 py-3"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 section-bg">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5 gradient-text">
            About Me
          </h2>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h3 className="h2 mb-4 d-flex align-items-center">
                <GraduationCap className="me-3 text-primary" size={32} />
                My Journey
              </h3>
              <p className="text-white-50 mb-4 fs-5 lh-lg">
                I'm a dedicated front-end web developer with over 5 years of professional experience,
                specializing in building scalable, responsive, and visually engaging web applications.
                I have a strong passion for transforming complex design and functional requirements into clean,
                maintainable, and user-friendly interfaces that offer a seamless user experience across all devices.
              </p>
              <p className="text-white-50 fs-5 lh-lg">
                My core expertise lies in modern front-end frameworks like React and Angular, with proficiency
                in crafting reusable components, implementing state management (using tools like Redux and Context API),
                optimizing performance, and ensuring cross-browser compatibility. I also excel in HTML5, CSS3, Sass, Bootstrap,
                Tailwind CSS, and JavaScript (ES6+), delivering pixel-perfect and responsive layouts that meet both design
                and accessibility standards.
              </p>
              <p className="text-white-50 fs-5 lh-lg">
                In addition to development, I have valuable experience in project coordination, where I actively engage in
                requirement gathering, client communications, task division, and team collaboration to ensure timely and
                quality delivery of projects. My approach emphasizes problem-solving, attention to detail, and clean architecture,
                resulting in products that not only meet technical specifications but also drive real business value. I am committed
                to continuous learning and staying updated with the latest front-end technologies and best practices.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="h2 mb-4 d-flex align-items-center">
                <Code className="me-3 text-info" size={32} />
                Skills & Technologies
              </h3>
              <div className="row g-2">
                {skills.map((skill, index) => (
                  <div key={skill} className="col-6 col-lg-4">
                    <span className="badge skill-badge w-100 p-3 fs-6">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container py-5">
          <h2 className="display-4 fw-bold text-center mb-5 gradient-text">
            Featured Projects
          </h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="card card-custom h-100 text-white">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Briefcase className="text-info" size={32} />
                      <button className="btn btn-link text-white-50 p-0">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                    <h5 className="card-title mb-3">{project.title}</h5>
                    <p className="card-text text-white-50 mb-4 flex-grow-1">
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="badge tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 section-bg">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
              I'm always open to discussing new opportunities and interesting projects.
              Let's create something amazing together!
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="contact-card text-center p-4 rounded h-100">
                <Mail className="text-primary mb-3" size={48} />
                <h5 className="mb-2">Email</h5>
                <p className="text-white-50 mb-0">argigopi@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card text-center p-4 rounded h-100">
                <Phone className="text-info mb-3" size={48} />
                <h5 className="mb-2">Phone</h5>
                <p className="text-white-50 mb-0">+91 8075388708</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card text-center p-4 rounded h-100">
                <Github className="text-success mb-3" size={48} />
                <h5 className="mb-2">GitHub</h5>
                <p className="text-white-50 mb-0">https://github.com/aRGi1998</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary social-btn">
                <Linkedin size={24} />
              </button>
              <button className="btn btn-dark social-btn">
                <Github size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
        <div className="container">
          <div className="text-center">
            <p className="text-white-50 mb-0">
              © 2025 Argi Gopi, Web Developer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
