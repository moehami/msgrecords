// src/pages/CategoryPage.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostsByCategory } from '../lib/contentful';
import type { BlogPost } from '../types';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      if (!slug) return;
      
      try {
        const data = await getPostsByCategory({ categorySlug: slug });
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">No posts found</h1>
          <Link 
            to="/categories" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const category = posts[0].category;

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          to="/categories" 
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h1>
        <p className="text-gray-600 text-lg">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
             <Link 
      to={`/post/${post.slug}`}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.imagecover.url}
                alt={post.imagecover.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
            
              <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <time className="text-gray-500 text-sm">
              {formatDate(post.date)}          
              </time>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  );
}