import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Server className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                TechServe
              </span>
            </div>
            <p className="text-sm">
              Leading provider of professional IT services and solutions in Zambia since 2003.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Instagram} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">IT Infrastructure</FooterLink>
              <FooterLink href="#services">Cyber Security</FooterLink>
              <FooterLink href="#services">Software Development</FooterLink>
              <FooterLink href="#services">Network Solutions</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Plot No. 11 off Katimamulilo Road , Olympia Park ,Lusaka, Zambia .10101</li>
              <li>Lusaka, Zambia</li>
              <li>Phone: +260966766818</li>
              <li>Email: info@techserve.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TechServe Technology Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: any) => (
  <a
    href={href}
    className="text-gray-400 hover:text-green-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children }: any) => (
  <li>
    <a href={href} className="hover:text-green-500 transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;