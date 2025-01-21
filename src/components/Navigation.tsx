import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
            MSG Records
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/terms" className="text-gray-700 hover:text-gray-900 transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy Policy</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/terms" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsOpen(false)}>Terms</Link>
              <Link to="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}