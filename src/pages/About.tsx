import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About MSG Records</h1>
        <p className="text-lg text-gray-600">Preserving Life's Most Meaningful Moments</p>
      </div>

      <div className="space-y-12">
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At MSG Records, we believe in the power of words to inspire, comfort, and connect. 
            Our platform serves as a sanctuary for preserving and sharing life's most meaningful 
            messages, heartfelt wishes, inspiring quotes, and sacred prayers.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Messages</h3>
                <p className="text-gray-600">
                  A platform to share personal stories and meaningful communications that touch hearts 
                  and bridge distances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Wishes</h3>
                <p className="text-gray-600">
                  A space to express hopes, dreams, and blessings for special occasions and everyday moments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Quotes</h3>
                <p className="text-gray-600">
                  A collection of wisdom and inspiration from diverse sources to guide and uplift.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Prayers</h3>
                <p className="text-gray-600">
                  A sacred space for spiritual connection and shared faith across traditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We encourage genuine expression and meaningful connections.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome diverse perspectives, beliefs, and expressions of spirituality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Respect</h3>
                <p className="text-gray-600">
                  We maintain a respectful environment for sharing personal thoughts and beliefs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive community where everyone's voice matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you're seeking inspiration, looking to share your thoughts, or wanting to 
            connect with like-minded individuals, MSG Records provides a welcoming space for 
            your journey. Join us in creating a repository of meaningful content that touches 
            hearts and transforms lives.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Become a Member
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;