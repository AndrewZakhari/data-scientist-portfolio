'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Award, BarChart3, Brain, Database, Code, TrendingUp, Heart, FileText, User, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Andrew Zakhari 
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Scientist
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transforming data into actionable insights through machine learning and visualization
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/andrewzakhari" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/andrewzakhari" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:andrewzakhari5@gmail.com" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <Image alt='portrait' src="/andrew.jpeg" width="1000" height="1000" className="w-60 h-60 text-blue-400 rounded-full" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                As a passionate beginner data analyst, I'm dedicated to uncovering meaningful insights from complex datasets. My journey in data science combines technical expertise with a genuine curiosity about how data can solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in machine learning applications, particularly in predictive analytics, where I've developed predictive models that can make a real difference in people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">1+</div>
                  <div className="text-gray-300">Years Learning</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-300">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Project
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold">Heart Disease Prediction Model</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Developed a machine learning model to predict heart disease risk using patient health data. 
                  The model achieved 85% accuracy and can help healthcare professionals make informed decisions 
                  about patient care and early intervention strategies.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Multi-algorithm comparison (Random Forest, SVM, Logistic Regression)</li>
                      <li>• Feature importance analysis and data visualization</li>
                      <li>• Cross-validation and hyperparameter tuning</li>
                      <li>• Interactive dashboard for predictions</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button onClick={() => window.location.href = "https://github.com/AndrewZakhari/Heart_Disease_Project"} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                  
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-6 border border-red-400/30">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model Accuracy</span>
                      <span className="text-2xl font-bold text-green-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-400">500+</div>
                        <div className="text-gray-400 text-sm">Data Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-400">13</div>
                        <div className="text-gray-400 text-sm">Features</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming & Analysis */}
            <div className="bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-blue-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>SQL</span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>JavaScript</span>
                  <span className="text-blue-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Machine Learning</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Scikit-learn</span>
                  <span className="text-purple-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Pandas/NumPy</span>
                  <span className="text-purple-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Visualization</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Power BI</span>
                  <span className="text-green-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Matplotlib</span>
                  <span className="text-green-400">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Seaborn</span>
                  <span className="text-green-400">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30 max-w-md">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <h4 className="font-semibold">Machine Learning Certification From Sprints</h4>
                    <p className="text-gray-400 text-sm">Professional Certificate</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Comprehensive certification covering supervised and unsupervised learning, 
                  neural networks, and practical machine learning applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 text-lg">
              Ready to turn data into insights? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail onClick={() => window.location.href = "mailto:andrewzakhari5@gmail.com"} className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">andrewzakhari5@gmail.com</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin onClick={() => window.location.href = "https://linkedin.com/in/andrewzakhari"} className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">/in/andrewzakhari</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github onClick={() => window.location.href = "https://github.com/andrewzakhari"} className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">/andrewzakhari</p>
            </div>
          </div>
          
          <div className="text-center hidden mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Data Scientist Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;