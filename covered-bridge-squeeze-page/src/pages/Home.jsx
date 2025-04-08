import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import LoadingState from "../components/LoadingState";
import ScrollReveal from "../components/ScrollReveal";

import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const startBtnRef = useRef(null);
  const videoSectionRef = useRef(null);
  const optionsSectionRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Using window.onload to ensure all resources are loaded
    // Fallback timeout in case onload doesn't trigger
    const timer = setTimeout(() => {
      window.onload = () => {
        setIsLoading(false);
      };
      setIsLoading(false);
    }, 3500); // 2 seconds fallback

    return () => {
      clearTimeout(timer); // Clean up the timer
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        startBtnRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleStartClick = () => {
    if (videoSectionRef.current) {
      // Make the video section visible
      videoSectionRef.current.style.display = "flex"; // Show the video section

      // Scroll to the video section smoothly
      videoSectionRef.current.scrollIntoView({ behavior: "smooth" });

      // Show "return to top" button
      setIsVisible(true);
    }

    console.log("START button clicked or Enter key pressed");
  };

  const handleFauxPlay = () => {
    // Make video section & contact form visible
    // Scroll to video section
    // Optional: focus on CTA or reveal animation
    console.log("START button clicked or Enter key pressed");
    alert("START button clicked or Enter key pressed");
    // Insert your logic here
  };

  const handleShowOptions = () => {
    if (optionsSectionRef.current) {
      // Make the video section visible
      optionsSectionRef.current.style.display = "flex"; // Show the video section
      footerRef.current.style.display = "flex"; // Show the video section

      // Scroll to the video section smoothly
      optionsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    console.log("Show options button was clicked");
  };

  const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!itemRef) return;

      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();

      // POSITION OF MOUSE RELATIVE TO BENTOCARD
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      const tiltX = (relativeY - 0.5) * 16;
      const tiltY = (relativeX - 0.5) * -16;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;

      setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
      setTransformStyle("");
    };

    return (
      <div
        className={className}
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          {/* <ButtonToTop isVisible={isVisible} /> */}
          <section className="hero">
            <div className="hero--container">
              <figure className="logo-main--wrapper">
                <img
                  src="/logo-sm-3.png"
                  className="logo-main logo-main--img"
                />
                <img
                  src="/logo-sm-3.png"
                  className="logo-main--dark logo-main--img"
                />
              </figure>
              <ScrollReveal direction="up">
                <h2 className="hero--header">
                  Please tell Us about <strong>Yourself</strong> & the
                  <br />
                  <strong>Land You want to SELL.</strong>
                  <br />
                  We're Excited to Meet You!
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="hero--sub-txt">
                  This process only takes about 5 minutes to complete.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.4}>
                <div className="hero--control-btns">
                  <button
                    className="btn--cta"
                    ref={startBtnRef}
                    onClick={handleStartClick}
                  >
                    <strong className="btn-cta--fx">START</strong>
                  </button>
                  <p className="btn--cta__side-txt">
                    press <strong>Enter ↵</strong>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>
          <section className="video-section" ref={videoSectionRef}>
            <div className="video-section--inner">
              <ScrollReveal direction="left">
                <h2 className="video-heading">
                  Imagine{" "}
                  <span className="highlighter--fx">
                    <u>Freedom</u>
                  </span>{" "}
                  From Your{" "}
                  <span className="highlighter--fx">
                    <u>Unwanted Land</u>
                  </span>{" "}
                  In{" "}
                  <span className="highlighter--fx">
                    <u>Just Days</u>
                  </span>
                  ...
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <p className="video-subtext video-subtext-1">
                  That property you've been <strong>burdened</strong> with—the{" "}
                  <strong>back taxes</strong>, the{" "}
                  <strong>maintenance costs</strong>, the{" "}
                  <strong>constant worry</strong>—all of it can{" "}
                  <strong>be gone</strong> with{" "}
                  <strong>one simple decision</strong>. Picture waking up in two
                  weeks with <strong>cash</strong> in your account instead of
                  land on your mind.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3}>
                <p className="video-subtext">
                  Watch our <strong>quick video</strong> to see how{" "}
                  <strong>landowners just like you</strong> have traded their{" "}
                  <strong>headaches</strong> for{" "}
                  <strong>payment notifications</strong>. Don't wait: Step
                  confidently into a <strong>brighter financial future</strong>{" "}
                  through Covered Bridge, today.
                </p>
              </ScrollReveal>

              {/* FAUX VIDEO PLAYER OPTION */}
              <div className="video-frame faux-player" onClick={handleFauxPlay}>
                <img
                  src="/static-thumbnail.jpg"
                  alt="Watch intro"
                  className="video-thumb"
                />
                <div className="play-button">▶</div>
              </div>
              {/* OR: REAL EMBED OPTION (example: YouTube) */}
              {/* 
            <div className="video-frame">
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Intro Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            </div>
          */}
              <ScrollReveal direction="up" delay={0.5}>
                <button
                  className="btn--cta btn--cta-below-video"
                  onClick={handleShowOptions}
                >
                  “I’m Ready To Get Paid For My Land"{" "}
                  <span className="cta--arrow">
                    <strong>→</strong>
                  </span>
                </button>
              </ScrollReveal>
            </div>
          </section>
          <section id="contact-options" className="contact-options" ref={optionsSectionRef}>
            <div className="contact-options--inner">
              <ScrollReveal direction="right">
                <h2 className="contact-header">
                  💬 Get a Cash Offer — Your Way.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <p className="contact-subtext">
                  Whether you talk to a real person, chat with AI, or mail in
                  your form, our goal is the same: to make you a serious,
                  no-pressure cash offer for your land.
                </p>
              </ScrollReveal>

              <div className="contact-buttons">
                <ScrollReveal direction="left" delay={0.2}>
                  <BentoTilt>
                    <div className="contact-option">
                      <a
                        href="https://reception247.com/YOUR_UNIQUE_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn--option"
                      >
                        📞 Talk To A Real Person (24/7)
                      </a>
                      <p className="microtext">
                        A live operator who understands land sales evaluates if
                        your ideal price is acceptable.
                        <br />
                        (Quickest.)
                      </p>
                    </div>
                  </BentoTilt>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <BentoTilt>
                    <div className="contact-option">
                      <a
                        href="https://m.me/YOUR_PAGE_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn--option btn--option-secondary"
                      >
                        🤖 Make a Deal With Our AI Assistant
                      </a>
                      <p className="microtext">
                        No humans. No pressure. Talk to our bot and get a
                        response on your price offer in minutes.
                        <br />
                        (Easiest.)
                      </p>
                    </div>
                  </BentoTilt>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4}>
                  <BentoTilt>
                    <div className="contact-option">
                      <a
                        href="/printable-sell-my-land-form.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn--option btn--option-tertiary"
                      >
                        📝 Print & Mail Your Land Info Instead
                      </a>
                      <p className="microtext">
                        Print and send us your land info instead. We’ll evaluate
                        it and get your offer started.
                        <br />
                        (No guarantee of acceptance.)
                      </p>
                    </div>
                  </BentoTilt>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.5}>
                <p className="contact-note">
                  <em>
                    All three paths lead to the same place:{" "}
                    <strong>
                      serious <span className="cash-green">cash</span> offers
                    </strong>{" "}
                    from a team that respects your time and wants to help.
                  </em>
                </p>
              </ScrollReveal>
            </div>
          </section>
          <footer className="site-footer" ref={footerRef}>
            <hr
              className="splitter"
              style={{
                display: isVisible ? "block" : "none", // Conditionally show/hide the HR
              }}
            />
            <div className="footer-container">
              <div className="footer-inner">
                <ScrollReveal direction="left">
                  <div className="footer-brand">
                    <div className="footer-logo">
                      <img
                        src="/logo-sm-1a.png"
                        className="logo-sm"
                        alt="small logo"
                      />
                    </div>
                    <p className="footer-tagline">
                      <em>"From Land to Deed, Covered Bridge Leads."</em>
                    </p>
                  </div>
                </ScrollReveal>

                <div className="footer-links">
                  <ScrollReveal direction="up" delay={0.1}>
                    <div className="footer-column footer-column-1">
                      <h3 className="footer-heading">Explore</h3>
                      <ul>
                        <li className="footer-link">
                          <a href="/faq">FAQ</a>
                        </li>
                        <li className="footer-link">
                          <a href="/about">About</a>
                        </li>
                        <li className="footer-link">
                          <a href="/testimonials">Testimonials</a>
                        </li>
                        <li className="footer-link">
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.2}>
                    <div className="footer-column footer-column-2">
                      <h3 className="footer-heading">Legal</h3>
                      <ul>
                        <li className="footer-link">
                          <a href="/terms">Terms & Conditions</a>
                        </li>
                        <li className="footer-link">
                          <a href="/privacy">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.3}>
                    <div className="footer-column footer-column-3">
                      <ul className="footer__list-4 footer__list">
                        <li>
                          <h2 className="footer-heading">Follow Us</h2>
                        </li>
                        <li className="footer__list-item">
                          <ul className="footer__social-links">
                            <li className="footer__list-item footer__list-item--social">
                              <div className="footer__social-link footer__social-link--facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                              </div>
                            </li>
                            <li className="footer__list-item footer__list-item--social">
                              <div className="footer__social-link footer__social-link--twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                              </div>
                            </li>
                            <li className="footer__list-item footer__list-item--social">
                              <div className="footer__social-link footer__social-link--instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Covered Bridge Properties LLC.
                All rights reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
