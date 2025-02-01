// src/components/FullBlogPost.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPosts  } from '../lib/contentful';
import { BlogPost as BlogPostType } from '../types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';




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
      [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-3xl font-semibold mb-2">{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-2xl font-medium mb-2">{children}</h3>,
      [BLOCKS.HEADING_4]: (node: any, children: any) => <h4 className="text-xl font-medium mb-2">{children}</h4>,
      [BLOCKS.HEADING_5]: (node: any, children: any) => <h5 className="text-lg font-medium mb-2">{children}</h5>,
      [BLOCKS.HEADING_6]: (node: any, children: any) => <h6 className="text-base font-medium mb-2">{children}</h6>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="mb-2 space-y-2">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal list-inside mb-2 space-y-2">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="bg-gray-100 p-2 rounded-md shadow-md">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{children}</blockquote>,
      [BLOCKS.HR]: () => <hr className="my-3" />,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        return <img className="w-full h-auto rounded-lg shadow-lg mb-6" src={`https:${file.url}`} alt={title} />;
      },
    },
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  
  return (


    <div className="max-w-4xl mx-auto px-4 py-20">
      <img src={post.imagecover} alt={post.title} className="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        By <img src={post.authorAvatar} alt={post.author} className="p-1 w-20 h-20 rounded-full mr-2" />
        <span>{post.author} <FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(post.date)}</span>
      </div>
      <p className="text-lg text-gray-700 mb-6">{post.description}</p>
      <div className="prose prose-lg">
        {documentToReactComponents(post.content, options)}
      </div>
      <div>

        
      </div>
      {/* Add RelatedPosts Component Here */
      }
      
    </div>
  );
  
};

export default FullBlogPost;
