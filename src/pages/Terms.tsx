export default function Terms() {
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen animate-fade-in">
      <h1 className="text-4xl font-light mb-8 bg-gradient-to-r from-[#4A90E2] to-[#7E57C2] bg-clip-text text-transparent">
        Terms of Service
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to MSG Records. By accessing our website, you agree to these terms of service.
        </p>
        <h2 className="text-2xl font-medium mt-8 mb-4">1. Content Usage</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          All content on MSG Records is for personal use only. You may share our content with proper attribution.
        </p>
        <h2 className="text-2xl font-medium mt-8 mb-4">2. User Responsibilities</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Users are responsible for any content they submit to MSG Records and must ensure it doesn't violate any laws or rights.
        </p>
      </div>
    </div>
  );
}