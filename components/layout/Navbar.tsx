"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Team", href: "/team" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-offwhite/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight z-50">
          The Social Lancer
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-sm font-medium ${pathname === link.href ? "text-brand-accent" : "text-gray-600 hover:text-black"}`}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-brand-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition">
            Start a Project
          </Link>
        </nav>

        <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-brand-pink z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-2xl font-bold text-brand-black" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}