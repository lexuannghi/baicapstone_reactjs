import React from "react";
import styled from "styled-components";

const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = "nghile2k01@gmail.com";
    const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=&body=`;
    window.open(gmailComposeURL, "_blank");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <h2>Developer Editor</h2>
        <a title="Send Email" onClick={handleEmailClick}>
          Email: nghile2k01@gmail.com
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--color-background);
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.55);
  padding: 25px 0;
  position: absolute;
  z-index: 5;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--color-white);
    font-style: oblique;
    @media only screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  a {
    font-size: 16px;
    color: var(--color-white);
    cursor: pointer;
    text-decoration: none;
    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
