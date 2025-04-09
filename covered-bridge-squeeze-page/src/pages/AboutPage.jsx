import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHandshake,
  faBriefcase,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import LoadingState from "../components/LoadingState";

import "./about-page.css";

const AboutPage = () => {
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
        <div className="container about-container">
          <div className="inner-container">
            <header>
              <Link to="/">
                <img
                  src="/logo-main.png"
                  alt="Covered Bridge Properties"
                  className="about__header-img"
                  title="Return Home"
                />
              </Link>
              <h1 className="about__header gradient-text">
                About Covered Bridge Properties
              </h1>
              <p className="card__p--main">
                We provide straightforward solutions for landowners looking to
                sell their vacant parcels quickly and hassle-free.
              </p>
            </header>

            <section className="content-grid">
              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h2>
                  <span className="gradient-text">Who We Are</span>
                </h2>
                <p className="card__p">
                  Led by Joe Coviello, our family uses our own resources to
                  purchase land directly from owners who have decided their
                  properties no longer serve their needs or goals. Unlike
                  traditional real estate agents, we aren't listing your
                  property or charging commissions – we're the actual buyers
                  ready to make a cash offer.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h2>
                  <span className="gradient-text">What We Do</span>
                </h2>
                <p className="card__p">
                  We specialize in purchasing vacant land throughout the nation
                  with a simple, transparent approach:
                </p>
                <ul className="card__ul about__card-ul">
                  <li className="about--ul-li">
                    <u>Two-week cash closed offers</u>
                  </li>
                  <li className="about--ul-li">
                    <u>We handle all paperwork, back-taxes and closing costs</u>
                  </li>
                  <li className="about--ul-li">
                    <u>Flexible closing timelines</u>
                  </li>
                  <li className="about--ul-li">
                    <u>No commissions, fees, or repairs needed</u>
                  </li>
                </ul>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h2 className="gradient-text">
                  <span className="gradient-text">Our Business Model</span>
                </h2>
                <p className="card__p">
                  We purchase properties and then use strategies such as holding
                  them as long-term investments, reselling them immediately, or
                  keeping special parcels for our own use. This flexibility
                  enables us to consider properties that might not appeal to
                  conventional buyers.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <h2 className="gradient-text">
                  <span className="gradient-text">Why Work With Us</span>
                </h2>
                <p className="card__p">
                  When you sell to Covered Bridge Properties, you're dealing
                  directly with the decision-makers. No bank approvals or
                  financing contingencies—just a straightforward cash offer when
                  you decide your land no longer fits your needs.
                </p>
              </article>
            </section>

            <section className="testimonial">
              <p className="card__p">
                "Working with Covered Bridge was easy. I didn't have to lift a
                finger throughout the entire process. And he paid me in under
                two weeks just like he said."
              </p>
              <p className="testimonial-author">— John D., Property Seller</p>
            </section>

            <section className="cta">
              <h2>
                Ready to Make a Strong Decision Toward
                <br /> a Brighter Financial Future?
              </h2>
              <a
                href="http://localhost:3000/contact"
                className="btn about__submit-btn"
              >
                Get <strong>Your</strong> Cash Offer Today
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
          <Footer footerRef={footerRef} isVisible={true} />
        </div>
      )}
    </>
  );
};

export default AboutPage;
