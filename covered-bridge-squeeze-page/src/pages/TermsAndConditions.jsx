import { Link } from "react-router";
import React, { useRef, useState, useEffect } from "react";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";

import "./terms-and-conditions.css";

const TermsAndConditions = () => {
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };

    // Using window.onload to ensure all resources are loaded
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
      {isLoading ? <LoadingState /> : <div></div>}
      <div className="container legal-container">
        <div className="terms__inner-container">
          <header>
            <Link to="/">
              <img
                src="/logo-sm-1.png"
                alt="Covered Bridge Properties"
                className="terms-conditions-logo"
                title="Return Home"
              />
            </Link>
            <h1 className="legal__header gradient-text">Terms & Conditions</h1>
            <p className="legal__subheader">Last Updated: April 8, 2025</p>
          </header>

          <main className="legal-content">
            <section className="legal-section">
              <h2>Scope of Services</h2>
              <p>
                Covered Bridge Properties LLC (“we”, “our”, or “the Company”)
                makes cash offers to purchase vacant land “as-is” from
                landowners. We are not real estate brokers. When you provide us
                with property details, you agree that the offer we make is
                subject to final verification—including title, condition, and
                market factors.
              </p>
            </section>

            <section className="legal-section">
              <h2>No Fees or Commissions</h2>
              <p>
                There are no hidden fees, commissions, or upfront costs involved
                when dealing with us. Our cash offers and transactions are
                structured to be completely transparent—you only receive the
                agreed cash offer without any deductions.
              </p>
            </section>

            <section className="legal-section">
              <h2>Right to Modify or Withdraw Offers</h2>
              <p>
                All offers made are subject to review and due diligence. We
                reserve the right to withdraw, modify, or decline any offer
                based on property details, title status, excessive back taxes or
                unforeseen issues without liability. Your engagement with us
                does not obligate you to accept our offer.
              </p>
            </section>

            <section className="legal-section">
              <h2>Confidentiality and Data Usage</h2>
              <p>
                We take the privacy of your information very seriously. All
                personal and property information you provide is handled in
                accordance with our Privacy Policy. We will not disclose your
                details to any third party without your consent, except as
                required by law.
              </p>
            </section>

            <section className="legal-section">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Covered Bridge
                Properties LLC shall not be liable for any indirect, incidental,
                or consequential damages arising out of or related to your use
                of our services, even if advised of the possibility of such
                damages. Our offers and transaction details are provided “as-is”
                and without warranties of any kind.
              </p>
            </section>

            <section className="legal-section">
              <h2>Governing Law and Dispute Resolution</h2>
              <p>
                These Terms & Conditions are governed by the laws of the United
                States and the state in which Covered Bridge Properties LLC is
                headquartered. Any disputes arising will be resolved in the
                appropriate courts of that jurisdiction.
              </p>
            </section>

            <section className="legal-section">
              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms & Conditions from time to time. Any
                changes will be posted on our website with a new “Last Updated”
                date. Your continued engagement with our services indicates your
                acceptance of any modifications.
              </p>
            </section>

            <section className="legal-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By providing your information and using our services, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms & Conditions.
              </p>
            </section>
          </main>

          <Footer footerRef={footerRef} isVisible="false" />
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
