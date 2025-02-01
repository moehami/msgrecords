// src/components/RelatedPosts.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../lib/contentful';
import { BlogPost, RelatedPost } from '../types';

interface RelatedPostsProps {
  postId: string;
  currentSections?: string[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ postId }) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRelatedPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Fetching posts for postId:', postId);
        const allPosts = await fetchBlogPosts();
        console.log('All posts:', allPosts);
        
        const currentPost = allPosts.find(post => post.id === postId);
        console.log('Current post:', currentPost);
        
        if (!currentPost) {
          console.error('Current post not found');
          setError('Current post not found');
          setRelatedPosts([]);
          return;
        }

        if (!currentPost.section || currentPost.section.length === 0) {
          console.log('No sections found for current post');
          setError('No sections available');
          setRelatedPosts([]);
          return;
        }

        console.log('Current post sections:', currentPost.section);

        // Filter posts that share at least one section with the current post
        const related = allPosts
          .filter(post => {
            const hasMatchingSection = post.id !== postId && 
              post.section?.some(section => 
                currentPost.section.includes(section)
              );
            console.log(`Post ${post.id} matching sections:`, hasMatchingSection);
            return hasMatchingSection;
          })
          .map(post => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            summary: post.description,
            thumbnail: post.imagecover
          }))
          .slice(0, 3);

        console.log('Related posts:', related);
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setError('Error fetching related posts');
        setRelatedPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId) {
      loadRelatedPosts();
    }
  }, [postId]);

  // Always render something for debugging
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      
      {isLoading && (
        <div className="text-gray-600">Loading related posts...</div>
      )}

      {error && (
        <div className="text-red-600">Debug info: {error}</div>
      )}

      {!isLoading && !error && relatedPosts.length === 0 && (
        <div className="text-gray-600">No related posts found</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group hover:transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;