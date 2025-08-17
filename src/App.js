import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // We'll add the new CSS for the loader here

// Component to handle lazy loading of sections
const LazySection = ({ children, id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// Unique Triangle Loader Component
const TriangleLoader = () => {
  return (
    <div className="loader-container">
      <div className="triangle-loader">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  );
};


// Main App component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'TCS iON Placement Success Programme for Graduate Engineer Trainee - IT',
      status: 'Live',
      description:
        'Complete assessment-to-placement workflow system for skill development and career advancement.',
      techStack: ['React.js', 'Node.js', 'JavaScript', 'CSS3'],
      keyFeatures: [
        'Skills assessment engine',
        'Job matching algorithm',
        'Company portal',
        'Placement tracking',
      ],
      liveLink: 'https://www.tcsion.com/hub/psp/graduate-engineer-trainee-it/', 
    },
    {
      id: 2,
      title: 'IIT Kharagpur',
      status: 'Live',
      description: 'AI & ML Program certification platform with enhanced user interface and seamless learning experience.',
      techStack: ['React.js', 'TypeScript', 'Express.js', 'MongoDB'],
      keyFeatures: [
        'Course management system',
        'Student dashboard',
        'Assignment submission portal',
        'Certificate generation',
      ],
      liveLink: 'https://www.tcsion.com/hub/iit-kgp-certificate-program/hands-on-approach-to-advanced-ai/',
    },
    {
      id: 3,
      title: 'IIT Dhanbad',
      status: 'Live',
      description: 'Executive education platform delivering world-class management programs with intuitive design.',
      techStack: ['React.js', 'Node.js', 'REST APIs', 'PostgreSQL'],
      keyFeatures: [
        'Interactive course modules',
        'Progress tracking system',
        'Assessment portal',
        'Skills assessment engine',
      ],
      liveLink: 'https://www.tcsion.com/hub/iit-dhanbad-certificate-program/mastering-ai-and-natural-language-processing/',
    },
    {
      id: 4,
      title: 'Technology Awareness Test',
      status: 'Live',
      description: 'An exclusive program for students to do a self assessment',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      keyFeatures: [
        'Student information system',
        'Faculty management',
        'Academic calendar',
        'Resource management',
      ],
      liveLink: 'https://www.tcsion.com/hub/technology-awareness-test/',
    },
    {
      id: 5,
      title: 'Biometric Attendance System',
      status: 'Completed',
      description:
        'Developed a fingerprint-based attendance system using an Arduino microcontroller to record student attendance securely and accurately.',
      techStack: ['Arduino', 'C++', 'Embedded Systems'],
      keyFeatures: [
        'Fingerprint recognition',
        'Secure data storage',
        'Real-time attendance tracking',
        'Admin dashboard',
      ],
      liveLink: null,
    },
    {
      id: 6,
      title: 'Electricity Generation Using Footsteps',
      status: 'Completed',
      description:
        'Designed a system using piezoelectric sensors to harness energy from footsteps, providing an eco-friendly power solution for high-footfall areas.',
      techStack: ['Piezoelectric Sensors', 'IoT', 'Renewable Energy'],
      keyFeatures: [
        'Energy harvesting',
        'Sensor integration',
        'Power optimization',
        'Environmental monitoring',
      ],
      liveLink: null,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "I've had the chance to work with Bhargavi on several critical sprints. Even under tight deadlines, she remained focused, calm, and delivered results without compromising on quality.",
      shortQuote: 'Focused, calm, and delivered results without compromising on quality.',
      author: 'Omkar Raut',
      title: 'Front-End developer',
      company: 'Tata Consultancy Services',
      avatar: '/Omkar.jpeg',
    },
    {
      id: 2,
      quote:
        "Working with Bhargavi was a pleasure. Her attention to detail and proactive approach to problem-solving significantly improved our team's efficiency. She consistently delivers high-quality, maintainable code.",
      shortQuote: 'Attention to detail and proactive problem-solving improved efficiency.',
      author: 'Mounika Vangali',
      title: 'Front-End Developer',
      company: 'Ex-TCSer',
      avatar: '/Mounika.jpeg',
    },
    {
      id: 3,
      quote:
        "I was particularly impressed by Bhargavi's dedication to performance optimization. Her contributions led to a noticeable improvement in our application's loading times and overall user satisfaction.",
      shortQuote: 'Dedication to performance optimization led to noticeable improvements.',
      author: 'Kavita Tummagunta',
      title: 'Front-End Developer',
      company: 'Tata Consultancy Services',
      avatar: '/kavitha.jpeg',
    },
    {
      id: 4,
      quote:
        "Bhargavi's ability to quickly grasp complex requirements and translate them into elegant front-end solutions is truly remarkable. A valuable asset to any team.",
      shortQuote: 'Quickly grasps complex requirements and translates them into elegant solutions.',
      author: 'Navya Bitra',
      title: 'Front-End Developer',
      company: 'Tata Consultancy Services',
      avatar: '/Navya.jpeg',
    },
    {
      id: 5,
      quote:
        'Her commitment to writing clean, maintainable code and her collaborative spirit make Bhargavi an outstanding developer. Highly recommend working with her!',
      shortQuote: 'Commitment to clean code and collaborative spirit make her outstanding.',
      author: 'Sahithi Mattagunja',
      title: 'Senior Engineer',
      company: 'Tata Consultancy Services',
      avatar: '/Sahithi.jpeg',
    },
    {
      id: 6,
      quote:
        'Bhargavi consistently exceeded expectations, delivering robust and user-friendly features. Her technical expertise and dedication are top-notch.',
      shortQuote: 'Exceeded expectations, delivering robust and user-friendly features.',
      author: 'Akhila Myaka',
      title: 'Front-End Developer',
      company: 'Ex-TCSer',
      avatar: '/Akhila.jpeg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <TriangleLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter antialiased">
      <nav className="fixed w-full z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            &lt;Bhargavi Ega /&gt;
          </a>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleScrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              About
            </button>
            <button
              onClick={() => handleScrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Skills
            </button>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-4 0v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3 7h18"
                ></path>
              </svg>
              Projects
            </button>
            <button
              onClick={() => handleScrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.702 9.702 0 0112 4c4.97 0 9 3.582 9 8z"
                ></path>
              </svg>
              Testimonials
            </button>
            <a
              href="/Ega-Bhargavi-Resume.pdf"
              target="_blank" // This attribute opens the link in a new tab
              rel="noopener noreferrer" // This is a security best practice
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 4h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m8 0V2m0 2a2 2 0 012 2v2m-6-2v2m0-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2m0 0h.01M12 12h.01"
                ></path>
              </svg>
              Resume
            </a>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7"
                ></path>
              </svg>
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="hero" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="text-center p-8 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
              Hi, I'm <span className="text-teal-400">Bhargavi Ega</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
              A Front-End Developer crafting delightful user experiences with{' '}
              <span className="text-blue-400 font-semibold">React</span>.
            </p>
            <p className="text-md sm:text-lg text-gray-400 mb-10 animate-fade-in-up delay-400">
              Transforming complex challenges into elegant, high-performance web solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-600">
              <button
                onClick={() => handleScrollToSection('projects')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <a
                href="/Ega-Bhargavi-Resume.pdf"
                target="_blank" // This attribute opens the link in a new tab
                rel="noopener noreferrer" // This is a security best practice
                download="Bhargavi_Ega_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download Resume
              </a>
            </div>
            <div className="flex justify-center items-center gap-6 mt-8 animate-fade-in-up delay-700">
              <a
                href="https://github.com/bhargaviega"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.342 1.087 2.91.831.091-.645.356-1.087.653-1.334-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.988 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.023A9.489 9.489 0 0110 4.877c.85.004 1.7.112 2.508.329 1.909-1.293 2.747-1.023 2.747-1.023.546 1.378.202 2.397.099 2.65a3.736 3.736 0 011.029 2.686c0 3.841-2.339 4.681-4.566 4.935.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.577.688.484C17.13 18.156 20 14.417 20 10.017A10.017 10.017 0 0010 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bhargaviega/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                href="mailto:bhargaviega22@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Email Me"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <LazySection id="about">
          <section className="py-16 bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/Bhargavi.jpg"
                    alt="Bhargavi Ega"
                    className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-teal-500 no-download-image"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                <div className="md:w-2/3 text-lg leading-relaxed text-gray-300">
                  <p className="mb-4">
                    Hello! I'm a passionate Front-End Developer with 3 years of experience,
                    currently honing my skills at <span className="font-semibold text-teal-300">TCS iON</span>. I specialize
                    in building captivating and highly functional web applications using modern JavaScript frameworks.
                  </p>
                  <p className="mb-4">
                    At TCS iON, I've had the privilege of contributing to several major projects, where I've gained
                    hands-on experience in architecting scalable solutions, optimizing performance, and ensuring
                    seamless user experiences. I thrive on solving complex problems and transforming innovative ideas
                    into tangible, user-centric products.
                  </p>
                  <p>
                    My goal is to leverage my expertise in React and front-end development to contribute to impactful
                    products at leading MNCs, innovative startups, or dynamic product-based companies. I'm always
                    eager to learn new technologies and grow as a full-stack professional.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection id="skills">
          <section className="py-16 bg-gray-900 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 mr-3 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-teal-400">Front-End</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                    <li>React.js (3+ years experience)</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS, Styled Components</li>
                    <li>Redux, React Context API</li>
                    <li>Responsive Design</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-4-4h.01M17 16h.01"
                      ></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-blue-400">Back-End (Familiarity)</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                    <li>Node.js & Express.js</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>RESTful APIs</li>
                    <li>Basic understanding of GraphQL</li>
                    <li>Authentication & Authorization</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 mr-3 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4M4 11l7 7 7-7m-4-4l-4 4L8 7"
                      ></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-purple-400">Tools & Others</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                    <li>Git & GitHub</li>
                    <li>Webpack, Vite</li>
                    <li>NPM, Yarn</li>
                    <li>VS Code</li>
                    <li>Agile Methodologies</li>
                    <li>CI/CD Concepts</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection id="projects">
          <section className="py-16 bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${project.status === 'Live' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 text-base leading-relaxed">{project.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <span key={index} className="bg-teal-700 text-teal-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.keyFeatures && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-300 mb-2">Key Features:</h4>
                          <ul className="list-disc list-inside text-gray-400 space-y-1">
                            {project.keyFeatures.map((feature, index) => (
                              <li key={index} className="text-sm">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex gap-4 mt-6">
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                            View Live Demo
                          </a>
                        ) : (
                          <a
                            href="#"
                            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 px-4 rounded-md transition-colors duration-300 text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            View Details
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection id="testimonials">
          <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700 text-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-4xl font-bold text-center text-white mb-4">Voices That Inspire</h2>
              <p className="text-center text-gray-300 mb-12">
                Hear directly from those who’ve collaborated with me - their words say it best.
              </p>

              <div className="relative max-w-3xl mx-auto">
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 w-full transition-all duration-500 ease-in-out">
                  {testimonials.length > 0 && (
                    <div key={currentTestimonialIndex} className="animate-fade-in">
                      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
                        <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg">
                          <img
                            src={testimonials[currentTestimonialIndex].avatar}
                            alt={testimonials[currentTestimonialIndex].author}
                            className="w-full h-full object-cover no-download-image"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>
                        <div className="flex-grow relative">
                          <span className="absolute -top-4 left-0 text-7xl font-bold text-teal-600 opacity-20 transform -translate-x-1/4 -translate-y-1/4">
                            “
                          </span>
                          <blockquote className="text-xl sm:text-2xl italic text-gray-100 mb-4 leading-relaxed pt-4">
                            "{testimonials[currentTestimonialIndex].quote}"
                          </blockquote>
                          <p className="font-semibold text-white text-lg">
                            {testimonials[currentTestimonialIndex].author}
                          </p>
                          <p className="text-md text-gray-400">
                            {testimonials[currentTestimonialIndex].title},{' '}
                            {testimonials[currentTestimonialIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {testimonials.length === 0 && (
                    <p className="text-gray-400">No testimonials to display yet. Add some to the 'testimonials' array!</p>
                  )}
                </div>

                <button
                  onClick={prevTestimonial}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 focus:outline-none z-20 hidden md:block"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 focus:outline-none z-20 hidden md:block"
                  aria-label="Next Testimonial"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <div className="flex justify-center gap-4 mt-8 md:hidden">
                  <button
                    onClick={prevTestimonial}
                    className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 focus:outline-none"
                    aria-label="Previous Testimonial"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 focus:outline-none"
                    aria-label="Next Testimonial"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection id="contact">
          <section className="py-16 bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-300 mb-10">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                <a
                  href="mailto:bhargaviega22@gmail.com"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7"
                    ></path>
                  </svg>
                  Email Me
                </a>
                <a
                  href="https://github.com/bhargaviega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.342 1.087 2.91.831.091-.645.356-1.087.653-1.334-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.988 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.023A9.489 9.489 0 0110 4.877c.85.004 1.7.112 2.508.329 1.909-1.293 2.747-1.023 2.747-1.023.546 1.378.202 2.397.099 2.65a3.736 3.736 0 011.029 2.686c0 3.841-2.339 4.681-4.566 4.935.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .268.18.577.688.484C17.13 18.156 20 14.417 20 10.017A10.017 10.017 0 0010 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bhargaviega/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-12">
                &copy; {new Date().getFullYear()} Bhargavi Ega. All rights reserved.
              </p>
            </div>
          </section>
        </LazySection>
      </main>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
          .no-download-image {
            pointer-events: none;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }

          /* Triangle Loader Styles */
          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0d1117; /* Matches the dark background */
            z-index: 9999;
          }
          .triangle-loader {
            position: relative;
            width: 80px;
            height: 80px;
            animation: rotate 2s linear infinite;
          }
          .dot {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #4FD1C5; /* Teal color */
            animation: dot-move 2s ease-in-out infinite;
          }
          .dot-1 {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            animation-delay: 0s;
          }
          .dot-2 {
            bottom: 0;
            left: 0;
            animation-delay: 0.5s;
          }
          .dot-3 {
            bottom: 0;
            right: 0;
            animation-delay: 1s;
          }
          @keyframes rotate {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
          }
          @keyframes dot-move {
            0%, 100% {
              transform: translateX(0);
              opacity: 1;
            }
            25% {
              transform: translateY(70px) translateX(-35px);
              opacity: 0.2;
            }
            50% {
              transform: translateY(70px) translateX(35px);
              opacity: 0.2;
            }
            75% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;