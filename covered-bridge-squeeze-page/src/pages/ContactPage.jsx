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
import ContactMeModal from "../components/ContactMeModal";

import "./contact-page.css";

const ContactPage = () => {
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  useEffect(() => {
    // Track DOM content loaded
    const handleDOMContentLoaded = () => {
      // Your critical elements are ready, but maybe not images
      setIsLoading(false);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleDOMContentLoaded();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      return () =>
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
    }

    // Safety timeout - ensure loading screen disappears after a maximum time
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds max loading time

    return () => clearTimeout(safetyTimeout);
  }, []);

  const launchContactModal = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });

    // First set the animation state to true
    setIsModalAnimating(true);

    // Then open the modal
    setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <>
      <ContactMeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsModalAnimating={setIsModalAnimating}
      />
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
                <hr className="card__divider" />
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
                <hr className="card__divider" />
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
                <hr className="card__divider" />
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
                <hr className="card__divider" />
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
              <h2>
                Prefer to send a message <em>right now?</em>
              </h2>
              <a
                href="#"
                className="btn contact__submit-btn"
                onClick={launchContactModal}
              >
                Message Us Here
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
