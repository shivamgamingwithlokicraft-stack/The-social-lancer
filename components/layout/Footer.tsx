import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-bold text-lg mb-4">The Social Lancer</h3>
          <p className="text-gray-400 text-sm mb-6">Click. Connect. Convert.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/thesociallancer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://in.linkedin.com/company/the-social-lancer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white">Content Strategy</Link></li>
            <li><Link href="/services" className="hover:text-white">Social Media</Link></li>
            <li><Link href="/services" className="hover:text-white">Organic Growth</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link href="/work" className="hover:text-white">Our Work</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Mail size={16} /> thesociallancer@gmail.com</li>
            <li>Bhopal, MP, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2026 The Social Lancer. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/legal/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}