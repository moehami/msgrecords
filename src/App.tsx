import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Page from './components/Page';
import FullBlogPost from'./components/FullBlogPost';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';


import Index from "./pages/Index";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Disclaimer from "./pages/Disclaimer";


const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
      <Navigation />
      <Link 
                to="/categories" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Categories
              </Link>
        <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/post/:slug" element={<Page />} />
          <Route path="/post/:slug" Component={FullBlogPost} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
