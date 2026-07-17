import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <a href="#home" className="text-3xl font-bold text-white tracking-tighter mb-8">
          Nabiha<span className="text-blue-500">.</span>
        </a>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2 mb-2">
          Made with <FaHeart className="text-red-500" /> by Nabiha Zainab
        </p>
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Nabiha Zainab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
