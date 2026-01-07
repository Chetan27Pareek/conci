import React from 'react';
import { ArrowLeft, AlertTriangle, Mail, Clock, Trash2, Shield, PauseCircle } from 'lucide-react';

const DeleteAccount = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-border-gray">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <Trash2 className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
            Delete Your Account
          </h1>
          <p className="text-secondary">
            Cancel membership & remove your data
          </p>
        </div>

        {/* How to Delete Card */}
        <div className="bg-white rounded-xl shadow-card p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            How to Request Account Deletion
          </h2>
          <p className="text-dark mb-4 leading-relaxed">
            To cancel your membership and request deletion of your Conci account and all associated data, please follow these steps:
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                1
              </span>
              <div>
                <p className="text-dark">
                  <strong>Send an email</strong> to our support team at:{' '}
                  <a href="mailto:help@conci.in" className="text-primary hover:underline font-semibold">
                    help@conci.in
                  </a>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                2
              </span>
              <div>
                <p className="text-dark mb-2"><strong>Include the following information:</strong></p>
                <ul className="list-disc ml-5 text-dark space-y-1">
                  <li>Your registered phone number</li>
                  <li>Your full name as registered in the app</li>
                  <li>Subject line: "Cancel Membership & Delete Account"</li>
                  <li>Reason for deletion (optional)</li>
                </ul>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                3
              </span>
              <div>
                <p className="text-dark">
                  <strong>We will process your request within 30 days</strong>
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Warning Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-dark font-semibold mb-1">Important Warning</p>
              <p className="text-dark">
                Account deletion is <strong>permanent and cannot be undone</strong>. All your data including service history, subscription information, and profile details will be permanently deleted.
              </p>
            </div>
          </div>
        </div>

        {/* What Data Will Be Deleted Card */}
        <div className="bg-white rounded-xl shadow-card p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Trash2 className="w-6 h-6" />
            What Data Will Be Deleted
          </h2>
          <p className="text-dark mb-4">
            When you delete your account, we will permanently remove:
          </p>
          <ul className="space-y-3">
            {[
              'Your profile information (name, phone number, address)',
              'Service request history',
              'Subscription and billing information',
              'App usage data and preferences',
              'Any uploaded images or documents',
              'Communication history with concierges',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-dark">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Data Retention Policy Card */}
        <div className="bg-white rounded-xl shadow-card p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Data Retention Policy
          </h2>
          <p className="text-dark mb-4">
            Some data may be retained for legal and business purposes:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              'Financial transaction records (as required by law)',
              'Data needed for fraud prevention and security',
              'Aggregated, anonymized usage statistics',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-dark">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-secondary text-sm">
            This retained data cannot be linked back to your personal identity.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-primary-light rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 text-center">
            Contact Information
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div>
              <p className="text-secondary text-sm mb-1">Email</p>
              <a href="mailto:help@conci.in" className="text-primary font-semibold hover:underline">
                help@conci.in
              </a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border-gray" />
            <div>
              <p className="text-secondary text-sm mb-1">Response Time</p>
              <p className="text-dark font-semibold">Within 24-48 hours</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border-gray" />
            <div>
              <p className="text-secondary text-sm mb-1">Deletion Processing</p>
              <p className="text-dark font-semibold">Within 30 days</p>
            </div>
          </div>
        </div>

        {/* Alternative: Temporary Deactivation Card */}
        <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <PauseCircle className="w-6 h-6" />
            Alternative: Temporary Account Deactivation
          </h2>
          <p className="text-dark mb-4">
            If you're unsure about permanent deletion, you can also request temporary account deactivation. This will:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              'Suspend your account access',
              'Stop all notifications and communications',
              'Keep your data for 90 days in case you want to reactivate',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-dark">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-secondary">
            Contact us at the same email address and mention <strong>"Account Deactivation"</strong> in the subject line.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center pt-10 mt-10 border-t border-border-gray">
          <p className="text-secondary">
            © {new Date().getFullYear()} Conci. All rights reserved.
          </p>
          <p className="text-secondary text-sm mt-2">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
