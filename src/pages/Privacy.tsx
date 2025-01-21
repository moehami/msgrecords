export default function Privacy() {
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen animate-fade-in">
      <h1 className="text-4xl font-light mb-8 bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          At MSG Records, we take your privacy seriously. This policy outlines how we collect and use your information.
        </p>
        <h2 className="text-2xl font-medium mt-8 mb-4">Data Collection</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We collect minimal data necessary to provide our services. This includes basic analytics and any information you choose to share.
        </p>
        <h2 className="text-2xl font-medium mt-8 mb-4">Cookie Policy</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We use essential cookies to ensure the proper functioning of our website. You can control cookie settings through your browser.
        </p>
      </div>
    </div>
  );
}