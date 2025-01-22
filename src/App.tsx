import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Page from './components/Page';
import FullBlogPost from'./components/FullBlogPost';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';

import Blog from "./pages/Blog";

import Index from "./pages/Index";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <Router>
      <Navigation />
     
        <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />

          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/post/:slug" element={<Page />} />
          <Route path="/post/:slug" Component={FullBlogPost} />
        
        </Routes>  <Footer />
      </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
