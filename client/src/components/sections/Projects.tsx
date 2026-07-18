import { motion } from 'framer-motion';

const defaultProjects = [
    {
        title: "PromptCut",
        description: "AI-powered video editing platform allowing users to upload videos and edit them using natural language prompts.",
        technologies: ["Flutter", "Python", "FastAPI", "Whisper", "MoviePy", "FFmpeg", "Google Gemini"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop",
        featured: true
    },
    {
        title: "OS Simulation System",
        description: "Operating System simulation project built with a Graphical User Interface.",
        technologies: ["Java", "Java Swing"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1074&auto=format&fit=crop"
    },
    {
        title: "Clothing Management System",
        description: "Object-Oriented Programming (OOP) project featuring a graphical user interface and XAMPP database integration.",
        technologies: ["Java", "Java Swing", "XAMPP", "MySQL"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop"
    },
    {
        title: "Library Management System (C++)",
        description: "Console-based CRUD application with file handling.",
        technologies: ["C++"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1290&auto=format&fit=crop"
    },
    {
        title: "Car Racing Game",
        description: "Multi-scene racing game with score system.",
        technologies: ["Unity", "C#"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1170&auto=format&fit=crop"
    },
    {
        title: "E-Bookstore",
        description: "Responsive web application for book browsing.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop"
    },
    {
        title: "Streak Master",
        description: "Web-based habit tracking and productivity application.",
        technologies: ["React.js", "Firebase", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop"
    },
    {
        title: "Cinema Ticket Reservation System",
        description: "Software Requirements Specification documentation with UML diagrams.",
        technologies: ["UML", "Draw.io", "StarUML"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1170&auto=format&fit=crop"
    },
    {
        title: "RentalHub",
        description: "Flutter + Firebase house rental application with multi-user functionality.",
        technologies: ["Flutter", "Firebase"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop"
    },
    {
        title: "EMU-8086 Hangman",
        description: "Assembly language console game.",
        technologies: ["Assembly", "EMU-8086"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop"
    },
    {
        title: "Library Management System Database",
        description: "Relational database project with CRUD operations.",
        technologies: ["SQL"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1173&auto=format&fit=crop"
    },
    {
        title: "AI-Based Air Drawing System",
        description: "Computer Vision + Hand Gesture Recognition.",
        technologies: ["Python", "OpenCV"],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1170&auto=format&fit=crop"
    }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured <span className="text-purple-500">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className={`group bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden border ${project.featured ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : 'border-slate-700/50'} hover:border-purple-500/80 transition-all duration-300 flex flex-col h-full`}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-medium bg-slate-900/80 text-cyan-400 px-2 py-1 rounded-md border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
