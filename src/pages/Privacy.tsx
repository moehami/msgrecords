import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 mb-6">
          Last updated: January 21, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            At MSG Records, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our website and services. Please 
            read this privacy policy carefully. If you disagree with any terms, please discontinue use 
            of our site and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and email address</li>
              <li>Profile information you provide</li>
              <li>Content you post (messages, wishes, quotes, and prayers)</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mt-6">Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Operating system information</li>
              <li>Time spent on platform</li>
              <li>Pages visited and features used</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600">We use the collected information for:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Personalizing your experience</li>
              <li>Communicating with you about updates and changes</li>
              <li>Analyzing usage patterns to improve our platform</li>
              <li>Detecting and preventing fraudulent activity</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With service providers who assist in our operations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data backup procedures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Privacy Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to collect usage information and maintain 
            your preferences. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600 mb-4">
            Our service is not directed to children under 13. We do not knowingly collect personal 
            information from children under 13. If you become aware that a child has provided us with 
            personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by 
            posting the new privacy policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="text-gray-600">
            <p>Email: privacy@msgrecords.com</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;