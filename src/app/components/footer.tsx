'use client';
import { useState } from "react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { ArrowRight, Facebook, Github, Heart, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {

    const [hoveredLink, setHoveredLink] = useState('');
    const currentYear: string = new Date().getFullYear().toString();
    const footerLinks = {
        links: [
            { name: 'Home', href: '#' },
            { name: 'About', href: '#about' },
            { name: 'Services', href: '#service' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
        ],
        services: [
            { name: 'Web Design', href: '#' },
            { name: 'Web Development', href: '#' },
            { name: 'App Development', href: '#' }
        ]
    };

    const socialLinks = [
        { Icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
        { Icon: Github, href: '#', color: 'hover:text-gray-600' },
        { Icon: Facebook, href: '#', color: 'hover:text-blue-600' },
        { Icon: Instagram, href: '#', color: 'hover:text-pink-500' }
    ];


    return (
        <div className={isDarkMode ? 'dark' : ''} id="experience">
            <div className={`transition-all duration-700 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {/* Main Content Area */}
                <div className="pt-20 pb-8">
                    <div className="mx-auto px-6">
                        <div className={`rounded-3xl p-12 transition-all duration-700 ${isDarkMode
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-gray-900/50'
                            : 'bg-gradient-to-br from-white to-gray-100 shadow-2xl shadow-gray-200/50'
                            }`}>

                            {/* Main Footer Grid */}
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">

                                {/* About Section */}
                                <div className="lg:col-span-1">
                                    <h3 className={`text-xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        About
                                    </h3>
                                    <div className="space-y-4">
                                        <p className={`leading-relaxed transition-all duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                        </p>

                                        {/* Animated Social Links */}
                                        <div className="flex space-x-4 pt-4">
                                            {socialLinks.map(({ Icon, href, color }, index) => (
                                                <a
                                                    key={index}
                                                    href={href}
                                                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDarkMode
                                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                                        } ${color}`}
                                                    style={{
                                                        animationDelay: `${index * 100}ms`
                                                    }}
                                                >
                                                    <Icon size={18} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Links Section */}
                                <div>
                                    <h3 className={`text-xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Links
                                    </h3>
                                    <ul className="space-y-3">
                                        {footerLinks.links.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.href}
                                                    onMouseEnter={() => setHoveredLink(`links-${index}`)}
                                                    onMouseLeave={() => setHoveredLink('')}
                                                    className={`group flex items-center transition-all duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                                        }`}
                                                >
                                                    <ArrowRight
                                                        size={16}
                                                        className={`mr-2 transition-all duration-300 ${hoveredLink === `links-${index}` ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                                                            }`}
                                                    />
                                                    <span className={`transition-all duration-300 ${hoveredLink === `links-${index}` ? 'translate-x-2' : ''
                                                        }`}>
                                                        {link.name}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Services Section */}
                                <div>
                                    <h3 className={`text-xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Services
                                    </h3>
                                    <ul className="space-y-3">
                                        {footerLinks.services.map((service, index) => (
                                            <li key={index}>
                                                <a
                                                    href={service.href}
                                                    onMouseEnter={() => setHoveredLink(`services-${index}`)}
                                                    onMouseLeave={() => setHoveredLink('')}
                                                    className={`group flex items-center transition-all duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                                        }`}
                                                >
                                                    <ArrowRight
                                                        size={16}
                                                        className={`mr-2 transition-all duration-300 ${hoveredLink === `services-${index}` ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                                                            }`}
                                                    />
                                                    <span className={`transition-all duration-300 ${hoveredLink === `services-${index}` ? 'translate-x-2' : ''
                                                        }`}>
                                                        {service.name}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact Section */}
                                <div>
                                    <h3 className={`text-xl font-bold mb-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        Have a Questions?
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3 group">
                                            <MapPin
                                                size={18}
                                                className={`mt-1 transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                                    }`}
                                            />
                                            <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                                }`}>
                                                Hasnabad, 24 P.G.S(N),<br />
                                                West Bengal, India, 743426
                                            </p>
                                        </div>

                                        <a
                                            href="tel:+918927837533"
                                            className="flex items-center space-x-3 group transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <Phone
                                                size={18}
                                                className={`transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                                                    }`}
                                            />
                                            <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                                }`}>
                                                +918927837533
                                            </span>
                                        </a>

                                        <a
                                            href="mailto:subhraroy894@gmail.com"
                                            className="flex items-center space-x-3 group transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <Mail
                                                size={18}
                                                className={`transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'text-red-400' : 'text-red-600'
                                                    }`}
                                            />
                                            <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                                }`}>
                                                subhraroy894@gmail.com
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Divider with Animation */}
                            <div className={`border-t transition-colors duration-500 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                                }`}>
                                <div className={`h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent `}></div>
                            </div>

                            {/* Copyright Section */}
                            <div className="pt-8">
                                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
                                    <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        Copyright © {currentYear} All rights reserved |{' '}
                                        <span className="inline-flex items-center">
                                            Made with{' '}
                                            <Heart
                                                size={16}
                                                className="mx-1 text-red-500 animate-pulse"
                                                fill="currentColor"
                                            />
                                            by Subhra
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}