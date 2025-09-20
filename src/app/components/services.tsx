'use client';
import { useEffect, useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { Beaker, Lightbulb, Search } from "lucide-react";

export default function Services({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            icon: Search,
            title: "WEB DESIGN",
            description: "Creating stunning, user-friendly websites that captivate and convert visitors into customers."
        },
        {
            icon: Beaker,
            title: "APP DEVELOPER",
            description: "Building powerful mobile applications that deliver seamless user experiences across platforms."
        },
        {
            icon: Lightbulb,
            title: "WEB DEVELOPER",
            description: "Developing robust web solutions with cutting-edge technologies and best practices."
        }
    ];
    return (
        <div className={isDarkMode ? 'dark' : ''} id="services">
            <div className={` transition-all duration-700 ${isDarkMode
                ? 'bg-gray-900'
                : 'bg-gradient-to-br from-blue-50 to-indigo-100'
                }`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, ${isDarkMode ? '#fbbf24' : '#3b82f6'} 2px, transparent 0), radial-gradient(circle at 75% 75%, ${isDarkMode ? '#fbbf24' : '#3b82f6'} 1px, transparent 0)`,
                            backgroundSize: '60px 60px'
                        }}>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className={`text-6xl md:text-7xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            } ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Services
                        </h1>
                        <div className={`text-4xl md:text-5xl font-bold transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            } ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                            Services
                        </div>
                        <div className={`w-24 h-1 mx-auto mt-8 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
                            } ${isDarkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}></div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-700 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                        } ${isDarkMode
                                            ? 'bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50'
                                            : 'bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg'
                                        }`}
                                    style={{
                                        transitionDelay: `${600 + index * 200}ms`
                                    }}
                                >
                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 ${isDarkMode
                                        ? 'bg-gradient-to-br from-yellow-400/10 to-orange-500/10'
                                        : 'bg-gradient-to-br from-blue-500/10 to-purple-600/10'
                                        }`}></div>

                                    {/* Animated Border */}
                                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isDarkMode
                                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                                        } opacity-0 group-hover:opacity-100`}
                                        style={{ padding: '2px' }}>
                                        <div className={`w-full h-full rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                                            }`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode
                                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black'
                                            : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                                            }`}>
                                            <Icon size={32} className="transition-transform duration-500 group-hover:rotate-12" />
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-xl font-bold mb-4 tracking-wide transition-colors duration-300 ${isDarkMode
                                            ? 'text-white group-hover:text-yellow-400'
                                            : 'text-gray-900 group-hover:text-blue-600'
                                            }`}>
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`text-sm leading-relaxed transition-all duration-300 ${isDarkMode
                                            ? 'text-gray-400 group-hover:text-gray-300'
                                            : 'text-gray-600 group-hover:text-gray-700'
                                            }`}>
                                            {service.description}
                                        </p>

                                        {/* Animated Dots */}
                                        <div className="flex space-x-1 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-yellow-400' : 'bg-blue-500'
                                                        }`}
                                                    style={{
                                                        animationDelay: `${i * 100}ms`,
                                                        animation: 'pulse 1.5s ease-in-out infinite'
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Decoration */}
                    <div className={`mt-16 flex space-x-4 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 cursor-pointer ${isDarkMode
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                                    }`}
                                style={{
                                    animationDelay: `${i * 200}ms`,
                                    animation: 'bounce 2s ease-in-out infinite'
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Custom Keyframes */}
                <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
            </div>
        </div>
    )
}