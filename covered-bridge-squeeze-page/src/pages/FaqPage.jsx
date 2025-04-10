import { Link } from "react-router";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faFileAlt,
  faLandmark,
  faMoneyBillWave,
  faHandshake,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";
import ContactMeModal from "../components/ContactMeModal";

import "./faq-page.css";

const FaqPage = () => {
  const footerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  useEffect(() => {
    // Using window.onload to ensure all resources are loaded
    window.onload = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="about-container">
          <div className="inner-container">
            <header className="about__header">
              <Link to="/">
                <img
                  src="/logo-main.png"
                  alt="Covered Bridge Properties"
                  className="faq__header-img"
                  title="Return Home"
                />
              </Link>
              <h1 className="about__header gradient-text">
                Frequently Asked Questions
              </h1>
              <p className="card__p--main">
                Have questions about selling your land? We've answered the most
                common ones below.
              </p>
            </header>

            <section className="content-grid">
              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <h2>
                  <span className="gradient-text">
                    Why would I get a letter about selling my land?
                  </span>
                </h2>
                <p className="card__p">
                  We identify properties that have been held long-term, may be
                  vacant or inherited, and reach out directly to offer cash
                  purchases with no commissions or agent fees. If you received
                  our letter, it means we’re ready to buy your property as-is,
                  fast.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <h2>
                  <span className="gradient-text">
                    What types of land do you buy?
                  </span>
                </h2>
                <p className="card__p">
                  We purchase all kinds of raw, vacant land—be it rural or
                  residential. Whether it's off-grid desert acreage or a
                  residential lot near development, we’ll consider it with the
                  seriousness and attention to detail it deserves.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faLandmark} />
                </div>
                <h2>
                  <span className="gradient-text">
                    Do you only buy land in certain states?
                  </span>
                </h2>
                <p className="card__p">
                  No. We are open to buying land across the entire United
                  States. From California to Florida to remote areas in Arizona,
                  Nevada, Texas, Oregon, and more.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h2>
                  <span className="gradient-text">
                    Will you verify ownership before closing?
                  </span>
                </h2>
                <p className="card__p">
                  To prevent costly acquisition related mistakes, Covered Bridge
                  must pause to consider important details such as clarity of
                  title, as well as property slope, flood plain location, and
                  numerous other factors before completing any sale. Reality
                  demands we habitually dot proverbial i's and cross our t's as
                  well.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h2>
                  <span className="gradient-text">
                    What happens if I accept the offer?
                  </span>
                </h2>
                <p className="card__p">
                  We send a simple purchase agreement. Once signed, we open
                  escrow with a licensed title company or attorney in your
                  state. They ensure clean title, handle paperwork, and wire you
                  the funds.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <h2>
                  <span className="gradient-text">
                    How long does the process take?
                  </span>
                </h2>
                <p className="card__p">
                  Most deals close within 1–2 weeks. If title is clean, we’ve
                  closed as fast as 7 days. We are able to accommodate flexible
                  timelines if you need extra time to prepare or otherwise
                  arrange owner financing.
                </p>
              </article>
            </section>

            <section className="cta">
              <h2>Want clarity on something not covered above?</h2>
              <a
                href="#"
                className="btn about__submit-btn"
                onClick={launchContactModal}
              >
                Contact Us With Your Question Here
              </a>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    className="gradient-text"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <svg
                    className="gradient-text"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>info@coveredbridge.properties</span>
                </div>
              </div>
            </section>
          </div>
          <Footer footerRef={footerRef} isVisible="false" />
        </div>
      )}
    </>
  );
};

export default FaqPage;
