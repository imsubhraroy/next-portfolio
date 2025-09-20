'use client';
import { useState } from "react";
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
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
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
  );
}
