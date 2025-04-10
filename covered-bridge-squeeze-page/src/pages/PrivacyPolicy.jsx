import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";

import "./privacy-policy.css"; // Make sure this stylesheet exists
import { Link } from "react-router";

const PrivacyPolicy = ({ footerRef }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Using window.onload to ensure all resources are loaded
    window.onload = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(false);
    };

    // Fallback timeout in case onload doesn't trigger
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds fallback

    return () => {
      clearTimeout(timer); // Clean up the timer
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="privacy-policy-container">
          {/* Header */}
          <header className="privacy-policy-header">
            <div className="privacy-policy-header-inner">
              <Link to="/">
                <img
                  src="/logo-sm-1.png"
                  className="privacy-policy-logo"
                  alt="Logo"
                  title="Return Home"
                />
              </Link>
            </div>
          </header>

          {/* Main */}
          <main className="privacy-policy-content">
            <h2 className="privacy-policy-title">Privacy Policy</h2>
            <p className="privacy-policy-updated">
              Last Updated: April 8, 2025
            </p>

            <section className="privacy-policy-section">
              <h3>Introduction</h3>
              <p>
                Welcome to Covered Bridge Properties LLC ("we," "our," or "the
                Company"). We appreciate your interest in our services and your
                trust in providing us with your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you interact with our website,
                services, or representatives.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Information We Collect</h3>

              <h4>
                <u>Information You Provide to Us</u>
              </h4>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  mailing address, phone number
                </li>
                <li>
                  <strong>Property Information:</strong> Details about
                  properties you own or wish to sell
                </li>
                <li>
                  <strong>Transaction Information:</strong> Information related
                  to potential or completed transactions
                </li>
                <li>
                  <strong>Communication Records:</strong> Records of questions,
                  inquiries, or other communications with our team
                </li>
              </ul>

              <h4>
                <u>Information Automatically Collected</u>
              </h4>
              <ul>
                <li>
                  <strong>Device Information:</strong> IP address, browser type
                  and version, operating system
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, referring website
                  addresses
                </li>
              </ul>
            </section>

            <section className="privacy-policy-section">
              <h3>How We Use Your Information</h3>
              <ul>
                <li>To evaluate properties you wish to sell</li>
                <li>
                  To communicate with you regarding your inquiries or our offers
                </li>
                <li>To prepare and process transaction documents</li>
                <li>To fulfill our contractual obligations</li>
                <li>To improve our website and services</li>
                <li>To comply with applicable legal requirements</li>
              </ul>
            </section>

            <section className="privacy-policy-section">
              <h3>Legal Basis for Processing</h3>
              <ul>
                <li>Your consent</li>
                <li>The necessity to perform a contract with you</li>
                <li>Our legitimate business interests</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section className="privacy-policy-section">
              <h3>Information Sharing and Disclosure</h3>
              <p>
                <strong>
                  <em>
                    We do not sell your personal information to third parties.
                  </em>
                </strong>{" "}
                We may share your information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Title companies, escrow
                  services, attorneys, and others who assist us directly with
                  the sale of your property
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights in the event of related legal
                  proceedings
                </li>
              </ul>
              <p>
                Any third parties with whom we share your information are
                contractually required to maintain confidentiality and security
                measures consistent with this Privacy Policy and applicable
                laws.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Data Security</h3>
              <p>
                We implement reasonable security measures designed to protect
                your personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no internet transmission or
                electronic storage method is 100% secure.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Data Retention</h3>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Your Rights and Choices</h3>
              <p>
                You may have rights regarding your personal information, such
                as:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>
                  Restriction or objection to our processing of your information
                </li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Children’s Privacy</h3>
              <p>
                Our services are not directed to individuals under 18. We do not
                knowingly collect data from children.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy periodically. We will post any
                changes with an updated revision date on our website.
              </p>
            </section>

            <section className="privacy-policy-section">
              <h3>Contact Us</h3>
              <p>If you have questions or concerns, contact us at:</p>
              <address>
                Covered Bridge Properties LLC
                <br />
                <u>Email:</u>{" "}
                <a href="mailto:info@coveredbridge.properties">
                  info@coveredbridge.properties
                </a>
                <br />
                <u>Phone:</u> (555) 123-4567
              </address>
            </section>

            <section className="privacy-policy-section">
              <h3>Governing Law</h3>
              <p>
                This Privacy Policy is governed by the laws of the United States
                and the state where Covered Bridge Properties LLC is
                headquartered, without regard to its conflict of law provisions.
              </p>
            </section>
          </main>
          <Footer footerRef={footerRef} isVisible="false" />
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
