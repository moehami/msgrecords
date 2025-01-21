import { useState, useEffect } from "react";
import { QuoteCard } from "@/components/QuoteCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import BlogPost from '../components/BlogPost';


const quotes = [
  {
    id: 1,
    quote: "The only way to do great work is to love what you do. :)",
    author: "Steve Jobs",
    category: "Inspiration",
  },
  {
    id: 2,
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
  {
    id: 3,
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Wisdom",
  },
  {
    id: 4,
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
  },
  {
    id: 5,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
  },
  {
    id: 6,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Inspiration",
  },
];

const categories = Array.from(new Set(quotes.map((q) => q.category)));

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || quote.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <div className="container py-12 space-y-12">
        <header 
          className={`text-center space-y-4 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }}
        >
          <h1 className="text-4xl font-light tracking-tight bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
            MSG Records
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover inspiring messages, heartfelt wishes, and meaningful quotes
          </p>
        </header>

        <div className={`space-y-8 transition-all duration-500 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, index) => (
            <div
              key={quote.id}
              className={`transition-all duration-500 ${
                isLoaded 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: Math.max(0, 1 - Math.abs(scrollY - (index * 100)) / 400),
                transform: `translateY(${Math.min(scrollY - (index * 100), 0) * 0.1}px)`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}
            >
              <QuoteCard
                quote={quote.quote}
                author={quote.author}
                category={quote.category}
              />
            </div>
          ))}

        </div>
        <h2 className="text-2xl mb-8"> Here is My Blog</h2> <BlogPost /> 

      </div>
    </div>
  );
};

export default Index;