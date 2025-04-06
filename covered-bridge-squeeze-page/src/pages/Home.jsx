import React, { useEffect, useRef } from "react";

import "./home.css";

const Home = () => {
  {
    /* WHEN ENTER KEY/START BUTTON IS CLICKED, MAKE VIDEO SECTION & CONTACT FORM VISIBLE & SCROLL TO VIDEO SECTION, WITH CTA BUTTON THERE TO GO DOWN TO "FORMS" AKA PHONE AND CHATBOT LINKS */
  }
  const startBtnRef = useRef(null);
  const videoSectionRef = useRef(null);
  const optionsSectionRef = useRef(null);

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

      // Scroll to the video section smoothly
      optionsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    console.log("Show options button was clicked");
  };

  return (
    <>
      <section className="hero">
        <div className="hero--container">
          <figure className="logo-main--wrapper">
            <img src="/logo-sm-3.png" className="logo-main logo-main--img" />
            <img
              src="/logo-sm-3.png"
              className="logo-main--dark logo-main--img"
            />
          </figure>
          <h2 className="hero--header">
            Please tell Us about <strong>Yourself</strong> & the
            <br />
            <strong>Land You want to SELL.</strong>
            <br />
            We're Excited to Meet You!
          </h2>
          <p className="hero--sub-txt">
            This process only takes about 5 minutes to complete.
          </p>
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
        </div>
      </section>
      <section className="video-section" ref={videoSectionRef}>
        <div className="video-section--inner">
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
          <p className="video-subtext video-subtext-1">
            That property you've been <strong>burdened</strong> with—the{" "}
            <strong>back taxes</strong>, the <strong>maintenance costs</strong>,
            the <strong>constant worry</strong>—all of it can{" "}
            <strong>disappear</strong> with <strong>one simple decision</strong>
            . Picture waking up next week with <strong>cash</strong> in your
            account instead of land on your mind.
          </p>
          <p className="video-subtext">
            Watch our <strong>quick video</strong> to see how{" "}
            <strong>landowners just like you</strong> have traded their{" "}
            <strong>headaches</strong> for{" "}
            <strong>payment notifications</strong>. Don't wait: Step confidently
            into a <strong>brighter financial future</strong> through Covered
            Bridge, today.
          </p>

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
          <button
            className="btn--cta btn--cta-below-video"
            onClick={handleShowOptions}
          >
            “I’m Ready To Get Paid For My Land"{" "}
            <span className="cta--arrow">
              <strong>→</strong>
            </span>
          </button>
        </div>
      </section>
      <section className="contact-options" ref={optionsSectionRef}>
        <div className="contact-options--inner">
          <h2 className="contact-header">💬 Get a Cash Offer — Your Way.</h2>

          <p className="contact-subtext">
            Whether you talk to a real person, chat with AI, or mail in your
            form, our goal is the same: to make you a serious, no-pressure cash
            offer for your land.
          </p>

          <div className="contact-buttons">
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
                A live operator who understands land sales and can see if your
                offer is accepted, immediately.
              </p>
            </div>
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
                No humans. No pressure. Talk to our bot and get a response on
                your cash offer in minutes.
              </p>
            </div>
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
                Print and send us your land info instead. We’ll evaluate it and
                get your offer started. <br />
                (No guarantee of acceptance.)
              </p>
            </div>
          </div>
          <p className="contact-note">
            <em>
              All three paths lead to the same place:{" "}
              <strong>
                serious <span className="cash-green">cash</span> offers
              </strong>{" "}
              from a team that respects your time and wants to help.
            </em>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
