import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Page from './components/Page';
import FullBlogPost from'./components/FullBlogPost';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import Index from "./pages/Index";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
      <Navigation />

        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/post/:slug" element={<Page />} />
          <Route path="/post/:slug" Component={FullBlogPost} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
