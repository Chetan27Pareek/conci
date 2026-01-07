import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-border-gray">
        <div className="max-w-4xl mx-auto px-6 py-4">
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
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 pb-4 border-b-4 border-primary">
            PRIVACY POLICY FOR CONCI
          </h1>

          <p className="text-secondary text-sm mb-8 italic">
            <strong>Last Updated:</strong> October 21, 2025<br />
            <strong>Effective Date:</strong> October 17, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              1. INTRODUCTION
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              Conci ("we," "our," or "us") operates the Conci mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App to access concierge services.
            </p>
            <p className="text-dark mb-4 leading-relaxed">
              <strong>By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.</strong>
            </p>
            <p className="text-dark mb-4 leading-relaxed">
              If you do not agree with our policies and practices, please do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              We collect several types of information from and about users of our App:
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.1 Personal Information
            </h3>
            <p className="text-dark mb-2">
              <strong>Information you provide directly:</strong>
            </p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Full Name</strong> - for account identification and service delivery</li>
              <li><strong>Phone Number</strong> - for authentication and communication</li>
              <li><strong>Physical Address</strong> - for service location and concierge matching</li>
              <li><strong>Emergency Contact Information</strong> - for safety and urgent situations</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.2 Location Data
            </h3>
            <p className="text-dark mb-2">
              We collect precise and approximate location information:
            </p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Precise GPS Coordinates</strong> - to match you with nearby concierges and validate service areas</li>
              <li><strong>Service Address</strong> - to ensure services are available in your location</li>
              <li><strong>Location is collected only when the app is in use (foreground)</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.3 Financial Information
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Payment Information</strong> - processed securely through our payment partner Razorpay</li>
              <li><strong>Purchase History</strong> - subscription plans and service requests</li>
              <li><strong>Transaction Records</strong> - for billing, refunds, and record-keeping</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.4 Photos and Media
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Service Request Photos</strong> - images you choose to upload to document service needs</li>
              <li><strong>Photo collection is optional</strong> - you control what photos to share</li>
              <li><strong>Photos are stored securely</strong> in Firebase Cloud Storage</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.5 Device and Usage Information
            </h3>
            <p className="text-dark mb-2">
              We automatically collect certain information:
            </p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Device Identifiers</strong> - Firebase Installation ID, FCM (Firebase Cloud Messaging) tokens for push notifications</li>
              <li><strong>Device Information</strong> - device model, operating system version</li>
              <li><strong>App Usage Data</strong> - service requests, app interactions, features used</li>
              <li><strong>Analytics Data</strong> - app performance, crash reports, usage patterns</li>
              <li><strong>Version Information</strong> - app version for update management via Firebase Remote Config</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              2.6 Service Request Data
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Service Request Details</strong> - type of service, timing preferences, special instructions</li>
              <li><strong>Service History</strong> - completed, ongoing, and cancelled requests</li>
              <li><strong>Feedback and Ratings</strong> - your feedback about services provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              3.1 Core App Functionality
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Provide concierge services</strong> - match you with service providers</li>
              <li><strong>Process subscriptions and payments</strong> - manage your account and billing</li>
              <li><strong>Enable communication</strong> - between you and assigned concierges</li>
              <li><strong>Send notifications</strong> - service updates, task completion alerts</li>
              <li><strong>Geographic validation</strong> - ensure services are available in your area</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              3.2 Account Management
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Create and maintain your account</li>
              <li>Verify your identity through phone authentication</li>
              <li>Manage subscription plans (Free Trial, Basic, Premium)</li>
              <li>Track service quotas and usage limits</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              3.3 Service Delivery
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Match you with appropriate concierges based on location and service type</li>
              <li>Track service progress in real-time</li>
              <li>Process payments for completed services</li>
              <li>Handle emergency requests (SOS services)</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              3.4 Safety and Security
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Verify concierge employees for your safety</li>
              <li>Monitor service quality and compliance</li>
              <li>Emergency contact notification when needed</li>
              <li>Fraud prevention and security measures</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              3.5 App Improvement
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Analyze usage patterns to improve features</li>
              <li>Fix bugs and technical issues</li>
              <li>Develop new services based on user needs</li>
              <li>Monitor app performance and stability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              We share your information only in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              4.1 With Service Providers (Concierges)
            </h3>
            <p className="text-dark mb-2">
              When you create a service request, we share <strong>only the necessary information</strong> with your assigned concierge:
            </p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Your name</li>
              <li>Service address</li>
              <li>Service request details</li>
              <li>Contact information (for service coordination)</li>
            </ul>
            <p className="text-dark mb-4">
              <strong>We do not share:</strong> Your emergency contact, payment information, or full service history with concierges.
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              4.2 With Third-Party Service Providers
            </h3>
            <p className="text-dark mb-4">
              We use trusted third-party services to operate our app:
            </p>

            <div className="mb-6">
              <p className="font-semibold text-dark mb-2">A. Firebase (Google Cloud Platform)</p>
              <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
                <li><strong>Purpose:</strong> Backend infrastructure, database, authentication, storage, messaging, analytics</li>
                <li><strong>Data Shared:</strong> All app data including personal information, device IDs, FCM tokens, usage data</li>
                <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">firebase.google.com/support/privacy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-dark mb-2">B. Razorpay</p>
              <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
                <li><strong>Purpose:</strong> Payment processing</li>
                <li><strong>Data Shared:</strong> Payment information, transaction amounts, purchase history</li>
                <li><strong>Privacy Policy:</strong> <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">razorpay.com/privacy/</a></li>
                <li><strong>Note:</strong> Razorpay is PCI-DSS compliant for secure payment handling</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-dark mb-2">C. Google Maps Platform</p>
              <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
                <li><strong>Purpose:</strong> Location services, address validation, map display</li>
                <li><strong>Data Shared:</strong> Location coordinates, address information</li>
                <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              4.3 For Legal Requirements
            </h3>
            <p className="text-dark mb-4">
              We may disclose your information when required by law to comply with legal obligations, court orders, government requests, or to protect our rights and safety.
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              4.4 What We Do NOT Do
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>We do NOT sell your personal data</strong> to third parties</li>
              <li><strong>We do NOT share your data for advertising purposes</strong></li>
              <li><strong>We do NOT share your information with social media platforms</strong></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              5. DATA SECURITY
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information:
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              5.1 Security Measures
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Encryption in Transit</strong> - All data transmitted is encrypted using HTTPS/TLS</li>
              <li><strong>Firebase Security Rules</strong> - Database access is restricted and authenticated</li>
              <li><strong>Secure Authentication</strong> - Phone-based authentication via Firebase Auth</li>
              <li><strong>Access Controls</strong> - Only authorized personnel can access user data</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              5.2 Payment Security
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>PCI-DSS Compliance</strong> - Payment processing follows industry standards</li>
              <li><strong>No Card Storage</strong> - We do not store complete payment card details</li>
              <li><strong>Secure Tokens</strong> - Payment information is tokenized for security</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded">
              <p className="text-dark">
                <strong>Important Notice:</strong> While we use reasonable measures to protect your information, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              6. DATA RETENTION
            </h2>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Personal Information:</strong> Retained while your account is active</li>
              <li><strong>Service History:</strong> Retained for 2 years from date of service</li>
              <li><strong>Transaction Records:</strong> Retained for 7 years as required by Indian law</li>
              <li><strong>Deleted Accounts:</strong> Data permanently deleted within 30 days of deletion request</li>
              <li><strong>Backup Data:</strong> May persist in backups for up to 90 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              7. YOUR RIGHTS AND CHOICES
            </h2>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              7.1 Access and Correction
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>View your data:</strong> Access your personal information in the app</li>
              <li><strong>Update information:</strong> Modify your name, address, and emergency contact</li>
              <li><strong>Export data:</strong> Request a copy by contacting us</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              7.2 Account Deletion
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>In-App Deletion:</strong> Delete your account directly from the Conci app (Current Plan screen → Menu (⋮) → Delete Account)</li>
              <li><strong>Email Request:</strong> Alternatively, contact help@conci.in if you need assistance with account deletion</li>
              <li><strong>Timeline:</strong> Account and data deleted immediately upon confirmation</li>
              <li><strong>What Gets Deleted:</strong> Your profile data, active subscription (cancelled immediately), complete service history, and payment records</li>
              <li><strong>Note:</strong> Razorpay maintains customer records for financial compliance (as required by Indian tax laws), but these records are orphaned from your account and cannot be accessed</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3 mt-6">
              7.3 Communication Preferences
            </h3>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li><strong>Push Notifications:</strong> Disable in device or app settings</li>
              <li><strong>Marketing Emails:</strong> Unsubscribe via link in emails</li>
              <li><strong>Service Notifications:</strong> Cannot be disabled (essential for service)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              8. CHILDREN'S PRIVACY
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded">
              <p className="text-dark font-semibold">
                Our App is NOT intended for children under 18 years of age.
              </p>
            </div>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>We do not knowingly collect information from children under 18</li>
              <li>If you are under 18, do not use the App</li>
              <li>Parents/guardians: Contact us if you believe your child provided information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              9. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. Major changes will be announced in the app and via email. The "Last Updated" date will always reflect the current version.
            </p>
          </section>

          <section className="mb-8 bg-primary-light p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              10. CONTACT US
            </h2>
            <p className="text-dark mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy:
            </p>
            <p className="text-dark mb-2">
              <strong>Email:</strong> <a href="mailto:help@conci.in" className="text-primary hover:underline">help@conci.in</a><br />
              <strong>Privacy Matters:</strong> <a href="mailto:help@conci.in" className="text-primary hover:underline">help@conci.in</a><br />
              <strong>Website:</strong> <a href="https://conci.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">conci.in</a>
            </p>
            <p className="text-dark mt-4">
              <strong>Response Time:</strong> We respond to privacy requests within 7 business days. Account deletions completed within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              11. CONSENT AND ACCEPTANCE
            </h2>
            <p className="text-dark mb-4 leading-relaxed">
              By using the Conci app, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
            <p className="text-dark mb-2"><strong>You consent to:</strong></p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Collection of your personal information as described</li>
              <li>Use of your information for stated purposes</li>
              <li>Sharing with third-party service providers (Firebase, Razorpay, Google Maps)</li>
              <li>Storage on Firebase (Google Cloud) servers</li>
              <li>Payment processing through Razorpay</li>
            </ul>
            <p className="text-dark">
              <strong>You can withdraw consent at any time</strong> by deleting your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-l-4 border-primary pl-4">
              12. COMPLIANCE
            </h2>
            <p className="text-dark mb-4">This Privacy Policy complies with:</p>
            <ul className="list-disc ml-8 mb-4 text-dark space-y-2">
              <li>Information Technology Act, 2000 (India)</li>
              <li>IT Rules, 2011 (India)</li>
              <li>General Data Protection Regulation (GDPR) (EU)</li>
              <li>California Consumer Privacy Act (CCPA) (USA)</li>
              <li>Google Play Store Data Safety Requirements</li>
            </ul>
          </section>

          <div className="text-center border-t-2 border-border-gray pt-6 mt-8">
            <p className="text-dark font-semibold mb-4">
              BY USING THE CONCI APP, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY AND AGREE TO ITS TERMS.
            </p>
            <hr className="my-4 border-border-gray" />
            <p className="text-secondary font-semibold">
              © 2025 Conci. All rights reserved.
            </p>
            <p className="text-secondary text-sm mt-2">
              <strong>Document Version:</strong> 2.1<br />
              <strong>Last Reviewed:</strong> October 21, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
