// // src/components/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { navLinks } from '../data/staticData';
// import logo from "../assets/logo.png";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center py-4">
//                     <img src={logo} alt="logo" />
//                     <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//                         TechSolutions Pro
//                     </a>
//                     <div className="hidden md:flex space-x-8">
//                         {navLinks.map(link => 
//                             <a 
//                                 key={link.href} 
//                                 href={link.href} 
//                                 className="text-white hover:text-blue-400 transition-colors"
//                             >
//                                 {link.label}
//                             </a>
//                         )}
//                     </div>
//                     <button 
//                         className="md:hidden text-white" 
//                         onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                         aria-label="Toggle menu"
//                     >
//                         {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4">
//                         {navLinks.map(link => 
//                             <a 
//                                 key={link.href} 
//                                 href={link.href} 
//                                 onClick={() => setIsMenuOpen(false)} 
//                                 className="block py-2 text-white hover:text-blue-400"
//                             >
//                                 {link.label}
//                             </a>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/staticData";
import logo from "../assets/logo101.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src={logo} alt="TechSolutions Pro logo" className="h-15" />

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-white hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
