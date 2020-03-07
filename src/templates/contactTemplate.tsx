import React, { useState } from "react";
import styled from "styled-components";
import FadingLine from "../components/fadingline";
import SectionTitle from "../components/sectionTitle";
import GitHubLogo from "../components/githubLogo";
import LinkedInLogo from "../components/linkedInLogo";
import Loading from "../components/loading";

const ContactContainer = styled.div`
  margin-top: 250px;
  margin-bottom: 50px;
  border: 1px solid grey;
  background: white;
  border-radius: 4px;
  padding: 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
`;

const ContactDiv = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SocialMediaA = styled.a``;

const ContactFormContainer = styled.div``;

const ContactForm = styled.form`
  position: relative;
`;

const ContactFieldDiv = styled.div`
  margin-bottom: 20px;
`;

const ContactFormLabel = styled.label`
  margin-bottom: 0px;
`;

const ContactFormInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2.5px dashed grey;
  color: #ef4d53;
  width: 100%;
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  margin-top: 10px;
  resize: vertical;
  border: 2.5px dashed grey;
  border-radius: 3px;
  padding: 10px;
`;

const ContactSubmitBtn = styled.button`
  float: right;
  cursor: pointer;
  font-weight: bold;
  background: white;
  border: 1px solid grey;
  border-radius: 3px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.6);
  transition: background 0.5s, border 0.5s, color 0.5s;
  &:hover {
    background: #ef4d53;
    color: white;
    border: 1px solid white;
  }
`;

const SubmitResponse = styled.span`
  display: flex;
  justify-content: right;
  font-size: 1rem;
  text-align: right;
`;

const SubmitThanks = styled.p`
  position: absolute;
  right: 0;
  margin-top: 12px;
  color: #ef4d53;
  text-align: right;
  font-size: 0.9rem;
`;

export default function ContactTemplate() {
  const [submitResponse, setSubmitResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = event => {
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact Form", ...formValues }),
    })
      .then(() => {
        setSubmitResponse("Success");
        alert("Success!");
      })
      .catch(error => {
        setSubmitResponse("Failed");
        alert(error);
      });

    setLoading(false);
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <ContactContainer id="contact" className="contact-container">
      <SectionTitle title={"Contact"} />
      <FadingLine />
      <ContactDiv>
        <ContactFormContainer>
          <ContactForm
            name="Contact Form"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Contact Form" />
            <ContactFieldDiv>
              <ContactFormLabel>
                Name:
                <ContactFormInput
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
              </ContactFormLabel>
            </ContactFieldDiv>
            <ContactFieldDiv>
              <ContactFormLabel>
                Email:
                <ContactFormInput
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </ContactFormLabel>
            </ContactFieldDiv>
            <ContactFieldDiv>
              <ContactFormLabel>
                Message:
                <ContactTextArea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  required
                />
              </ContactFormLabel>
            </ContactFieldDiv>
            {!loading && submitResponse === "" && (
              <ContactSubmitBtn type="submit">Submit</ContactSubmitBtn>
            )}
            {loading && <Loading />}
            {!loading && submitResponse === "Success" && (
              <div>
                <SubmitResponse>Message Sent.</SubmitResponse>
                <SubmitThanks>
                  Thanks, I&apos;ll respond as soon as I can!
                </SubmitThanks>
              </div>
            )}
            {!loading && submitResponse === "Failed" && (
              <SubmitResponse>Error!</SubmitResponse>
            )}
          </ContactForm>
        </ContactFormContainer>
        <ContactSocialMedia>
          <SocialMediaA href="https://github.com/typeF" target="_blank">
            <GitHubLogo />
          </SocialMediaA>
          <SocialMediaA
            href="https://linkedin.com/in/franklamfl"
            target="_blank"
          >
            <LinkedInLogo />
          </SocialMediaA>
        </ContactSocialMedia>
      </ContactDiv>
    </ContactContainer>
  );
}
