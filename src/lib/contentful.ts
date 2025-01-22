// src/lib/contentful.ts
import { createClient } from 'contentful';
import { BlogPost, Category } from '../types';

const client = createClient({
  space: '1lyuebj06qbb',
  accessToken: 'DmyN15b5IzIRR16F8NxLB5NtnuCCDkmdTeJTxllv9XQ',
});
// In contentful.ts, add logging
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await client.getEntries({
      content_type: 'category',
      include: 2,
    });
    
    console.log('Contentful response:', response); // Debug log
    
    if (!response.items) {
      console.error('No items in response');
      return [];
    }

    const categories = response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      image: item.fields.image?.fields ? {
        url: `https:${item.fields.image.fields.file.url}`,
        title: item.fields.image.fields.title,
      } : null,
      postsCount: item.fields.posts?.length,
    }));

    console.log('Processed categories:', categories); // Debug log
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
export async function getPostsByCategory({ categorySlug }: { categorySlug: string; }): Promise<BlogPost[]> {
  const response = await client.getEntries({
    content_type: 'blogPosts', // Main content type
    'fields.category.sys.contentType.sys.id': 'category', // Ensure the reference type is specified
    'fields.category.fields.slug': categorySlug, // Match the slug
    order: '-fields.date', // Sort by date
    include: 2, // Include referenced fields
  });
 


  
  return response.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description,
    content: item.fields.content,
    date: item.fields.date,
    category: {
      id: item.fields.category.sys.id,
      title: item.fields.category.fields.title,
      slug: item.fields.category.fields.slug,
      description: item.fields.category.fields.description,
      image: {
        url: `https:${item.fields.category.fields.image.fields.file.url}`,
        title: item.fields.category.fields.image.fields.title,
      },
      postsCount: 0,
    },
    imagecover: {
      url: `https:${item.fields.imagecover.fields.file.url}`,
      
      title: item.fields.imagecover.fields.title,
    },
  }));
}
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPosts',
      include: 1,
    });

    // Log the complete first entry to see its structure

    return entries.items.map((item: any) => {
 

      let sections: string[] = [];

      // More detailed section logging
      if (item.fields.sections) {

        
        if (Array.isArray(item.fields.sections)) {
          sections = item.fields.sections.map((section: any) => {
            return section.fields?.name || section;
          }).filter(Boolean);
        } else if (typeof item.fields.sections === 'string') {
          sections = [item.fields.sections];
        }
      }


  const author = item.fields.author.fields;
  const category = item.fields.category?.fields;

      return {
        id: item.sys.id,
        slug: item.fields.slug as string,
        imagecover: `https:${item.fields.imagecover.fields.file.url}`,
        author: author.name,
        authorAvatar: `https:${author.image.fields.file.url}`,
        date: item.fields.date,
        readtime: item.fields.readtime,
        title: item.fields.title,
        category: category ? { 
          title: category.title, 
          slug: category.slug 
        } : null,
                description: item.fields.description,
        content: item.fields.content,
     
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export default client;