
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Star, GitFork, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const techStack = {
    languages: [
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'C++', color: 'bg-purple-500' }
    ],
    libraries: [
      { name: 'NumPy', color: 'bg-indigo-500' },
      { name: 'Pandas', color: 'bg-green-500' },
      { name: 'Matplotlib', color: 'bg-red-500' },
      { name: 'Scikit-Learn', color: 'bg-orange-500' },
      { name: 'TensorFlow', color: 'bg-yellow-500' },
      { name: 'PyTorch', color: 'bg-pink-500' },
      { name: 'OpenCV', color: 'bg-cyan-500' },
      { name: 'NLTK', color: 'bg-teal-500' }
    ],
    tools: [
      { name: 'Jupyter', color: 'bg-orange-400' },
      { name: 'Git', color: 'bg-red-600' },
      { name: 'GitHub', color: 'bg-gray-800' },
      { name: 'VS Code', color: 'bg-blue-600' },
      { name: 'Anaconda', color: 'bg-green-600' },
      { name: 'MLflow', color: 'bg-blue-400' },
      { name: 'Power BI', color: 'bg-yellow-600' },
      { name: 'Tableau', color: 'bg-blue-700' },
      { name: 'Excel', color: 'bg-green-700' }
    ],
    cloud: [
      { name: 'AWS S3', color: 'bg-orange-600' },
      { name: 'SageMaker', color: 'bg-orange-500' },
      { name: 'IAM', color: 'bg-orange-400' },
      { name: 'Google Colab', color: 'bg-blue-500' }
    ]
  };

  const projects = [
    {
      title: 'Job Portal',
      description: 'A comprehensive platform for finding jobs with advanced search and filtering capabilities.',
      github: 'https://github.com/aditya23155/JobPortal',
      tags: ['Web Development', 'Database', 'User Interface']
    },
    {
      title: 'Simon Stimulator',
      description: 'A memory-based game that challenges users to repeat increasingly complex sequences.',
      github: 'https://github.com/aditya23155/SimonSimulator',
      tags: ['Game Development', 'JavaScript', 'DOM Manipulation']
    },
    {
      title: 'Power Consumption Analysis',
      description: 'Machine learning model using regression techniques to predict household power consumption patterns.',
      github: 'https://github.com/aditya23155/Household-Electric1',
      tags: ['Machine Learning', 'Regression', 'Data Analysis', 'Python']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would integrate with Formspree or EmailJS
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aditya Singh
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aditya Singh
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
              Data Science & AI Enthusiast
            </h2>
            <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
              Transforming data into insights and building intelligent solutions with machine learning and artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Data Science and Machine Learning enthusiast with a strong foundation in statistical analysis, 
                predictive modeling, and artificial intelligence. My journey in data science is driven by curiosity and the 
                desire to solve real-world problems through data-driven insights.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in Python, machine learning frameworks, and cloud technologies, I enjoy working on projects 
                that span from data analysis to building intelligent systems. I'm constantly learning and adapting to new 
                technologies in the rapidly evolving field of AI and data science.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-blue-400" />
                  <span>adityasin450@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-blue-400" />
                  <span>8287967194</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                AS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack & Tools
          </h2>
          
          <div className="space-y-12">
            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.languages.map((tech) => (
                  <Badge 
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 text-lg hover:scale-105 transition-transform duration-200`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Libraries */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Libraries & Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.libraries.map((tech) => (
                  <Badge 
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 text-lg hover:scale-105 transition-transform duration-200`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Development Tools</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.tools.map((tech) => (
                  <Badge 
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 text-lg hover:scale-105 transition-transform duration-200`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Cloud & Platform</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.cloud.map((tech) => (
                  <Badge 
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 text-lg hover:scale-105 transition-transform duration-200`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in discussing new opportunities, collaborating on projects, 
                or just chatting about data science and AI. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <span>adityasin450@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400" size={20} />
                  <span>8287967194</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.linkedin.com/in/aditya-singh-9b2792294/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/aditya23155" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Aditya Singh. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/aditya23155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-singh-9b2792294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:adityasin450@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
