"use client";

import React from "react";
import Footer from "../components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto mt-20 p-8 text-gray-800 dark:text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">TERMS OF USE (ToU)</h2>
          <p>
            This Terms of Use (“ToU”) governs your use of services provided by
            <strong> AnantNetra Technologies</strong> (“Service Provider”), an IT and Business
            Consultancy Company founded in 2023, headquartered in Rajasthan,
            India. By using our website or services, you agree to these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Confidential Information:</strong> All proprietary or technical information not publicly known.
            </li>
            <li>
              <strong>Content:</strong> Data, images, code, or documentation accessed through our services.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored by a browser to enhance user experience.
            </li>
            <li>
              <strong>Service Agreement:</strong> Any formal contract or statement of work between you and AnantNetra.
            </li>
            <li>
              <strong>Applicable Laws:</strong> Includes the IT Act 2000 (India), GDPR, CCPA, and other global regulations.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Registration</h2>
          <p>
            By registering or accessing our services, you agree to provide accurate information 
            and be bound by these Terms from your first use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. License & Usage</h2>
          <p>
            We grant you a limited, non-transferable, revocable, and non-exclusive license to use 
            our services during the agreed period. You may not reverse-engineer, resell, or use 
            them for unlawful purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. User Obligations</h2>
          <ul className="list-disc ml-6">
            <li>Use the services responsibly and lawfully.</li>
            <li>Provide accurate and updated information.</li>
            <li>Do not attempt unauthorized access or disrupt systems.</li>
            <li>Comply with all local and international laws.</li>
            <li>Maintain confidentiality of credentials and data.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Payments and Invoicing</h2>
          <ul className="list-disc ml-6">
            <li>Payments must be made as per contract or invoice timelines.</li>
            <li>Prices exclude applicable taxes or transaction fees.</li>
            <li>Once services are rendered, payments are non-refundable unless otherwise agreed.</li>
            <li>Late payments may incur interest as per agreed terms.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <p>
            All intellectual property created by AnantNetra Technologies remains its property unless 
            otherwise stated in writing. Users may only use deliverables for internal or authorized purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Confidentiality</h2>
          <p>
            Both parties agree not to disclose any confidential information obtained during engagement, 
            except when required by law. These obligations survive termination of the agreement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Warranties & Disclaimers</h2>
          <ul className="list-disc ml-6">
            <li>Services are provided using reasonable care and skill.</li>
            <li>However, they are offered “as is” without warranty of uninterrupted operation.</li>
            <li>The user assumes all risks related to usage.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p>
            AnantNetra Technologies shall not be liable for indirect or consequential damages. 
            Total liability shall not exceed the amount paid by the user in the preceding 12 months.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold AnantNetra Technologies harmless from any claims arising from 
            misuse, legal violations, or breaches of these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Security</h2>
          <p>
            We follow industry-standard cybersecurity practices under ISO/IEC 27001 and GDPR. 
            However, no system is completely secure, and we are not liable for breaches beyond reasonable control.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access for violations, misconduct, or non-payment. 
            Upon termination, all confidential materials must be destroyed or returned.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Force Majeure</h2>
          <p>
            Neither party shall be liable for delays or failures caused by events beyond their control, 
            including natural disasters, cyberattacks, or government restrictions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">14. Governing Law & Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India, with disputes subject to the exclusive 
            jurisdiction of the courts in Rajasthan, India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">15. Dispute Resolution</h2>
          <p>
            Disputes shall first be resolved amicably. If unresolved, they will be referred to 
            arbitration in Jaipur, Rajasthan under the Arbitration and Conciliation Act, 1996.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">16. Modifications</h2>
          <p>
            AnantNetra Technologies may update these Terms from time to time. Continued use of 
            services constitutes acceptance of the updated Terms.
          </p>
        </div>

        <p className="text-center mt-10 text-gray-600">
          Visit us at{" "}
          <a
            href="https://www.anantnetra.com"
            className="text-blue-600 underline"
          >
            www.anantnetra.com
          </a>
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditionsPage;
