'use client';
import { useEffect, useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { Code, Database, Globe, GraduationCap } from "lucide-react";

export default function Education({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { icon: Code, label: "Programming" },
        { icon: Globe, label: "Web Development" },
        { icon: Database, label: "Database Management" }
    ];
    return (
        <div className={isDarkMode ? 'dark' : ''} id="education">
            <div className={`min-h-screen transition-all duration-1000 ${isDarkMode
                ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
                : 'bg-gradient-to-br from-blue-50 to-indigo-100'
                }`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${isDarkMode ? 'bg-blue-500' : 'bg-indigo-300'
                        }`}></div>
                    <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
                        }`}></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full animate-ping ${isDarkMode ? 'bg-blue-400' : 'bg-indigo-400'
                                }`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
                    <div className="max-w-6xl w-full">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className={`text-6xl md:text-7xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                } ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Education
                            </h1>
                            <div className={`text-4xl md:text-5xl font-bold transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                } ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                                Education
                            </div>
                            <div className={`w-24 h-1 mx-auto mt-8 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
                                } ${isDarkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}></div>
                        </div>

                        {/* Main Card */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}>
                            <div className={`relative group  rounded-3xl p-8  shadow-2xl`}>

                                {/* Card Glow Effect */}
                                <div className={`absolute inset-0 rounded-3xl`}></div>

                                <div className="relative z-10">
                                    {/* Year Badge */}
                                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 ${isDarkMode
                                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400'
                                        : 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600'
                                        } backdrop-blur-sm border border-current/20`}>
                                        <GraduationCap size={20} />
                                        <span className="font-bold text-lg">2020-2023</span>
                                    </div>

                                    {/* Degree Title */}
                                    <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        } leading-tight`}>
                                        Bachelor of Computer Application
                                        <span className={`block text-lg mt-2 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'
                                            }`}>(BCA)</span>
                                    </h2>

                                    {/* Institution */}
                                    <div className={`text-lg font-medium mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        } tracking-wider uppercase`}>
                                        Techno Main Salt Lake
                                    </div>

                                    {/* Skills Icons */}
                                    <div className="flex gap-4 mb-8">
                                        {skills.map((skill, index) => (
                                            <div
                                                key={skill.label}
                                                className={`p-2 rounded-xl ${isDarkMode
                                                    ? 'bg-gray-700/50 text-blue-400 hover:bg-blue-500/20'
                                                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                                    } transition-all duration-300 hover:scale-110 cursor-pointer group/icon`}
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <skill.icon size={24} className="group-hover/icon:rotate-12 transition-transform duration-300" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        } mb-8`}>
                                        BCA, or Bachelor of Computer Applications, is an undergraduate degree program that focuses on computer science and its
                                        practical applications. It provides students with a strong foundation in programming, software development, computer networks,
                                        and database management. The three-year course combines theoretical knowledge with hands-on experience through practical
                                        sessions and projects.
                                    </p>

                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        BCA graduates are equipped with skills in various programming languages, problem-solving abilities, and
                                        critical thinking skills. They can pursue careers as software developers, web designers, database administrators, system analysts,
                                        or choose to further their studies in the field. BCA is an excellent choice for students passionate about technology, offering
                                        promising career opportunities in the fast-paced IT industry.
                                    </p>

                                    {/* Animated Progress Bar */}
                                    <div className="mt-8">
                                        <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                                            }`}>
                                            <div className={`h-full rounded-full animate-pulse ${isDarkMode
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                                                }`} style={{ width: '100%' }}></div>
                                        </div>
                                        <div className={`text-sm mt-2 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                            Completed (2023)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}