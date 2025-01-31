// src/components/BlogPost.tsx
import React, { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../lib/contentful';
import { BlogPost as BlogPostType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const BlogPost: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      // Sort posts by date in descending order and slice the first 10 posts
      const sortedPosts = data.sort((a: BlogPostType, b: BlogPostType) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 11);
      setPosts(sortedPosts);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {posts.map((post) => (
        <div key={post.title} className='glass-card hover-lift rounded-lg p-6 flex flex-col gap-4'>
          <Link to={`/post/${post.slug}`}>
            <img src={post.imagecover} alt={post.title} className='rounded-md shadow-md' />
            <h2 className='text-2xl font-bold mb-3'>{post.title}</h2>
            <div className='text-sm mb-3'><FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(post.date)} <FontAwesomeIcon icon={faClock} />  {post.readtime} </div>
            <p>{post.description}</p>
          </Link>
          <div className="flex items-center space-x-4">
            <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 p-1 rounded-full mr-2 shadow-md" />
            <h4 className='absolute left-16 pb-2 font-semibold text-blue-900'>{post.author}</h4>
            <p className='absolute left-16 pt-8 text-sm text-gray-500'>Editor</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
