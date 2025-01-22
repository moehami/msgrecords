import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-semibold bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            MSG Records
          </Link>

          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              About
            </Link>
            <Link 
              to="/disclaimer" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
                    Disclaimer
            </Link>
            <Link 
              to="/terms" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                Terms
              </Link>
              <Link 
                to="/disclaimer" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                     Disclaimer
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-700 hover:text-gray-900 transition-colors hover:translate-x-1 transform duration-200 ease-in-out" 
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}