'use client';
import { Download } from "lucide-react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { useEffect, useState } from "react";


export default function About({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={isDarkMode ? 'dark' : ''} id="about">
            <div className="transition-all duration-500 dark:bg-gray-900 bg-gray-50">

                {/* Main Content */}
                <div className="flex items-center justify-center py-12 px-8">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Profile Image */}
                            <div className="flex justify-center lg:justify-end">
                                <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                                    }`}>
                                    <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                                        }`}></div>
                                    <div className="relative group">
                                        <img
                                            src="/male-svgrepo-com.png"
                                            alt="Profile"
                                            className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-opacity-20 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                                            } opacity-0 group-hover:opacity-10`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* About Me Content */}
                            <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                                }`}>
                                {/* Title */}
                                <div className="space-y-4">
                                    <h1 className={`text-2xl lg:text-5xl font-bold transition-colors duration-500 animate-fade-in ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        About Me
                                    </h1>
                                    <div className={`text-3xl lg:text-6xl font-black opacity-10 -mt-4 transition-colors duration-500 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'
                                        }`}>
                                        About
                                    </div>
                                </div>

                                {/* Description */}
                                <div className={`max-w-2xl transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    <p className="text-lg leading-relaxed mb-4">
                                        Passionate full-stack developer with a love for creating innovative digital solutions.
                                        I specialize in modern web technologies and enjoy turning complex problems into
                                        simple, beautiful designs.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        When I am not coding, you will find me exploring new technologies, contributing to
                                        open-source projects, or sharing knowledge with the developer community.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="group transition-all duration-300 hover:translate-x-2">
                                            <span className={`text-lg font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                                }`}>Name:</span>
                                            <span className={`ml-4 text-lg transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>Subhra Roy</span>
                                        </div>

                                        <div className="group transition-all duration-300 hover:translate-x-2">
                                            <span className={`text-lg font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                                }`}>Address:</span>
                                            <span className={`ml-4 text-lg transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>Hasnabad, 24 P.G.S(N), West Bengal, India, 743426</span>
                                        </div>

                                        <div className="group transition-all duration-300 hover:translate-x-2">
                                            <span className={`text-lg font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                                }`}>Email:</span>
                                            <span className={`ml-4 text-lg transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}><a href="mailto:subhraroy894@gmail.com">subhraroy894@gmail.com</a></span>
                                        </div>

                                        <div className="group transition-all duration-300 hover:translate-x-2">
                                            <span className={`text-lg font-semibold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                                }`}>Phone:</span>
                                            <span className={`ml-4 text-lg transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>+918927837533</span>
                                        </div>
                                    </div>

                                    {/* Download CV Button */}
                                    <div className="pt-4">
                                        <a className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-subtle" href="/Subhra Roy.pdf" download={true}>
                                            <Download size={20} className="transition-all duration-300 group-hover:translate-y-0.5 group-hover:rotate-12" />
                                            DOWNLOAD CV
                                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        </a>
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