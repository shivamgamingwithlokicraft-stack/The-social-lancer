"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Team", href: "/team" },
  { name: "Reviews", href: "/reviews" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-brand-offwhite/90 backdrop-blur-md border-b border-gray-200 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="font-bold text-xl tracking-tight z-50">
          The Social Lancer
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative text-sm font-medium text-gray-600 hover:text-black transition-colors py-2">
              {pathname === link.href && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
              )}
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-brand-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:scale-105 transition-transform">
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-brand-pink z-40 flex flex-col items-center justify-center gap-6 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href} className="text-2xl font-bold text-brand-black" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}