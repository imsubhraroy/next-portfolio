import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Star, Eye, GitBranch, Grid3X3, List } from 'lucide-react';

const ProjectViewPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    // Sample project data
    const currentProject = {
        id: 1,
        title: "AI-Powered Task Manager",
        subtitle: "Revolutionizing productivity with intelligent automation",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/user/project",
        description: "A cutting-edge task management application that leverages artificial intelligence to predict task priorities, suggest optimal scheduling, and automate routine workflows. Built with modern web technologies and a focus on user experience.",
        technologies: [
            { name: "React", icon: "⚛️", color: "text-blue-400" },
            { name: "TypeScript", icon: "📘", color: "text-blue-600" },
            { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
            { name: "Node.js", icon: "🟢", color: "text-green-500" },
            { name: "MongoDB", icon: "🍃", color: "text-green-600" },
            { name: "OpenAI API", icon: "🤖", color: "text-purple-500" }
        ],
        features: [
            {
                title: "Smart Prioritization",
                description: "AI analyzes your tasks and automatically prioritizes them based on deadlines and importance",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
            },
            {
                title: "Intelligent Scheduling",
                description: "Suggests optimal time slots for tasks based on your productivity patterns",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
            },
            {
                title: "Team Collaboration",
                description: "Real-time collaboration tools with smart task delegation and progress tracking",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
            }
        ],
        stats: {
            stars: 1249,
            forks: 87,
            views: 5420
        }
    };

    const otherProjects = [
        {
            id: 2,
            title: "E-Commerce Dashboard",
            subtitle: "Modern admin panel with analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            tech: ["Vue.js", "Laravel", "MySQL"]
        },
        {
            id: 3,
            title: "Social Media App",
            subtitle: "Connect and share with friends",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
            tech: ["React Native", "Firebase", "Redux"]
        },
        {
            id: 4,
            title: "Weather Forecast",
            subtitle: "Beautiful weather visualization",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
            tech: ["JavaScript", "Chart.js", "API"]
        },
        {
            id: 5,
            title: "Crypto Tracker",
            subtitle: "Real-time cryptocurrency monitoring",
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop",
            tech: ["React", "WebSocket", "TradingView"]
        }
    ];

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen transition-all duration-500 ${isDarkMode
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
            }`}>
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-opacity-20">
                <div className={`${isDarkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
                    } transition-colors duration-300`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <button className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${isDarkMode
                                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}>
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Back to Projects</span>
                            </button>

                            <button
                                onClick={toggleTheme}
                                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDarkMode
                                        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                                        : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}
                            >
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="mb-16">
                    <div className="text-center mb-8 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-pulse">
                            {currentProject.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 animate-slide-up">
                            {currentProject.subtitle}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Project Image */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="space-y-8">
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={currentProject.demoUrl}
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <Eye className="w-5 h-5" />
                                    <span>View Live Demo</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>

                                <a
                                    href={currentProject.githubUrl}
                                    className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDarkMode
                                            ? 'border-gray-600 text-white hover:bg-gray-800'
                                            : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <Github className="w-5 h-5" />
                                    <span>View Source</span>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex space-x-8">
                                <div className="flex items-center space-x-2 text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="font-semibold">{currentProject.stats.stars.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-500">
                                    <GitBranch className="w-5 h-5" />
                                    <span className="font-semibold">{currentProject.stats.forks}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-green-500">
                                    <Eye className="w-5 h-5" />
                                    <span className="font-semibold">{currentProject.stats.views.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <section className="mb-16">
                    <div className={`p-8 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/70'
                        } backdrop-blur-sm border border-opacity-20`}>
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Project Overview
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            {currentProject.description}
                        </p>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Technologies Used
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {currentProject.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${isDarkMode ? 'bg-gray-800/70' : 'bg-white/80'
                                    } backdrop-blur-sm border border-opacity-20`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-3xl mb-3">{tech.icon}</div>
                                <div className={`font-semibold ${tech.color}`}>{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentProject.features.map((feature, index) => (
                            <div
                                key={index}
                                className={`group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/70'
                                    } backdrop-blur-sm border border-opacity-20`}
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-purple-400">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Other Projects Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Explore More Projects
                        </h2>
                        <div className="flex items-center space-x-4">
                            <select
                                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${isDarkMode
                                        ? 'bg-gray-800 border-gray-600 text-white'
                                        : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                            >
                                <option>All Projects</option>
                                <option>Web Apps</option>
                                <option>Mobile Apps</option>
                                <option>APIs</option>
                            </select>
                            <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                                            ? 'bg-purple-500 text-white'
                                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    <Grid3X3 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                                            ? 'bg-purple-500 text-white'
                                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`grid gap-6 ${viewMode === 'grid'
                            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                            : 'grid-cols-1'
                        }`}>
                        {otherProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/70'
                                    } backdrop-blur-sm border border-opacity-20 ${viewMode === 'list' ? 'flex' : ''
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-40' : 'h-48'
                                    }`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.subtitle}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Custom Animations */}
            <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `}</style>
        </div>
    );
};

export default ProjectViewPage;