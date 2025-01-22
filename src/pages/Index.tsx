import Hero from "../components/Hero";
import BlogPost from "../components/BlogPost";
import Quote from "../components/Quote";
import { CategoriesPage } from './CategoriesPage';



const Index = () => {

  return (
    <div className="p-5">
      <Hero />
      <Quote />
      <h2 className="mb-8 p-2">Recent Blog Posts</h2>
      <BlogPost />
      <CategoriesPage />
    </div>
  );
};

export default Index;