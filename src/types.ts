// src/types.ts
export interface BlogPost {
  sections: any;
  id: string;
  slug: string; // Ensure slug is included
  section: string; 
  imagecover: string;
  author: string;
  authorAvatar: string;
  date: string;
  readtime: string;
  title: string;
  description: string;
  content: string;
}
