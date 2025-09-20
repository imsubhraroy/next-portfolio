
import type { HeaderInterface } from "../interfaces/headerInterFace";

export default function HeroSection({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <div className={`min-h-screen transition-all duration-500 flex items-center justify-center px-4 relative overflow-hidden dark:text-white
                    ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} text-gray-900`}
            >
                {/* Theme Toggle Button */}
                {/* Animated background dots/stars */}
                <div className="absolute inset-0">
                    <div className={`absolute top-1/4 left-1/4 w-1 h-1 rounded-full opacity-50 animate-pulse ${isDarkMode ? 'bg-white' : 'bg-indigo-400'
                        }`}></div>
                    <div className={`absolute top-1/3 right-1/3 w-1 h-1 rounded-full opacity-30 animate-pulse delay-700 ${isDarkMode ? 'bg-white' : 'bg-purple-400'
                        }`}></div>
                    <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full opacity-40 animate-pulse delay-1000 ${isDarkMode ? 'bg-white' : 'bg-blue-400'
                        }`}></div>
                    <div className={`absolute top-1/2 right-1/4 w-1 h-1 rounded-full opacity-35 animate-pulse delay-500 ${isDarkMode ? 'bg-white' : 'bg-pink-400'
                        }`}></div>
                </div>

                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 z-10">
                        <p className={`text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in ${isDarkMode ? 'text-yellow-400' : 'text-indigo-600'
                            }`}>
                            HELLO!
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {`I'm`} <span className={isDarkMode ? 'text-yellow-400' : 'text-indigo-600'}>Subhra Roy</span>
                        </h1>

                        <p className={`text-xl md:text-2xl mb-8 font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            A Full-Stack Developer
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="mailto:subhraroy894@gmail.com" className={`font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isDarkMode
                                ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}>
                                GET IN TOUCH
                            </a>
                            <a  href="#projects" className={`border-2 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${isDarkMode
                                ? 'border-white hover:bg-white hover:text-black'
                                : 'border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600'
                                }`}>
                                MY WORKS
                            </a>
                        </div>
                    </div>

                    {/* Right Character Illustration */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                        <div className="relative animate-float">
                            {/* Character Container with background circle */}
                            <div className="relative">
                                {/* Background decoration */}
                                <div className={`absolute inset-0 rounded-full opacity-10 transform scale-110 ${isDarkMode ? 'bg-yellow-400' : 'bg-indigo-600'
                                    }`}></div>

                                {/* Main Character SVG */}
                                <svg width="350" height="400" viewBox="0 0 350 400" className="drop-shadow-2xl relative z-10">
                                    {/* Character Body */}
                                    <g>
                                        {/* Jacket */}
                                        <path d="M120 200 L120 350 L230 350 L230 200" fill={isDarkMode ? "#6366f1" : "#4f46e5"} stroke={isDarkMode ? "#4f46e5" : "#3730a3"} strokeWidth="2" />
                                        <path d="M120 200 L140 180 L210 180 L230 200" fill={isDarkMode ? "#6366f1" : "#4f46e5"} stroke={isDarkMode ? "#4f46e5" : "#3730a3"} strokeWidth="2" />

                                        {/* Shirt */}
                                        <ellipse cx="175" cy="220" rx="35" ry="40" fill={isDarkMode ? "#f87171" : "#ef4444"} />

                                        {/* Arms */}
                                        <ellipse cx="100" cy="250" rx="20" ry="50" fill={isDarkMode ? "#6366f1" : "#4f46e5"} transform="rotate(-20 100 250)" />
                                        <ellipse cx="250" cy="250" rx="20" ry="50" fill={isDarkMode ? "#6366f1" : "#4f46e5"} transform="rotate(20 250 250)" />

                                        {/* Hands */}
                                        <circle cx="85" cy="290" r="15" fill="#fbbf24" />
                                        <circle cx="265" cy="290" r="15" fill="#fbbf24" />

                                        {/* Phone/Tablet in right hand */}
                                        <rect x="250" y="275" width="25" height="35" rx="3" fill={isDarkMode ? "#1f2937" : "#374151"} transform="rotate(15 262.5 292.5)" />
                                        <rect x="252" y="277" width="21" height="31" rx="2" fill={isDarkMode ? "#6366f1" : "#4f46e5"} transform="rotate(15 262.5 292.5)" />
                                        <circle cx="262" cy="285" r="8" fill="#e5e7eb" transform="rotate(15 262.5 292.5)" />

                                        {/* Head */}
                                        <circle cx="175" cy="120" r="45" fill="#fbbf24" />

                                        {/* Hair */}
                                        <path d="M130 100 Q175 70 220 100 Q210 85 175 80 Q140 85 130 100" fill={isDarkMode ? "#1f2937" : "#374151"} />

                                        {/* Cap */}
                                        <ellipse cx="175" cy="85" rx="50" ry="25" fill={isDarkMode ? "#6366f1" : "#4f46e5"} />
                                        <ellipse cx="175" cy="85" rx="45" ry="20" fill={isDarkMode ? "#4f46e5" : "#3730a3"} />

                                        {/* Glasses */}
                                        <circle cx="160" cy="120" r="18" fill="none" stroke={isDarkMode ? "#1f2937" : "#374151"} strokeWidth="3" />
                                        <circle cx="190" cy="120" r="18" fill="none" stroke={isDarkMode ? "#1f2937" : "#374151"} strokeWidth="3" />
                                        <line x1="178" y1="120" x2="182" y2="120" stroke={isDarkMode ? "#1f2937" : "#374151"} strokeWidth="3" />

                                        {/* Eyes */}
                                        <circle cx="160" cy="120" r="5" fill={isDarkMode ? "#1f2937" : "#374151"} />
                                        <circle cx="190" cy="120" r="5" fill={isDarkMode ? "#1f2937" : "#374151"} />
                                        <circle cx="162" cy="118" r="2" fill="white" />
                                        <circle cx="192" cy="118" r="2" fill="white" />

                                        {/* Nose */}
                                        <ellipse cx="175" cy="130" rx="2" ry="4" fill="#f59e0b" />

                                        {/* Mouth */}
                                        <path d="M165 140 Q175 150 185 140" fill="none" stroke={isDarkMode ? "#1f2937" : "#374151"} strokeWidth="2" />

                                        {/* Finger pointing */}
                                        <circle cx="75" cy="280" r="3" fill="#fbbf24" />
                                    </g>
                                </svg>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-10 -right-10 animate-bounce-slow">
                                <div className={`w-8 h-8 rounded-full opacity-60 ${isDarkMode ? 'bg-yellow-400' : 'bg-indigo-500'
                                    }`}></div>
                            </div>
                            <div className="absolute -bottom-5 -left-10 animate-bounce-slow delay-1000">
                                <div className={`w-6 h-6 rounded-full opacity-40 ${isDarkMode ? 'bg-blue-500' : 'bg-purple-500'
                                    }`}></div>
                            </div>
                            <div className="absolute top-1/4 -left-5 animate-bounce-slow delay-500">
                                <div className={`w-4 h-4 rounded-full opacity-30 ${isDarkMode ? 'bg-purple-400' : 'bg-pink-400'
                                    }`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
