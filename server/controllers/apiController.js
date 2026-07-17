const Message = require('../models/Message');

// Mock data based on the requirements
const aboutData = {
    description: "Software Engineering undergraduate with strong interest in Software Engineering, Software Requirement Engineering, Software Quality Assurance, Mobile Application Development. Strong understanding of Object-Oriented Programming, Software Design, Requirement Analysis, Manual Testing, Automation Testing Concepts, Problem Solving, Quick Learner, Team Collaboration.",
    stats: [
        { label: "Projects", value: "8+" },
        { label: "Technologies", value: "10+" },
        { label: "Experience", value: "2023–Present" },
    ]
};

const skillsData = {
    "Programming Languages": ["C++", "Java", "Python", "JavaScript", "SQL"],
    "Frontend": ["HTML", "CSS", "React"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "Flutter", "Firebase", "SQFLite"],
    "Testing & QA": ["Selenium", "JMeter"],
    "Tools": ["Git", "GitHub", "Docker", "VS Code", "Android Studio", "IntelliJ", "Packet Tracer", "Draw.io", "StarUML", "Figma", "Canva", "Jira", "ClickUp", "Taiga"],
    "AI Tools": ["ChatGPT", "Claude AI"]
};

const projectsData = [
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
    },
    {
        title: "Hostel Roommate Matching System",
        description: "Currently Developing",
        technologies: [],
        githubUrl: "#",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop"
    }
];

const educationData = [
    {
        institution: "Riphah International University",
        degree: "Bachelor of Science in Software Engineering",
        duration: "2023 – Present",
        focusAreas: ["Software Engineering", "Requirement Engineering", "Quality Assurance", "Mobile Application Development"]
    }
];

exports.getAbout = (req, res) => {
    res.json(aboutData);
};

exports.getSkills = (req, res) => {
    res.json(skillsData);
};

exports.getProjects = (req, res) => {
    res.json(projectsData);
};

exports.getEducation = (req, res) => {
    res.json(educationData);
};

exports.submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Save to DB
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

exports.subscribeNewsletter = (req, res) => {
    res.status(200).json({ success: true, message: "Subscribed successfully" });
};
