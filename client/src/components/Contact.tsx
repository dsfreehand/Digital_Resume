import React, { useState, useRef, useEffect } from "react";
import "../styles/Contact.css";

declare global {
  interface Window {
    grecaptcha?: any;
    onRecaptchaSuccess?: () => void;
    onloadCallback?: () => void;
  }
}

window.onRecaptchaSuccess = () => {};
window.onloadCallback = () => {};

const Contact: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onRecaptchaSuccess = () => {
      setVerified(true);
    };

    window.onloadCallback = () => {
      const renderRecaptcha = () => {
        if (
          window.grecaptcha &&
          typeof window.grecaptcha.render === "function" &&
          recaptchaRef.current &&
          recaptchaRef.current.children.length === 0
        ) {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: "6LfocW0rAAAAAJSU3g9IJE12XRZlhpVWXJIpr3XK",
            callback: "onRecaptchaSuccess",
          });
        } else {
          setTimeout(renderRecaptcha, 100);
        }
      };

      renderRecaptcha();
    };

    if (window.grecaptcha) {
      window.onloadCallback();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeokplqd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
        setVerified(false);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setTimeout(() => setShowModal(false), 4000); // auto-close modal
      } else {
        alert("Something went wrong—please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred—please try again later.");
    }
  };

  return (
    <section id="contact" className="contactSection">
      <h2>Contact</h2>
      <p>
        Let’s build something amazing. Reach out anytime! <br />
        And please don't mind the reCAPTCHA—it's just to keep the bots away.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={4} placeholder="Your Message" required />
        <div ref={recaptchaRef} className="g-recaptcha" />
        {verified && <button type="submit">Send</button>}
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>✅ Message sent successfully!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
