'use client';

import Link from 'next/link';
import { Github, Mail, Linkedin, ArrowUp, Sparkles, type LucideIcon } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-primary to-primary/60 rounded-xl">
                <span className="text-primary-foreground font-bold text-xs">SP</span>
              </span>
              <span className="font-bold text-foreground">Sai Prabhat</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Product-driven Software Engineer building scalable, impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/ai-mentor', label: 'AI Mentor', icon: Sparkles },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.icon && <link.icon className="h-3 w-3 inline mr-1" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: '/skills', label: 'Skills' },
                { href: '/experience', label: 'Experience' },
                { href: '/sai-prabhat-resume.pdf', label: 'Resume', isDownload: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.isDownload ? (
                    <a
                      href={link.href}
                      download
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <span className="flex items-center gap-1.5">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Connect</h3>
            <div className="flex gap-2 mb-4">
              <a
                href="https://github.com/venom20021"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/saiprabhat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:prabhatsai047@gmail.com"
                className="p-2.5 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sai Prabhat. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
