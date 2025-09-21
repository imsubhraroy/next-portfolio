'use client';
import { Briefcase, ExternalLink, Github, Home, Truck, Video } from "lucide-react";
import type { HeaderInterface } from "../../interfaces/headerInterFace";
import { useState } from "react";


export default function Projects({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "Service Platform",
            description: "Service request platform with technician assignment and tracking",
            tech: ["php", "MySQL", "HTML", 'CSS'],
            category: "Web Development",
            icon: Home,
            gradient: "from-blue-400 via-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-blue-900/20 dark:to-indigo-900/20",
            image: "🏠",
            demoUrl: "https://www.mecom.subhraroy.com/",
            githubUrl: "https://github.com/imsubhraroy/CRM-eCommerce"
        },
        {
            id: 2,
            title: "Human Resource Management System",
            description: "Comprehensive Human management system with analytics and reporting",
            tech: ["Angular.js", "Laravel", "MySQL", 'Tailwind CSS'],
            category: "Enterprise Solution",
            icon: Briefcase,
            gradient: "from-green-400 via-blue-500 to-purple-600",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
            image: "🤵‍♀️",
            demoUrl: "https://www.kormabani.subhraroy.com/",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Ambulance Management System",
            description: "Ambulance Management System with real-time tracking and dispatch",
            tech: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
            category: "Healthcare",
            icon: Truck,
            gradient: "from-red-400 via-pink-500 to-purple-600",
            bgColor: "bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20",
            image: "🚑",
            demoUrl: "#",
            githubUrl: "https://github.com/imsubhraroy/Ambulance-Management-System"
        },
        {
            id: 4,
            title: "Video Rating Platform",
            description: "Modern video rating platform with rating of all movies and web series across OTTs",
            tech: ["React.js", "Java Script", "Tailwind CSS"],
            category: "Media & Entertainment",
            icon: Video,
            gradient: "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
            image: "📹",
            demoUrl: "https://imsubhraroy.github.io/",
            githubUrl: "https://github.com/imsubhraroy/OpenServ"
        }
    ];

    return (
        <div className={isDarkMode ? 'dark' : ''} id="projects">
            <div className={`transition-all duration-700 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
                <div className="container mx-auto px-6 py-16">
                    {/* Header with Theme Toggle */}
                    <div className="relative mb-16">
                        <h1 className={`text-5xl lg:text-9xl font-black text-center leading-none ${isDarkMode ? 'text-gray-800' : 'text-gray-200'
                            } select-none`}>
                            Projects
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'
                                } z-10`}>
                                My Projects
                            </h2>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(project.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Card Container */}
                                <div className={`
                relative h-80 rounded-3xl overflow-hidden cursor-pointer
                transform transition-all duration-500 ease-out
                ${hoveredCard === project.id ? 'scale-105 -translate-y-2' : 'scale-100'}
                ${project.bgColor}
                border border-gray-200/50 dark:border-gray-700/50
                shadow-lg hover:shadow-2xl
              `}>

                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                                     radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`
                                        }} />
                                    </div>

                                    {/* Content Overlay - Default State */}
                                    <div className={`
                  absolute inset-0 p-8 flex flex-col justify-center items-center text-center
                  transition-all duration-500 ease-out
                  ${hoveredCard === project.id ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}
                `}>
                                        <div className="text-6xl mb-4 ">
                                            {project.image}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {project.category}
                                        </p>
                                    </div>

                                    {/* Content Overlay - Hover State */}
                                    <div className={`
                  absolute inset-0 p-8 flex flex-col justify-between
                  bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm
                  transition-all duration-500 ease-out
                  ${hoveredCard === project.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}
                `}>

                                        {/* Top Section */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                                                    <project.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                        {project.title}
                                                    </h3>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Section - Action Buttons */}
                                        <div className="flex gap-3">
                                            <a className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300" href={project.demoUrl} target="_blank">
                                                <ExternalLink className="w-4 h-4" />
                                                View Demo
                                            </a>
                                            <a className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300" href={project.githubUrl} target="_blank">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Gradient Border Effect */}
                                    <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-r ${project.gradient} p-[2px] -z-10
                `}>
                                        <div className="w-full h-full rounded-3xl bg-transparent" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Elements */}
                    <div className="fixed top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
                    <div className="fixed bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-bounce" />
                    <div className="fixed top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-ping" />
                </div>

                <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            </div>
        </div>
    )
}