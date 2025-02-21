import React from 'react';
import { Github, BookOpen, Mail } from 'lucide-react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="cursor-pointer text-emerald-700 hover:text-emerald-500 transition-all duration-500 relative group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-500"></span>
  </a>
);

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-800">
            Biswajit Banerjee
          </span>
        </a>

        <div className="hidden md:flex gap-8">
          <NavItem href="#research">Research</NavItem>
          <NavItem href="#blog">Blog</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#random">Random</NavItem>
        </div>

        <div className="md:hidden">
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;