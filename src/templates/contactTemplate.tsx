import React from "react";
import styled from "styled-components";
import FadingLine from "../components/fadingline";
import SectionTitle from "../components/sectionTitle";

const ContactDiv = styled.div``;

const ContactForm = styled.div``;

const HiddenField = styled.p`
  display: none;
`;

export default function ContactTemplate() {
  return (
    <ContactDiv id="contact" className="contact-container">
      <SectionTitle title={"Contact"} />
      <FadingLine />
      <ContactForm>
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <HiddenField>
            <label>
              Dip into the honeypot
              <input name="bot-field" />
            </label>
          </HiddenField>
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </ContactForm>
    </ContactDiv>
  );
}
