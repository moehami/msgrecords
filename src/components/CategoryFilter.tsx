import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center pt-20">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-full",
          !selectedCategory && "bg-primary text-primary-foreground"
        )}
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full",
            selectedCategory === category && "bg-primary text-primary-foreground"
          )}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}