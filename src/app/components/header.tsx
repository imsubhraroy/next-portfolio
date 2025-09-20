'use client';
import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import type { HeaderInterface } from '../interfaces/headerInterFace';
import { log } from 'console';

const Header: React.FC<HeaderInterface> = ({ isDarkMode, setTheme, children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItemsInitial = [
        { name: 'Home', href: '#', isActive: true },
        { name: 'About', href: '#about', isActive: false },
        { name: 'Education', href: '#education', isActive: false },
        { name: 'Experience', href: '#experience', isActive: false },
        { name: 'Services', href: '#services', isActive: false },
        { name: 'Skills', href: '#skills', isActive: false },
        { name: 'Projects', href: '#projects', isActive: false },
        { name: 'Contact', href: '#contact', isActive: false },
    ];

    const [navItems, setNavItems] = useState(navItemsInitial);

    const toggleTheme = () => {
        setTheme();
    };

    const linkActive = (index: number) => {
        const updatedNavItems = navItems.map((item, i) => ({
            ...item,
            isActive: i === index
        }));
        setNavItems(updatedNavItems);
    };

    const linkActiveMobile = (index: number) => {
        const updatedNavItems = navItems.map((item, i) => ({
            ...item,
            isActive: i === index
        }));
        setNavItems(updatedNavItems);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
                                <span className='flex justify-center items-center'>
                                    <img className='w-16 h-16' src='/logo.png'></img> SUBHRA
                                </span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => linkActive(index)}
                                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${item.isActive
                                            ? 'dark:text-yellow-500 text-indigo-700 border-b-2 border-indigo-600 dark:border-yellow-500'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-yellow-400'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Theme Toggle & Mobile Menu Button */}
                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-yellow-400 focus:outline-none transition-colors duration-200"
                                    aria-label="Toggle mobile menu"
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => linkActiveMobile(index)}
                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${item.isActive
                                            ? 'dark:text-yellow-500 text-indigo-700   bg-indigo-50 dark:bg-gray-800'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-yellow-400 hover:bg-indigo-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {children}
        </div>
    );
}

export default Header;