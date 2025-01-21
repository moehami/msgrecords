// src/components/RelatedPosts.tsx
import React, { useState, useEffect } from 'react';
import { fetchRelatedPosts } from '../contentful';
import { BlogPost as BlogPostType } from '../types';
import { Link } from 'react-router-dom';

const RelatedPosts: React.FC<{ tags: string[] }> = ({ tags }) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    if (tags.length > 0) {
      fetchRelatedPosts(tags).then((posts) => {
        console.log('Related Posts:', posts); // Log related posts
        setRelatedPosts(posts);
      });
    }
  }, [tags]);

  return (
    <div className="related-posts mt-8">
      <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
      {relatedPosts.length === 0 ? (
        <p>No related posts found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {relatedPosts.map((post) => (
            <li key={post.id} className="bg-gray-100 p-4 rounded-md shadow-md">
              <Link to={`/post/${post.slug}`}>
                <img src={post.imageCover} alt={post.title} className="w-full h-auto rounded-lg mb-2" />
                <h4 className="text-xl font-bold">{post.title}</h4>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RelatedPosts;
