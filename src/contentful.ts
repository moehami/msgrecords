// src/contentful.ts
import { createClient } from 'contentful';
import { BlogPost } from './types';

const client = createClient({
  space: '1lyuebj06qbb',
  accessToken: 'DmyN15b5IzIRR16F8NxLB5NtnuCCDkmdTeJTxllv9XQ',
});

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({
    content_type: 'blogPosts', // Ensure this matches the Contentful content type ID
    include: 1, // Include linked entries
  });


  return entries.items.map((item) => {
    const author = item.fields.author.fields;
    const sections = item.fields.sections?.map((section) => section.fields.name) || []; // Map section names


    return {
      id: item.sys.id,
      slug: item.fields.slug as string, // Ensure slug is included and typed as string
      imagecover: `https:${item.fields.imagecover.fields.file.url}`, // Ensure imagecover URL is correctly populated
      author: author.name,
      sections, // Add sections to the mapped post object
      authorAvatar: `https:${author.image.fields.file.url}`,
      date: item.fields.date,
      readtime: item.fields.readtime,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
     
    };
  });
}

export default client;
