import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Disclaimer</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 mb-6">
          Last updated: January 21, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Information</h2>
          <p className="text-gray-600 mb-4">
            The information provided on MSG Records is for general informational and personal expression 
            purposes only. All messages, wishes, quotes, and prayers shared on this platform represent 
            the views and beliefs of their respective authors and not necessarily those of MSG Records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Professional Advice</h2>
          <p className="text-gray-600 mb-4">
            The content on MSG Records should not be interpreted as professional advice of any kind. 
            Specifically:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Content is not intended as medical, psychological, or mental health advice</li>
            <li>Content should not be considered legal or professional counsel</li>
            <li>Personal experiences shared by users should not be taken as guidance for medical, 
                legal, or financial decisions</li>
            <li>Users should consult appropriate professionals for specific advice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accuracy of Information</h2>
          <p className="text-gray-600 mb-4">
            While we strive to maintain the quality of content on our platform:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>We make no guarantees about the accuracy, completeness, or reliability of user-generated content</li>
            <li>Users are responsible for verifying information before relying on it</li>
            <li>Content may become outdated, and we are not obligated to update it</li>
            <li>We reserve the right to modify or remove content at our discretion</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Interactions</h2>
          <p className="text-gray-600 mb-4">
            Regarding user interactions on our platform:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Users are responsible for their interactions with other users</li>
            <li>We do not endorse or verify user identities or content</li>
            <li>Users should exercise caution when sharing personal information</li>
            <li>We are not responsible for disputes between users</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">External Links</h2>
          <p className="text-gray-600 mb-4">
            Our platform may contain links to external websites:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>We do not control or endorse external websites</li>
            <li>We are not responsible for the content or practices of linked sites</li>
            <li>Users access external links at their own risk</li>
            <li>Users should review the privacy policies and terms of external sites</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            MSG Records and its operators shall not be liable for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Direct, indirect, or consequential damages arising from use of the platform</li>
            <li>Losses resulting from reliance on platform content</li>
            <li>Technical issues or service interruptions</li>
            <li>Actions of other users or third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify this disclaimer at any time. Changes will be effective 
            immediately upon posting to the platform. Your continued use of MSG Records after changes 
            indicates acceptance of the updated disclaimer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about this disclaimer, please contact us at:
          </p>
          <div className="text-gray-600">
            <p>Email: legal@msgrecords.com</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;