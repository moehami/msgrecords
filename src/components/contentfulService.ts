import { createClient } from 'contentful';

const client = createClient({
  space: '1lyuebj06qbb', // Replace with your Contentful Space ID
  accessToken: 'DmyN15b5IzIRR16F8NxLB5NtnuCCDkmdTeJTxllv9XQ', // Replace with your Contentful Access Token
});

export async function getPageData(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPosts', // Replace with your Contentful Content Type ID
    'fields.slug': slug,
  });

  if (response.items.length > 0) {
    return response.items[0].fields;
  } else {
    return null;
  }
}
