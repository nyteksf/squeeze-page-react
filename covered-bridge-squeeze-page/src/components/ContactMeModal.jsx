import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact-me-modal.css";

const ContactMeModal = ({
  isModalOpen,
  setIsModalOpen,
  setIsModalAnimating,
}) => {
  const form = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setAnimate(false); // start with slide-out state
      setTimeout(() => {
        setAnimate(true); // then trigger slide-in after 100ms
      }, 500);
    }
  }, [isModalOpen]);

  /* MAIL CONTACT FORM FUNCTIONALITY */
  /* WARNING: THIS NEEDS TO BE UPDATED TO MATCH OUR BRAND CONTEXT -- BELONGS TO ANOTHER PROJECT, SO DO NOT BE CONFUSED */
  function contact(e) {
    try {
      e.preventDefault();
      emailjs
        .sendForm("service_2zh7gkh", "template_athyrzu", form.current, {
          publicKey: "M5JGTBwzcn6wIf6a7",
        })
        .then(
          (result) => {
            setTimeout(() => {
              setIsModalOpen(false);
              form.current.reset();
            }, "300");
          },
          (error) => {
            alert(
              "Error: The email service is temporarily unavailable. Please contact me directly on email.nytek@gmail.com"
            );
          }
        );
    } catch (error) {
      console.error("Error in contact function:", error);
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-block-scroll");
    } else {
      document.body.classList.remove("modal-block-scroll");
    }

    return () => {
      document.body.classList.remove("modal-block-scroll");
    };
  }, [isModalOpen]);

  const closeModal = (isSubmit) => {
    setIsModalOpen(false); // First close the modal

    // Wait for animation to complete, then reset animation state
    setTimeout(() => {
      setIsModalAnimating(false);
      form.current.reset();
      if (isSubmit) {
        toast.success("Message sent successfully.");
      }
    }, 600); // Match this to your CSS animation duration
  };

  return (
    <>
      <div
        className={`contact-modal ${
          isModalOpen ? "modal--open" : "modal--closed"
        }`}
      >
        <div
          className={`modal__half modal__about ${
            animate ? "slide-in-left" : "slide-out-left"
          }`}
        >
          <img
            src="/logo-sm-1.png"
            alt="Covered Bridge Properties"
            className="modal__logo"
          />
          <h3 className="modal__title modal__title--about">
            <strong className="cyan gradient-txt">
              Still Holding That Land?
            </strong>
            <br />
            Maybe Now’s the Right Time to Talk.
          </h3>

          <h4 className="modal__sub-title modal__sub-title--about">
            You got our offer. Maybe you paused. Maybe life got busy. Maybe it
            just wasn’t the right moment.
          </h4>

          <p className="modal__para">
            But if you’re here now, something inside you is ready to reconsider.
            That’s not a push—it’s just a signal that you’re curious what your
            land might still be worth to someone who’s already done the
            research, and still wants to buy.
          </p>

          <p className="modal__para">
            With that in mind, we collaborate with landowners who have parcels
            they're not utilizing—be it inherited, set aside for years, or just
            not in use. No middlemen. No unnecessary steps.
          </p>

          <div className="modal__features">
            <h4 className="modal__features-title">
              Why Landowners Contact Us:
            </h4>
            <div className="modal__feature-list">
              <div className="modal__feature-item">
                ✔ <strong>Open to discussions—your terms, your pace</strong>
              </div>
              <div className="modal__feature-item">
                ✔{" "}
                <strong>
                  Fast closing—typically wrapping up in a fortnight
                </strong>
              </div>
              <div className="modal__feature-item">
                ✔{" "}
                <strong>
                  We handle all associated closing costs, taxes and paperwork
                </strong>
              </div>
              <div className="modal__feature-item">
                ✔{" "}
                <strong>Trusted local professionals manage the details</strong>
              </div>
              <div className="modal__feature-item">
                ✔{" "}
                <strong>
                  Interested in properties across various conditions
                </strong>
              </div>
            </div>
          </div>

          <p className="modal__para">
            So, if you’re reading this and wondering whether it’s too late or if
            you missed your window—just know:{" "}
            <em>
              our team is still ready to take a fresh look, and we respect
              sellers who take time to make the right decision.
            </em>{" "}
            We're waiting to help you choose which option is best when it comes
            to submitting your impending deal for review by our team, so go
            right ahead.
          </p>

          <p>Talk soon.</p>

          <p className="modal__tagline">
            <small>
              From Plat to Payment, Covered Bridge Properties Stands With You.
            </small>
          </p>
        </div>
        <div
          className={`modal__half modal__contact ${
            animate ? "slide-in-right" : "slide-out-right"
          }`}
        >
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => closeModal(false)}
            className="modal__exit click"
            size="2x"
          />
          <h3 className="modal__title modal__title--contact">
            Contact Us About Your Land
          </h3>
          <h4 className="modal__sub-title modal__sub-title--contact">
            Get a no-obligation cash offer within 48 hours.
          </h4>
          <form ref={form} id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item--label">
                <span className="cyan required-field">*</span> Name
              </label>
              <input
                type="text"
                name="user_name"
                className="contact__input"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">
                <span className="cyan required-field">*</span> E-mail
              </label>
              <input
                type="email"
                name="user_email"
                className="contact__input"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">
                <span className="cyan required-field">*</span> Message
              </label>
              <textarea
                type="text"
                name="message"
                className="contact__input"
                required
              ></textarea>
            </div>
            <button
              id="contact__submit"
              type="submit"
              onClick={() => closeModal(true)}
              className="form__submit"
            >
              Submit My Information
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fa-solid fa-spinner" aria-hidden="true"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking with you.
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMeModal;
