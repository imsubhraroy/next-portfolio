'use client';
import { useRef, useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { CheckCircle, Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send, User, Wrench } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [state, handleSubmit] = useForm("xknlnwzy");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
        if (state) {
            setIsSubmitted(true);
            // Reset form immediately when submission succeeds
            if (formRef.current) {
                formRef.current.reset();
            }

            // Reset the submitted state after 3 seconds
            const timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);

            return () => clearTimeout(timer);
        }

    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'ADDRESS',
            content: ['Hasnabad, 24 P.G.S(N),', 'West Bengal, India,', '743426'],
            color: 'from-amber-400 to-orange-500'
        },
        {
            icon: Phone,
            title: 'CONTACT NUMBER',
            content: ['+918927837533'],
            color: 'from-blue-400 to-cyan-500'
        },
        {
            icon: Mail,
            title: 'EMAIL ADDRESS',
            content: ['subhraroy894@gmail.com'],
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: Globe,
            title: 'WEBSITE',
            content: ['subhraroy.com'],
            color: 'from-purple-400 to-violet-500'
        }
    ];

    const themeClasses = isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900';
    return (
        <div className={isDarkMode ? 'dark' : ''} id="contact">
            <div className={`transition-all duration-700 ${themeClasses} relative overflow-hidden`}>
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-300'} blur-3xl animate-pulse`}></div>
                    <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-300'} blur-3xl animate-pulse delay-1000`}></div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 ${isDarkMode ? 'bg-green-500' : 'bg-green-300'} blur-3xl animate-pulse delay-500`}></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 py-16">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-6xl md:text-7xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                                Contact
                            </span>
                            <br />
                            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-5xl md:text-6xl`}>
                                Me
                            </span>
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isDarkMode
                                            ? 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'
                                            : 'bg-white/80 hover:bg-white border border-gray-200'
                                            } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
                                        style={{
                                            animationDelay: `${index * 150}ms`,
                                            animation: 'slideInUp 0.6s ease-out forwards'
                                        }}
                                    >
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className={`p-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className={`text-sm font-semibold tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {item.title}
                                            </h3>
                                            <div className="space-y-1">
                                                {item.content.map((line, lineIndex) => (
                                                    <p key={lineIndex} className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} group-hover:text-white transition-colors duration-300`}>
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Illustration */}
                            <div className="flex justify-center animate-float">
                                <div className={`relative p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/30' : 'bg-white/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'}`}>
                                    <div className="flex items-center space-x-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                                                <User className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex space-x-2">
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                                                    <Clock className="w-4 h-4 text-white" />
                                                </div>
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                                                    <Wrench className="w-4 h-4 text-white" />
                                                </div>
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'}`}>
                                                    <MessageCircle className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                            <div className={`w-16 h-12 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-8">
                            <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/80 border-gray-200'} backdrop-blur-sm border shadow-2xl`}>
                                <form onSubmit={onSubmit} id="myForm" ref={formRef}>
                                    <div className="space-y-6">
                                        <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Your Name"
                                            className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-gray-700'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-50'
                                                } border-2 focus:outline-none`}
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            placeholder="Your Email"
                                            className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:bg-gray-700'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:bg-gray-50'
                                                } border-2 focus:outline-none`}
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            required
                                            placeholder="Subject"
                                            className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-gray-700'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-gray-50'
                                                } border-2 focus:outline-none`}
                                        />
                                        <ValidationError
                                            prefix="Subject"
                                            field="subject"
                                            errors={state.errors}
                                        />

                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message"
                                            required
                                            rows={6}
                                            className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none ${isDarkMode
                                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-400 focus:bg-gray-700'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:bg-gray-50'
                                                } border-2 focus:outline-none`}
                                        ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                        <button
                                            type="submit" disabled={state.submitting || isSubmitted}
                                            className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${isSubmitted
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 dark:from-yellow-400 dark:to-orange-500 dark:hover:from-yellow-500 dark:hover:to-orange-600 text-white'
                                                } shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
                                        >
                                            {isSubmitted ? (
                                                <>
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>MESSAGE SENT!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>SEND MESSAGE</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <style >{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
            </div>
        </div >
    )
}