import { QuoteCard } from "@/components/QuoteCard";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { fetchQuotes } from "@/lib/content2";
import { useQuery } from "@tanstack/react-query";


const Quote = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const { data: quotes = [], isLoading: quotesLoading } = useQuery({
    queryKey: ['quotes'],
    queryFn: fetchQuotes,
  });
  

  const categories = Array.from(new Set(quotes.map((q) => q.category)));

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
    
    <div
      className={`space-y-8 transition-all duration-500 delay-200 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
        
        <SearchBar onSearch={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      
      {quotesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-48 animate-pulse bg-muted rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote, index) => (
              <div key={index}>
                <QuoteCard
                  quote={quote.quote}
                  author={quote.author}
                  category={quote.category}
                />
              </div>
            ))}
          </div>
        )}
      </div>
   
  );
};

export default Quote;
