import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company Name</h4>
            <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            <p className="text-sm">info@company.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-gray-400">About Us</a></li>
              <li><a href="/services" className="text-sm hover:text-gray-400">Services</a></li>
              <li><a href="/blog" className="text-sm hover:text-gray-400">Blog</a></li>
              <li><a href="/contact" className="text-sm hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form>
              <input
                type="email"
                className="px-4 py-2 text-black rounded-lg w-full"
                placeholder="Your email"
              />
              <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
