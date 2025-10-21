import React from 'react';

const CancelMembership = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Conci</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
            Cancel Membership & Delete Account
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            How to Cancel Membership & Delete Your Account
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            To cancel your membership and request deletion of your Conci account and all associated data, please follow these steps:
          </p>

          <ol className="list-decimal ml-8 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
            <li>
              <strong>Send an email</strong> to our support team at:{' '}
              <a href="mailto:help@conci.in" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                help@conci.in
              </a>
            </li>
            <li>
              <strong>Include the following information:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Your registered phone number</li>
                <li>Your full name as registered in the app</li>
                <li>Subject line: "Cancel Membership & Delete Account"</li>
                <li>Reason for deletion (optional)</li>
              </ul>
            </li>
            <li><strong>We will process your request within 30 days</strong></li>
          </ol>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6 rounded">
          <p className="text-gray-800 dark:text-gray-200">
            <strong>⚠️ Important:</strong> Account deletion is permanent and cannot be undone. All your data including service history, subscription information, and profile details will be permanently deleted.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            What Data Will Be Deleted
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When you delete your account, we will permanently remove:
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Your profile information (name, phone number, address)</li>
            <li>Service request history</li>
            <li>Subscription and billing information</li>
            <li>App usage data and preferences</li>
            <li>Any uploaded images or documents</li>
            <li>Communication history with concierges</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Data Retention Policy
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Some data may be retained for legal and business purposes:
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Financial transaction records (as required by law)</li>
            <li>Data needed for fraud prevention and security</li>
            <li>Aggregated, anonymized usage statistics</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            This retained data cannot be linked back to your personal identity.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Contact Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:help@conci.in" className="text-blue-600 dark:text-blue-400 hover:underline">
              help@conci.in
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Response Time:</strong> Within 24-48 hours
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Deletion Processing:</strong> Within 30 days
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Alternative: Temporary Account Deactivation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you're unsure about permanent deletion, you can also request temporary account deactivation. This will:
          </p>
          <ul className="list-disc ml-8 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Suspend your account access</li>
            <li>Stop all notifications and communications</li>
            <li>Keep your data for 90 days in case you want to reactivate</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Contact us at the same email address and mention "Account Deactivation" in the subject line.
          </p>
        </div>

        <footer className="text-center pt-6 mt-8 border-t border-gray-300 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Conci. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Last updated: January 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CancelMembership;
