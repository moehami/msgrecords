import { useState, useEffect } from "react";


export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Example categories (replace with your dynamic data if applicable)
  const categories = ["Inspiration", "Life", "Wisdom", "Dreams", "Success"];

  // Effect to handle component mount and scroll listener
  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-24">
      <div className="container py-12 space-y-12">
        <header
          className={`text-center space-y-4 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <h1 className="text-4xl font-light tracking-tight bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
            MSG Records
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover inspiring messages, heartfelt wishes, and meaningful quotes
          </p>
        </header>

      </div>
    </div>
  );
};

export default Hero;
