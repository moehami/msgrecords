// src/types.ts
export interface BlogPost {
  category: string;
  id: string;
  slug: string; // Ensure slug is included
  section: string; 
  author: string;
  authorAvatar: string;
  date: string;
  readtime: string;
  title: string;
  description: string;
  content: string;
  imagecover: {
    url: string;
    title: string;
  };
}
export type Category = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: {
    url: string;
    title: string;
  };
  postsCount: number;
};
