import React from 'react';

const SupportPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <nav className="mb-4">
        <a href="/" className="text-green-600 hover:underline">Home</a> &gt; Support
      </nav>
      
      <h1 className="text-4xl font-bold mb-6 text-green-800">Support</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Need assistance with Virtual Herbal Garden?</h2>
      
      <p className="mb-6">We're here to help you make the most of your virtual gardening experience. Here are some ways to get support:</p>
      
      <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
      <p className="mb-4">
        Check our <a href="/faq" className="text-green-600 hover:underline">FAQ page</a> for quick answers to common questions about using Virtual Herbal Garden.

    </p>
      
      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      
      <ul className="list-disc pl-6 mb-6">
        <li>Email: support@virtualherbalgarden.com</li>
        <li>Phone: (555) 123-4567 (Mon-Fri, 9am-5pm EST)</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Technical Issues?</h3>
      <p className="mb-4">
        If you're experiencing technical difficulties with the Virtual Herbal Garden platform, please visit our <a href="/tech-support" className="text-green-600 hover:underline">Technical Support page</a> for troubleshooting guides and to report bugs.
      </p>
      
      <p className="text-sm text-gray-600 mt-8">
        Note: For health-related concerns or advice about using herbs medicinally, please consult with a qualified healthcare professional. Our support team cannot provide medical advice.
      </p>
    </div>
  );
};

export default SupportPage;
