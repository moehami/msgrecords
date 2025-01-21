import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="search"
        placeholder="Search quotes..."
        className="pl-10 bg-background/50 backdrop-blur-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}