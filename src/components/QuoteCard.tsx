import { cn } from "@/lib/utils";

interface QuoteCardProps {
  quote: string;
  author: string;
  category: string;
  className?: string;
}

export function QuoteCard({ quote, author, category, className }: QuoteCardProps) {
  return (
    <div
      className={cn(
        "glass-card hover-lift rounded-lg p-6 flex flex-col gap-4",
        className
      )}
    >
      <div className="inline-flex">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
          {category}
        </span>
      </div>
      <blockquote className="text-lg font-light leading-relaxed">
        "{quote}"
      </blockquote>
      <footer className="text-sm text-muted-foreground">— {author}</footer>
    </div>
  );
}