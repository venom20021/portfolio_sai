'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/ai-mentor', label: 'AI Mentor' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-background/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="h-9 w-9 flex items-center justify-center bg-gradient-to-br from-primary to-primary/60 rounded-xl shadow-md group-hover:shadow-lg group-hover:shadow-primary/20 transition duration-300">
              <span className="text-primary-foreground font-bold text-sm">SP</span>
            </span>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Sai Prabhat
            </span>
          </Link>

          {/* Centered floating pill nav (desktop) */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-0.5 rounded-full border border-border/40 bg-background/70 backdrop-blur-xl px-1.5 py-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition duration-200 active:scale-[0.95] ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground shadow-[0_0_16px_rgba(255,51,51,0.45)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 inset-x-4 h-0.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,51,51,0.9)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Download Resume */}
            <a
              href="/sai-prabhat-resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition duration-200 shadow-sm hover:shadow-md hover:shadow-primary/20 active:scale-[0.97]"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl hover:bg-muted/50 text-muted-foreground hover:text-foreground transition duration-200 active:scale-90"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted/50 text-muted-foreground hover:text-foreground transition duration-200 active:scale-90"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}                className={`block px-4 py-3 rounded-xl text-sm font-medium transition duration-200 active:scale-[0.98] ${
                isActive(link.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Download Resume */}
          <a
            href="/sai-prabhat-resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition duration-200 active:scale-[0.98] mt-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
