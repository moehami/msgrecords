// src/contentful.ts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({
    content_type: 'blogPosts',
    include: 2,
  });

  // Add this debug log
  console.log('Raw Contentful entries:', JSON.stringify(entries.items[0].fields, null, 2));

  return entries.items.map((item: any) => {
    // Debug the sections specifically
    console.log('Raw sections data:', item.fields.sections);
    
    let sections: string[] = [];
    
    // Check what type of data we're getting
    if (item.fields.sections) {
      console.log('Sections type:', typeof item.fields.sections);
      console.log('Is Array?', Array.isArray(item.fields.sections));
      
      if (Array.isArray(item.fields.sections)) {
        sections = item.fields.sections.map((section: any) => {
          console.log('Individual section:', section);
          if (section.fields) {
            return section.fields.name;
          } else if (section.sys) {
            return section.sys.id;
          } else {
            return section;
          }
        });
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
}