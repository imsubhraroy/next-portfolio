'use client';
import { useEffect, useState } from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Services from "./components/services";
import Skills from "./components/skills";
import Projects from "./components/projects/project";
import Freelancing from "./components/frelancing";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem('theme');
  return saved === 'true'; // Simple string comparison
});

const toggleTheme = () => {
  setIsDark(prevTheme => {
    const newTheme = !prevTheme;
    localStorage.setItem('theme', newTheme.toString());
    return newTheme;
  });
};

  useEffect(() => {
    const scrollbarStyles = isDark ? `
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1e293b;
        border-radius: 6px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        border-radius: 6px;
        border: 2px solid transparent;
        background-clip: content-box;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        background-clip: content-box;
      }
      
      ::-webkit-scrollbar-corner {
        background: #1e293b;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: #fbbf24 #1e293b;
      }
    ` : `
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 6px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #6366f1;
        border-radius: 6px;
        border: 2px solid transparent;
        background-clip: content-box;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #4f46e5;
        background-clip: content-box;
      }
      
      ::-webkit-scrollbar-corner {
        background: #f1f5f9;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: #6366f1 #f1f5f9;
      }
    `;

    // Remove existing scrollbar styles
    const existingStyle = document.getElementById('custom-scrollbar-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add new scrollbar styles
    const styleElement = document.createElement('style');
    styleElement.id = 'custom-scrollbar-styles';
    styleElement.textContent = scrollbarStyles;
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      const styleToRemove = document.getElementById('custom-scrollbar-styles');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [isDark]);

  return (
    <div className="overflow-x-hidden" data-theme={isDark ? "dark" : "light"}>
      <Header isDarkMode={isDark} setTheme={toggleTheme}>
        <HeroSection isDarkMode={isDark} />
        <About isDarkMode={isDark} />
        <Education isDarkMode={isDark} />
        <Experience isDarkMode={isDark} />
        <Services isDarkMode={isDark} />
        <Skills isDarkMode={isDark} />
        <Projects isDarkMode={isDark} />
        <Freelancing isDarkMode={isDark} />
        <Contact isDarkMode={isDark} />
        <Footer isDarkMode={isDark} />
      </Header>
    </div>
  );
}
