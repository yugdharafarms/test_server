import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from 'figma:asset/8cc262bcc45abc6c11559e42daf77727e285e261.png';
import logoText from 'figma:asset/d9cac16757d791aa99418a492ec5b61e98ec9a0a.png';

export function Footer() {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Farming Methods', path: '/farming-methods' },
    { name: 'Dairy Products', path: '/dairy-products' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Yugdhara Organic Farms" 
                className="h-14 w-14 object-contain flex-shrink-0"
              />
              <img 
                src={logoText} 
                alt="Yugdhara Organic Farms Pvt. Ltd." 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-green-100 leading-relaxed mb-6">
              Pioneering sustainable organic farming through multi-layer cultivation, premium Gir cow A2 dairy, and regenerative agroforestry practices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl mb-6 text-white">Our Products</h3>
            <ul className="space-y-3 text-green-100">
              <li>Exotic Flowers</li>
              <li>Premium Fruits</li>
              <li>Fresh Vegetables</li>
              <li>Dry Fruits & Nuts</li>
              <li>A2 Dairy Products</li>
              <li>Plantation Crops</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-green-800 p-2 rounded-lg flex-shrink-0">
                  <Mail size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-green-300 mb-1">Email</p>
                  <a 
                    href="mailto:yatin@yugdhara.co.in" 
                    className="text-green-100 hover:text-white transition-colors text-sm"
                  >
                    yatin@yugdhara.co.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-green-800 p-2 rounded-lg flex-shrink-0">
                  <Phone size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-green-300 mb-1">Phone</p>
                  <a 
                    href="tel:+919869438523" 
                    className="text-green-100 hover:text-white transition-colors text-sm"
                  >
                    +91 9869438523
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-green-800 p-2 rounded-lg flex-shrink-0">
                  <MapPin size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-green-300 mb-1">Location</p>
                  <span className="text-green-100 text-sm">Mumbai, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm">
              &copy; {new Date().getFullYear()} Yugdhara Organic Farms Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-green-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}