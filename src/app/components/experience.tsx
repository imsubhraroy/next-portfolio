'use client';
import { useEffect, useRef, useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";

interface ExperienceData {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
    startDate: string;
    endDate: string;
    isActive?: boolean;
}

const experiences: ExperienceData[] = [
    {
        id: 1,
        title: "Software Developer",
        company: "Woodotale Furniture Makers",
        duration: "May 2024 - Present",
        description: "Currently working as a Software Developer, focusing on developing custom e-commerce solutions and inventory management systems for the furniture industry. Implementing modern web technologies to streamline business operations and enhance customer experience through intuitive interfaces and robust backend systems.",
        startDate: "2024-05",
        endDate: "present",
        isActive: true
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        company: "Digital Melodic",
        duration: "Jan 2023 - Apr 2024",
        description: "As a Full Stack Developer in my company, I am responsible for developing and maintaining both the frontend and backend of web applications. I work closely with cross-functional teams to design user-friendly interfaces using modern frontend frameworks like Angular or React, while also building robust backend systems with technologies like Laravel.",
        startDate: "2023-01",
        endDate: "2024-04"
    }
];

// Calculate total experience and projects (mock data for projects)
const calculateExperience = () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date();
    const years = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 365);
    return Math.floor(years * 10) / 10; // Round to 1 decimal
};

const CountUpAnimation = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isVisible, end, duration]);

    return <div ref={ref}>{count}{suffix}</div>;
};


export default function Experience({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0');
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={isDarkMode ? 'dark' : ''} id="experience">
            <div className={`min-h-screen transition-all duration-700 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${isDarkMode
                        ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20'
                        : 'bg-gradient-to-br from-purple-300/30 to-blue-300/30'
                        } blur-3xl animate-pulse`}></div>
                    <div className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full ${isDarkMode
                        ? 'bg-gradient-to-br from-pink-600/20 to-purple-600/20'
                        : 'bg-gradient-to-br from-pink-300/30 to-purple-300/30'
                        } blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10 px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Experience Title */}
                        <div className="relative mb-16">
                            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black text-center leading-none ${isDarkMode ? 'text-gray-800' : 'text-gray-200'
                                } select-none`}>
                                Experience
                            </h1>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'
                                    } z-10`}>
                                    Experience
                                </h2>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className={`text-center p-6 rounded-2xl backdrop-blur-xl ${isDarkMode ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white/40 border-gray-200/50'
                                } border`}>
                                <div className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                                    <CountUpAnimation end={calculateExperience()} suffix="+" />
                                </div>
                                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Years of Experience
                                </div>
                            </div>

                            <div className={`text-center p-6 rounded-2xl backdrop-blur-xl ${isDarkMode ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white/40 border-gray-200/50'
                                } border`}>
                                <div className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
                                    <CountUpAnimation end={15} suffix="+" />
                                </div>
                                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Projects Completed
                                </div>
                            </div>
                        </div>

                        {/* Folder Tree Experience */}
                        <div className="relative">
                            {/* Root Folder */}
                            <div className="mb-8">
                                <div className={`flex items-center text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>

                                    Professional Experience
                                </div>
                            </div>

                            {/* Experience Tree */}
                            <div className="relative pl-8">
                                {/* Vertical Line */}
                                <div className={`absolute left-4 top-0 bottom-0 w-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                                    }`}></div>

                                {experiences.map((exp, index) => (
                                    <div
                                        key={exp.id}
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        data-index={index}
                                        className={`relative mb-8 transform transition-all duration-1000 ${visibleItems.includes(index)
                                            ? 'translate-x-0 opacity-100'
                                            : 'translate-x-10 opacity-0'
                                            }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        {/* Branch Line */}
                                        <div className={`absolute left-[-2rem] top-6 w-8 h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
                                            }`}></div>

                                        {/* Branch Node */}
                                        <div className={`absolute left-[-2.25rem] top-5 w-2 h-2 rounded-full ${exp.isActive
                                            ? isDarkMode ? 'bg-green-400' : 'bg-green-500'
                                            : isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                                            }`}></div>

                                        {/* Experience Card */}
                                        <div className={`relative group transform transition-all duration-500 hover:scale-[1.02]`}>
                                            <div className={`relative rounded-2xl p-6 backdrop-blur-xl border transition-all duration-700 ${isDarkMode
                                                ? 'bg-gray-800/60 border-gray-700/50 shadow-xl hover:bg-gray-800/80'
                                                : 'bg-white/60 border-gray-200/50 shadow-xl hover:bg-white/80'
                                                }`}>

                                                {/* File Icon and Status */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-3 text-2xl">
                                                            {exp.isActive ? '📄' : '📋'}
                                                        </span>
                                                        <div>
                                                            <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'
                                                                } leading-tight`}>
                                                                {exp.title}
                                                            </h3>
                                                            <div className="flex items-center mt-1">
                                                                <span className={`text-sm font-medium tracking-wider uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                                                    }`}>
                                                                    {exp.company}
                                                                </span>
                                                                {exp.isActive && (
                                                                    <span className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                                        Current
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Date Badge */}
                                                <div className="mb-4">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${isDarkMode
                                                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                                                        : 'bg-gradient-to-r from-indigo-400 to-purple-400 text-white'
                                                        } shadow-lg`}>
                                                        {exp.duration}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                                    }`}>
                                                    {exp.description}
                                                </p>

                                                {/* Hover Effect */}
                                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode
                                                    ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10'
                                                    : 'bg-gradient-to-r from-purple-300/10 to-blue-300/10'
                                                    }`}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Action Elements */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                                } animate-bounce`}></div>
                            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'
                                } animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
                            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                                } animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}