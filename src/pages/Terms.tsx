import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 mb-6">
          Last updated: January 21, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to MSG Records. By accessing or using our website and services, you agree to be bound 
            by these Terms of Service. Please read these terms carefully before using our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definitions</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <span className="font-medium">Service:</span> Refers to the MSG Records website and platform.
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Content:</span> Messages, wishes, quotes, prayers, and any other 
              materials uploaded or shared through our platform.
            </p>
            <p className="text-gray-600">
              <span className="font-medium">User:</span> Any individual or entity that accesses or uses our Service.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Users must:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be at least 13 years of age to use the Service</li>
              <li>Provide accurate and truthful information when creating an account</li>
              <li>Maintain the security of their account credentials</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Content Guidelines</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Users agree not to post content that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Is unlawful, harmful, threatening, or discriminatory</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains spam, malware, or commercial solicitations</li>
              <li>Violates the privacy rights of others</li>
              <li>Is intentionally false or misleading</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            Users retain ownership of their content but grant MSG Records a worldwide, non-exclusive, 
            royalty-free license to use, reproduce, and distribute their content on our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy and Data Protection</h2>
          <p className="text-gray-600 mb-4">
            Our collection and use of personal information is governed by our Privacy Policy. 
            By using our Service, you consent to our data practices described in the Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to terminate or suspend access to our Service immediately, 
            without prior notice, for any breach of these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            MSG Records shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use or inability to use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any 
            material changes via email or through our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <div className="text-gray-600">
            <p>Email: support@msgrecords.com</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;