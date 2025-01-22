import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'y3awjae15bb1',
  accessToken: 'vRn4FLU4e3CESIkkI53xRV-hvKM2HO8PVVNFJqG-f5g',
});

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  category: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  publishDate: string;
}

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

export const fetchBlogPosts = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-sys.createdAt'] as const,
  });
  return entries.items.map((item: any) => ({
    ...item.fields,
  })) as BlogPost[];
};

export const fetchQuotes = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: 'quote',
  });
  return entries.items.map((item: any) => ({
    ...item.fields,
  })) as Quote[];
};

export const fetchRecentBlogPosts = async (limit: number = 3) => {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-sys.createdAt'] as const,
    limit,
  });
  return entries.items.map((item: any) => ({
    ...item.fields,
  })) as BlogPost[];
};