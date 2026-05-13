import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.email.value;

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    setEmailError("");
    setLoading(true);

    emailjs
      .sendForm(
        "service_3t1f49c", //service id
        "template_6c2wzop", //template id
        form.current,
        "8E2EITxwQCxhU3Kcb", //public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gray-50 dark:bg-slate-950 flex items-center"
    >
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <div
          className="
          bg-white dark:bg-slate-900
          border border-gray-300 dark:border-slate-700
          rounded-xl
          p-6
          shadow-sm
          "
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
              p-3
              rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-950
              text-gray-800 dark:text-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
  p-3
  rounded-lg
  border border-gray-300 dark:border-slate-700
  bg-white dark:bg-slate-950
  text-gray-800 dark:text-gray-200
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
            />

            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="
              p-3
              rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-950
              text-gray-800 dark:text-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
  mt-2
  bg-blue-600
  hover:bg-blue-700
  text-white
  py-3
  rounded-lg
  transition
  shadow-sm
  flex items-center justify-center gap-2
  disabled:opacity-70
  "
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : success ? (
                "Message Sent ✓"
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
