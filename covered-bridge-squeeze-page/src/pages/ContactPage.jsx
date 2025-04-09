import { Link } from "react-router";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";

import "./contact-page.css";

const ContactPage = () => {
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Using window.onload to ensure all resources are loaded
    window.onload = () => {
      setIsLoading(false);
    };

    // Fallback timeout in case onload doesn't trigger
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds fallback

    return () => {
      clearTimeout(timer); // Clean up the timer
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="contact-container about-container">
          <div className="inner-container">
            <header className="contact--header">
              <Link to="/">
                <img
                  src="/logo-main.png"
                  alt="Covered Bridge Properties"
                  className="contact__header-img"
                  title="Return Home"
                />
              </Link>
              <h1 className="about__header gradient-text">Contact Us</h1>
              <p className="card__p--main">
                We’re here to answer your questions. Reach out to us anytime—by
                phone, email, or the form below.
              </p>
            </header>

            <section className="content-grid">
              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h2 className="gradient-text">Email</h2>
                <p className="card__p">
                  <a
                    className="email-anchor"
                    href="mailto:info@coveredbridge.properties"
                  >
                    info@coveredbridge.properties
                  </a>
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h2 className="gradient-text">Phone</h2>
                <p className="card__p">
                  <a className="phone-anchor" href="tel:+17025551234">
                    (702) 555-1234
                  </a>
                  <br />
                  <span className="phone__blurb">
                    Mon–Sun: 24/7 Operator Service
                  </span>
                  <br />
                  <span className="phone__final-blurb">
                    (Calls returned within one business day)
                  </span>
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <h2 className="gradient-text">Mailing Address</h2>
                <p className="card__p">
                  Covered Bridge Properties
                  <br />
                  1234 Rural Land Rd.
                  <br />
                  Las Vegas, NV 89123
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h2 className="gradient-text">Office Hours</h2>
                <p className="card__p">
                  Monday to Friday: 9am – 5pm PST
                  <br />
                  Weekends: Closed
                  <br />
                  <span className="office-hours--final-blurb">
                    We respond within 24 hours.
                  </span>
                </p>
              </article>
            </section>

            <section className="cta">
              <h2>Prefer to send a message right now?</h2>
              <a
                href="mailto:info@coveredbridge.properties"
                className="btn contact__submit-btn"
              >
                Message Us Now
              </a>
            </section>
          </div>
          <Footer footerRef={footerRef} isVisible="false" />
        </div>
      )}
    </>
  );
};

export default ContactPage;
