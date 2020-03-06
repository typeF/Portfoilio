import React from "react";
import styled from "styled-components";
import FadingLine from "../components/fadingline";
import SectionTitle from "../components/sectionTitle";
import GitHubLogo from "../components/githubLogo";
import LinkedInLogo from "../components/linkedInLogo";

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

const ContactForm = styled.div``;

const HiddenField = styled.p`
  display: none;
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

export default function ContactTemplate() {
  return (
    <ContactContainer id="contact" className="contact-container">
      <SectionTitle title={"Contact"} />
      <FadingLine />
      <ContactDiv>
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
            <ContactFieldDiv>
              <ContactFormLabel>
                Name:
                <ContactFormInput type="text" name="name" />
              </ContactFormLabel>
            </ContactFieldDiv>
            <ContactFieldDiv>
              <ContactFormLabel>
                Email:
                <ContactFormInput type="email" name="email" />
              </ContactFormLabel>
            </ContactFieldDiv>
            <ContactFieldDiv>
              <ContactFormLabel>
                Message:
                <ContactTextArea name="message"></ContactTextArea>
              </ContactFormLabel>
            </ContactFieldDiv>
            <ContactSubmitBtn>Submit</ContactSubmitBtn>
          </form>
        </ContactForm>
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
