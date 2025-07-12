import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = ({ footerRef, isVisible = false, ScrollReveal = false }) => {
  const FallbackWrapper = ({ children }) => <>{children}</>;
  const Reveal = ScrollReveal || FallbackWrapper;
  return (
    <footer
      style={{ display: isVisible ? "flex" : "none" }}
      className="site-footer"
      ref={footerRef}
    >
      <hr
        className="splitter"
        style={{
          display: isVisible ? "block" : "none", // Conditionally show/hide the HR
        }}
      />
      <div className="footer-container">
        <div className="footer-inner">
          <div className="footer-brand-social">
            <Reveal direction="left">
              <div className="footer-brand">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="/logo-sm-1a.png"
                      className="logo-sm"
                      alt="small logo"
                    />
                  </Link>
                </div>
                <p className="footer-tagline">
                  <em>"From Land to Deed, Covered Bridge Leads."</em>
                </p>
              </div>
            </Reveal>

            <div className="footer-links">
              <Reveal direction="up" delay={0.1}>
                <div className="footer-column footer-column-1">
                  <h3 className="footer-heading">Explore</h3>
                  <ul>
                    <li className="footer-link">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="footer-link">
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li className="footer-link">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="footer-link">
                      <Link to="/whyweexist">Why We Exist</Link>
                    </li>
                    {/* 
                  <li className="footer-link">
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                  */}
                    <li className="footer-link">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="footer-column footer-column-2">
                  <h3 className="footer-heading">Legal</h3>
                  <ul>
                    <li className="footer-link">
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>
                    <li className="footer-link">
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="footer-column footer-column-3">
                  <ul className="footer__list-4 footer__list">
                    <li>
                      <h2 className="footer-heading">Follow Us</h2>
                    </li>
                    <li className="footer__list-item">
                      <ul className="footer__social-links">
                        <li className="footer__list-item footer__list-item--social">
                          <a href="https://www.facebook.com/profile.php?id=61577295317770">
                            <div className="footer__social-link footer__social-link--facebook">
                              <FontAwesomeIcon icon={faFacebook} />
                            </div>
                          </a>
                        </li>
                        <li className="footer__list-item footer__list-item--social">
                          <a href="https://www.x.com/BridgeLandCo/">
                            <div className="footer__social-link footer__social-link--twitter">
                              <FontAwesomeIcon icon={faTwitter} />
                            </div>
                          </a>
                        </li>
                        <li className="footer__list-item footer__list-item--social cursor-not-allowed">
                          <div className="footer__social-link footer__social-link--instagram cursor-not-allowed">
                            <FontAwesomeIcon icon={faInstagram} />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Covered Bridge Property Holdings
          LLC., All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
