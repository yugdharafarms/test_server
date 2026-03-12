import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/8cc262bcc45abc6c11559e42daf77727e285e261.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Our Farms', 
      path: '/farming-methods',
      dropdown: [
        { name: 'Multi-Layer Farming', path: '/farming-methods#multi-layer' },
        { name: 'Multi-Crop Farming', path: '/farming-methods#multi-crop' },
        { name: 'Plantation Model', path: '/farming-methods#plantation' },
      ]
    },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Exotic Flowers', path: '/products#flowers' },
        { name: 'Exotic Fruits', path: '/products#fruits' },
        { name: 'Vegetables & Spices', path: '/products#vegetables' },
        { name: 'Nuts & Plantation', path: '/products#nuts' },
        { name: 'Gir Cow Dairy', path: '/dairy-products' },
      ]
    },
    { name: 'Sustainability', path: '/sustainability' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Yugdhara Organic Farms" 
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
            <span className={`font-serif text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
              isScrolled || !isHome ? 'text-green-900' : 'text-white'
            } group-hover:text-green-700`}>
              Yugdhara Organic Farms
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              
              if (item.dropdown) {
                return (
                  <div 
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 py-2 font-medium transition-all duration-300 relative ${
                        isScrolled || !isHome
                          ? 'text-gray-700 hover:text-green-700'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Hover underline */}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full`} />
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 font-medium transition-all duration-300 relative group ${
                    isScrolled || !isHome
                      ? 'text-gray-700 hover:text-green-700'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Hover underline */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full ${
                    isActive ? 'w-full' : ''
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-white border-t">
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className="block py-3 px-4 text-gray-700 hover:bg-green-50 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 bg-gray-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-green-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 font-medium ${
                    location.pathname === item.path
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-3">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white shadow-md">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}