import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { pgInfo } from '../data/singlePgData';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms & Rent', href: '#rooms' },
    { name: 'Photo Tour', href: '#gallery' },
    { name: 'Mess Menu', href: '#food' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location & Commute', href: '#location' },
  ];

  return (
    <footer className="bg-[#172033] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5B3DF5] p-0.5 shadow-md flex items-center justify-center">
                <span className="text-white font-black text-xl select-none">U</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-tight">
                  UrbanNest PG
                </span>
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Luxury PG Living • Bengaluru
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Premium fully-furnished PG accommodation in Marathahalli along Bengaluru's Outer Ring Road. Offering comfortable rooms, 3 fresh home meals daily, and high-speed Wi-Fi with zero brokerage.
            </p>

            {/* Social Icons (Decorative) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#hero"
                aria-label="Instagram (demo)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF5] transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="Facebook (demo)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF5] transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="Twitter (demo)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF5] transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                aria-label="LinkedIn (demo)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF5] transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavClick(link.href)}
                    className="text-gray-300 hover:text-[#7B63F7] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              PG Address & Visits
            </h4>
            
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#5B3DF5] shrink-0 mt-0.5" />
              <span>{pgInfo.fullAddress}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Mail className="w-4 h-4 text-[#5B3DF5] shrink-0" />
              <a href="mailto:stay@urbannestpg.demo" className="hover:text-white transition-colors">
                stay@urbannestpg.demo
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-[#5B3DF5] shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210 (Warden & Visits)
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-gray-300 text-[11px] font-medium border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#16B979]" />
                <span>Visit Hours: Daily 8:00 AM – 8:30 PM</span>
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 UrbanNest PG Living. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-300 font-semibold border border-white/10">
              Single PG Demo Website
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
