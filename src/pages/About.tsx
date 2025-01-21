export default function About() {
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen animate-fade-in">
      <h1 className="text-4xl font-light mb-8 bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
        About MSG Records
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          MSG Records is your destination for inspirational messages, heartfelt wishes, and meaningful quotes. 
          We believe in the power of words to inspire, comfort, and connect people across the world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Our mission is to provide a curated collection of thoughtful content that helps people express their feelings 
          and find inspiration in everyday life.
        </p>
      </div>
    </div>
  );
}