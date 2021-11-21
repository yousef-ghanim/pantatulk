import React from "react";
import Image from "../../images/logo.png";
import {
  Wrapper,
  FooterContainer,
  FooterLogo,
  Logo,
  FooterTitle,
  FooterMenu,
  FooterLink,
  SingleLink,
  LinksTitle,
  FooterContact,
  Contact,
  Span,
  Number,
  DateLine,
  SiteMap,
} from "./Footer.styled";
import { scrollTop } from "../ScrollHome";
import { siteLinks } from "../data";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <FooterContainer>
          <FooterContact>
            <FooterLogo>
              <Logo src={Image} alt="logo"></Logo>
              <FooterTitle>Túlkaþjónustan</FooterTitle>
            </FooterLogo>
            <Contact>
              <Number>517-0606</Number>
            </Contact>
            <Contact>
              <Span>pantatulk@pantatulk.is</Span>
            </Contact>
            <Contact>
              <Span>Suðurlandsbraut 32, 108 Reykjavík</Span>
            </Contact>
          </FooterContact>
          <FooterMenu>
            <LinksTitle>Vefkort</LinksTitle>
            <SiteMap>
              {siteLinks.map((item) => {
                return (
                  <FooterLink>
                    <SingleLink to={item.path} onClick={scrollTop}>
                      {item.name}
                    </SingleLink>
                  </FooterLink>
                );
              })}
            </SiteMap>
          </FooterMenu>
        </FooterContainer>
        <DateLine>Túlkaþjónustan slf, {new Date().getFullYear()}</DateLine>
      </Wrapper>
    </>
  );
};

export default Footer;
