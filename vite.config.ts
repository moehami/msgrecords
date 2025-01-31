import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createSitemap from "vite-plugin-sitemap"; // ✅ Correct import
import axios from "axios";
import path from "path";


const SITE_URL = "https://msgrecords.com";
async function fetchBlogPosts() {
    const SPACE_ID = "1lyuebj06qbb"; // ✅ Replace with actual Space ID
    const ACCESS_TOKEN = "DmyN15b5IzIRR16F8NxLB5NtnuCCDkmdTeJTxllv9XQ"; // ✅ Use Content Delivery API (CDA) token
    const ENVIRONMENT = "master"; // ✅ Change if using a different environment
  
    const GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;
  
    const query = `
      {
        blogPostsCollection {
          items {
            slug
          }
        }
      }`;
  
    try {
      const response = await axios.post(
        GRAPHQL_URL,
        { query },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
  
      console.log("🔍 Full API Response:", JSON.stringify(response.data, null, 2));
  
      if (!response.data || !response.data.data) {
        throw new Error("API response is empty or incorrectly formatted");
      }
  
      if (!response.data.data.blogPostsCollection) {
        throw new Error("blogPostCollection is missing from API response");
      }
  
      return response.data.data.blogPostsCollection.items.map((post: any) => `/post/${post.slug}`);
    } catch (error) {
      console.error("❌ Error fetching blog posts:", error.response?.data || error.message);
      return [];
    }
  }
  
  
// Export Vite configuration with dynamic sitemap
export default defineConfig(async () => {
  const blogRoutes = await fetchBlogPosts();

  return {
    plugins: [
      react(),
      createSitemap({
        hostname: SITE_URL,
        dynamicRoutes: blogRoutes,
        readable: true, // Pretty format XML
      }),
    ],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
  };
});
