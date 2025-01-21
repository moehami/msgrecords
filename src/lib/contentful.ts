// src/lib/contentful.ts
import { createClient } from 'contentful';
import { BlogPost } from '../types';

const client = createClient({
  space: '1lyuebj06qbb',
  accessToken: 'DmyN15b5IzIRR16F8NxLB5NtnuCCDkmdTeJTxllv9XQ',
});

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

      return {
        id: item.sys.id,
        slug: item.fields.slug as string,
        imagecover: `https:${item.fields.imagecover.fields.file.url}`,
        author: author.name,
        authorAvatar: `https:${author.image.fields.file.url}`,
        date: item.fields.date,
        readtime: item.fields.readtime,
        title: item.fields.title,
        description: item.fields.description,
        content: item.fields.content,
        sections: sections,
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function fetchRelatedPosts(sections: string[]): Promise<RelatedPost[]> {
  if (!sections || sections.length === 0) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPosts',
      'fields.sections.fields.name[in]': sections.join(','),
      limit: 5,
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      summary: item.fields.description,
      thumbnail: `https:${item.fields.imagecover.fields.file.url}`,
    }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    throw error;
  }
}

export default client;