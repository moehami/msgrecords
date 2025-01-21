// src/components/CategoryCard.tsx
import { Link } from 'react-router-dom';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  if (!category) {
    return null;
  }

  return (
    <Link 
      to={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9">
        {category.image && (
          <img
            src={category.image.url}
            alt={category.image.title || 'Category image'}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
          <p className="text-white/80 mb-2">{category.description}</p>
          <span className="text-white/60">{category.postsCount} posts</span>
        </div>
      </div>
    </Link>
  );
}