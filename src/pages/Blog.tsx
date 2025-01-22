import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/contentful";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) {
    return (
      <div className="container py-24">
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="w-full h-48 animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-24">
      <h1 className="text-4xl font-light tracking-tight mb-12 bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
        Blog
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <Card key={post.slug} className="glass-card hover-lift">
            {post.imagecover && (
            <Link to={post.slug} >  <img
                src={post.imagecover}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              /></Link>
            )}
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category?.title || 'Uncategorized'}</Badge>
                
              </div>
              <CardTitle className="text-xl"><Link to={`/post/${post.slug}`} >{post.title}</Link></CardTitle>
              <p className="text-sm text-muted-foreground">
                {format(new Date(post.date), "MMMM dd, yyyy")}
              </p>
            </CardHeader>
            <CardContent>
              {/* Render rich text content */}
              <div className="text-muted-foreground line-clamp-3">
                {documentToReactComponents(post.content)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
