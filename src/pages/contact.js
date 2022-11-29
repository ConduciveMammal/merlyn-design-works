import React, { useState }  from "react"
import axios from "axios";

import Layout from "../components/structure/layout"
import SectionHeader from "../components/elements/section-header/section-header";
import Seo from "../components/seo"

import '../styles/forms.scss';
import '../styles/contact-page.scss';

function submitForm(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch("https://getform.io/f/e17fe6a1-2a18-4b27-ac16-bfa123017009", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
    .then((response) => {
      evt.target.reset();
      console.log(response)
    })
    .catch(error => console.log(error))
}

const ContactPage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    setServerState({ submitting: true });
    fetch("https://getform.io/f/e17fe6a1-2a18-4b27-ac16-bfa123017009", {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json",
      },
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
      <Layout>
        <h1>Contact Me</h1>
        <SectionHeader
          title="Say &rdquo;Hey!&ldquo; to me"
          />
        <form action="https://getform.io/f/e17fe6a1-2a18-4b27-ac16-bfa123017009" method="POST" onSubmit={handleOnSubmit} className={`contact-form${serverState.submitting ? 'contact-form--submitting' : ''}`}>
            <input type="hidden" name="_gotcha" style={{display: 'none'}}/>

            <div className="contact-form__wrapper">
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="name" className="input-wrapper__label">Name</label>
                  <input type="text" name="Name" id="name" placeholder="Name" autoComplete="name" required/>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input type="tel" name="Contact Number" id="contactNumber" placeholder="Contact Number" autoComplete="tel"/>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="Email Address" id="email" placeholder="Email Address" required autoComplete="email"/>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea name="Message" id="message" cols="30" rows="10" placeholder="How can I help?" required></textarea>
              </div>
            </div>

            <button type="submit" className="button button--icon">Send Message</button>
        </form>
      </Layout>
  );
}

export const Head = () => <Seo title="Contact Me" />

export default ContactPage
