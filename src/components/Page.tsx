import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPosts } from '../lib/contentful';
import { BlogPost as BlogPostType } from '../types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';

interface RouteParams {
  slug: string;
}

const FullBlogPost: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    fetchBlogPosts().then((posts) => {
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);
    });
  }, [slug]);

  if (!post) {
    return <p className="text-center text-red-600">Blog post not found</p>;
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-2">{children}</p>,
      [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-4xl font-bold mb-2">{children}</h1>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="mb-2 space-y-2">{children}</ul>,
    },
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Dynamic Meta Tags */}
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.imagecover} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourwebsite.com/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.imagecover} />
      </Helmet>

      {/* Blog Content */}
      <img src={post.imagecover} alt={post.title} className="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        <img src={post.authorAvatar} alt={post.author} className="p-1 w-8 h-8 rounded-full mr-2" />
        <span>
          {post.author} <FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(post.date)}
        </span>
      </div>
      <p className="text-lg text-gray-700 mb-6">{post.description}</p>
      <div className="prose prose-lg">
        {documentToReactComponents(post.content, options)}
      </div>
      {post.sections && (
        <div>
          <h4 className="font-semibold mt-8">Categories:</h4>
          <ul>
            {post.sections.map((section) => (
              <li key={section} className="text-blue-600">{section}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FullBlogPost;
