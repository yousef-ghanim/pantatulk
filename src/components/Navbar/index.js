import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  ContactDiv,
  Contact,
  Phone,
  Title,
  Envelope,
  Span,
  NavMenu,
  NavLinks,
  NavElem,
  ContactTop,
  NavBtn,
  Btn,
} from "./Navbar.styled";
import pic from "../../images/logo.png";
import { scrollTop } from "../ScrollHome";
import { siteLinks } from "../data";
const Navbar = ({ toggle }) => {
  const [navActive, setNavActive] = useState(false);

  const fixNav = () => {
    const screenPos = window.pageYOffset;
    if (screenPos > 102) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };
  window.addEventListener("scroll", fixNav);

  return (
    <>
      <Nav navActive={navActive}>
        <ContactTop>
          <ContactDiv>
            <Contact>
              <Phone /> : <Span href="tel:517-0606">517-0606</Span>
            </Contact>
            <Contact>
              <Envelope /> :{" "}
              <Span href="mailto:pantatulk@pantatulk.is">
                pantatulk@pantatulk.is
              </Span>
            </Contact>
          </ContactDiv>
        </ContactTop>
        <NavbarContainer>
          <NavLogo to="/" onClick={scrollTop}>
            <Logo src={pic} alt="Logo"></Logo>
            <Title>Túlkaþjónustan</Title>
          </NavLogo>
          <NavBtn onClick={toggle}>
            <Btn />
          </NavBtn>
          <NavMenu>
            {siteLinks.map((item) => {
              return (
                <NavLinks key={item.id}>
                  <NavElem
                    to={item.path}
                    activeClassName={item.class}
                    onClick={scrollTop}
                  >
                    {item.name}
                  </NavElem>
                </NavLinks>
              );
            })}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
