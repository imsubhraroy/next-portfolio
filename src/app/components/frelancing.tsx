'use client';
import { useEffect, useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { ArrowRight } from "lucide-react";

export default function Freelancing({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={isDarkMode ? 'dark' : ''} id="experience">
            <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 via-purple-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-700">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23374151"/><stop offset="100%" style="stop-color:%23111827"/></linearGradient></defs><path d="M0,800 L200,300 L400,450 L600,200 L800,350 L1000,150 L1200,400 L1200,800 Z" fill="url(%23mountainGrad)"/><path d="M0,800 L150,400 L350,550 L550,300 L750,450 L950,250 L1200,500 L1200,800 Z" fill="%23374151" opacity="0.7"/><circle cx="900" cy="150" r="60" fill="%23FCD34D" opacity="0.8"/></svg>')`
                    }}
                />

                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20 transition-all duration-1000 ${isVisible ? 'animate-bounce' : ''
                                }`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>


                {/* Main Content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Main Heading */}
                        <h1
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            <span className="text-white">{`I'm`}</span>
                            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
                                Available
                            </span>
                            <span className="text-white"> for </span>
                            <span className="relative">
                                <span className="text-white">freelancing</span>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            Transform your ideas into reality with cutting-edge design and development solutions
                        </p>

                        {/* CTA Button */}
                        <div
                            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 text-white dark:text-black font-semibold text-lg rounded-full dark:from-amber-400 dark:to-yellow-500 dark:hover:from-amber-300 dark:hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
                                <span className="relative z-10">GET IN TOUCH</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                                {/* Animated background */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>

                        {/* Additional decorative elements */}
                        <div className="mt-16 flex justify-center space-x-8">
                            {['Design', 'Develop', 'Deploy'].map((word, index) => (
                                <div
                                    key={word}
                                    className={`text-white/60 text-sm font-medium transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${800 + index * 200}ms` }}
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Scroll indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </section>
        </div>
    )
}