import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms & Pricing', href: '#rooms' },
    { name: 'Photo Tour', href: '#gallery' },
    { name: 'Mess Menu', href: '#food' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-[#F8F9FC]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-3 group text-left cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            {/* Modern CSS 'U' Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B3DF5] to-[#7B63F7] p-0.5 shadow-md shadow-[#5B3DF5]/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-[#5B3DF5] flex items-center justify-center">
                <span className="text-white font-black text-xl tracking-tighter select-none">
                  U
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#172033] group-hover:text-[#5B3DF5] transition-colors leading-tight">
                UrbanNest PG
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#737D90] uppercase">
                Luxury Living • Marathahalli
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#172033] hover:text-[#5B3DF5] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B3DF5] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="desktop-book-visit-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B3DF5] text-white text-sm font-semibold hover:bg-[#4d30e3] active:scale-98 transition-all shadow-md shadow-[#5B3DF5]/25 hover:shadow-lg hover:shadow-[#5B3DF5]/30 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-quick-book-btn"
              onClick={onOpenBooking}
              className="px-3 py-2 text-xs font-semibold bg-[#5B3DF5]/10 text-[#5B3DF5] rounded-lg"
            >
              Visit
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172033] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-gray-200 shadow-xl transition-all"
        >
          <div className="px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-[#172033] hover:bg-[#F8F9FC] hover:text-[#5B3DF5] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                id="mobile-drawer-book-visit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5B3DF5] text-white font-semibold shadow-md shadow-[#5B3DF5]/20 hover:bg-[#4d30e3] transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Schedule a Free Visit</span>
              </button>
              <div className="text-center text-xs text-[#737D90] pt-1">
                Call Warden: +91 90000 00000
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
