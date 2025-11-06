"use client";

import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto mt-20 p-8 text-gray-800 dark:text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>AnantNetra Technologies</strong> (“AnantNetra”, “we”, “our”, “us”). 
            We are a global IT and business consultancy company founded in 2023, 
            dedicated to providing innovative technology solutions, AI-driven business consulting, 
            full-stack development, and digital transformation services to clients worldwide.
          </p>
          <p>
            Your privacy is very important to us. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website 
            <a href="https://www.anantnetra.com" className="text-blue-600 underline"> www.anantnetra.com</a>, 
            communicate with us, or use our services.
          </p>
          <p>
            By using our Website or services, you agree to the terms of this Privacy Policy. 
            If you do not agree, please do not use our Website or share any personal information with us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. What Information We Collect</h2>
          <h3 className="font-semibold">A. Information You Provide Voluntarily</h3>
          <ul className="list-disc ml-6">
            <li>Name, email address, phone number, business name, and designation</li>
            <li>Billing or payment details (when applicable)</li>
            <li>Information shared through forms, chat, or email communication</li>
            <li>Any files, project briefs, or documentation you provide for service delivery</li>
            <li>Job or internship applications submitted to us</li>
          </ul>

          <h3 className="font-semibold mt-4">B. Information Collected Automatically</h3>
          <ul className="list-disc ml-6">
            <li>IP address, browser type, operating system, and device information</li>
            <li>Pages viewed, time spent, and referring website or source</li>
            <li>Log data, cookies, and analytics information</li>
          </ul>

          <h3 className="font-semibold mt-4">C. Information from Third Parties</h3>
          <p>
            We may receive information from trusted business partners, affiliates, or publicly available sources, 
            always ensuring compliance with applicable data protection laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>To provide and maintain our services</li>
            <li>To personalize your experience and improve service quality</li>
            <li>To process requests, inquiries, or transactions</li>
            <li>To send updates, promotional offers, or newsletters (only if opted in)</li>
            <li>To comply with legal obligations and prevent fraudulent activities</li>
            <li>To manage recruitment, internship, or partnership processes</li>
            <li>To deliver region-specific services according to your country or local regulations</li>
          </ul>
          <p className="mt-2">We will never sell, rent, or trade your personal data with any third party.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Global Data Handling & Cross-Border Transfers</h2>
          <p>
            As a company serving clients globally, we may process and store your information in countries outside your own. 
            We ensure that any such data transfer complies with applicable international data protection laws, 
            using safeguards like Standard Contractual Clauses (SCCs) to ensure your data remains protected.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. 
            Once no longer needed, we securely delete or anonymize your information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. How We Protect Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Data encryption in transit and at rest</li>
            <li>Regular security audits and access control measures</li>
            <li>Employee training on data privacy best practices</li>
          </ul>
          <p className="mt-2">
            While we strive to protect your information, no system is completely immune to risks.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Sharing & Disclosure of Information</h2>
          <ul className="list-disc ml-6">
            <li>With trusted employees, contractors, and partners (under confidentiality)</li>
            <li>With third-party service providers (e.g., hosting, analytics, payment gateways)</li>
            <li>When required by law or to protect our rights and safety</li>
            <li>During mergers, acquisitions, or restructuring</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Your Data Rights</h2>
          <p>
            Depending on your location, you may have rights to access, rectify, delete, or restrict the use of your personal data. 
            You can contact us at <span className="font-semibold">[contact email]</span> to exercise these rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Cookies & Similar Technologies</h2>
          <p>
            We use cookies and tracking tools to improve your experience. You can manage preferences in your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Links to Other Websites</h2>
          <p>
            Our website may contain external links. We are not responsible for the content or privacy practices of other sites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal data from individuals under 16. If we become aware, we will delete it promptly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Updates to This Privacy Policy</h2>
          <p>
            This policy may be updated periodically. Please review this page to stay informed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Legal Basis for Processing</h2>
          <p>
            Depending on your region, our legal bases include consent, contractual necessity, legal obligations, 
            legitimate interests, and public interest.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">14. Contact Us</h2>
          <p>
            If you have questions or concerns, contact us via our website 
            <a href="https://www.anantnetra.com" className="text-blue-600 underline ml-1">
              www.anantnetra.com
            </a>
          </p>
        </div>
      </section>
    </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicyPage;
