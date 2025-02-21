import React from 'react';
import { Github, BookOpen, Mail, MapPin, ExternalLink } from 'lucide-react';

const FooterLink = ({ href, children, external = false }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Investigating the origins of life through the lens of machine learning and computational biology at Georgia Tech.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Atlanta, GA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#research" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Research
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#random" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  Random
                </a>
              </li>
            </ul>
          </div>

          {/* Research Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">Research</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink href="https://cool.gatech.edu" external>
                  <span className="flex items-center gap-1">
                    iCOOL at Georgia Tech
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://ribovision2.chemistry.gatech.edu" external>
                  <span className="flex items-center gap-1">
                    RiboVision
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://scholar.google.com/citations?user=a6hOkOoAAAAJ&hl=en" external>
                  <span className="flex items-center gap-1">
                    Google Scholar
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-800">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink href="mailto:bbanerjee32@gatech.edu">
                  bbanerjee32@gatech.edu
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://github.com/Biswajit-Banerjee" external>
                  <span className="flex items-center gap-1">
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <FooterLink href="https://github.com/Biswajit-Banerjee" external>
                <Github className="w-5 h-5" />
              </FooterLink>
              <FooterLink href="https://scholar.google.com/citations?user=a6hOkOoAAAAJ&hl=en" external>
                <BookOpen className="w-5 h-5" />
              </FooterLink>
              <FooterLink href="mailto:bbanerjee32@gatech.edu">
                <Mail className="w-5 h-5" />
              </FooterLink>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Biswajit Banerjee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;