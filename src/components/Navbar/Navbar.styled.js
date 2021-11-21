import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export const ContactTop = styled.div`
  width: 100%;
  background-color: var(--primary);
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 124rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media screen and (max-width: 390px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 300px) {
    padding: 0 0.5rem;
  }
`;

export const Contact = styled.div`
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--bg-color);
`;

export const Span = styled.a`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  color: var(--bg-color);
  @media screen and (max-width: 390px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const Phone = styled(FaPhoneAlt)`
  margin-right: 0.5rem;
  color: var(--bright);
  font-size: 1.8rem;

  @media screen and (max-width: 390px) {
    font-size: 1.4rem;
  }
`;
export const Envelope = styled(FaEnvelope)`
  margin-right: 0.5rem;
  color: var(--bright);
  font-size: 1.8rem;
  margin-bottom: -0.5rem;

  @media screen and (max-width: 390px) {
    font-size: 1.4rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  z-index: 10;
  position: ${({ navActive }) => (navActive ? "sticky" : "unset")};
  top: ${({ navActive }) => (navActive ? "0" : "unset")};
  background-color: var(--bg-color);

  border-bottom: 2.5px solid;
  border-image: linear-gradient(
      to right,
      skyblue,
      grey,
      yellow,
      yellow,
      red,
      blueviolet
    )
    5;
`;

export const NavbarContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 124rem;
  margin: 0 auto;
  top: 0;
`;

export const NavbarWrapper = styled.div``;

export const NavLogo = styled(Link)`
  text-decoration: none;
`;
export const Logo = styled.img`
  height: 3.5rem;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const NavLinks = styled.li`
  margin-left: 2.5rem;
`;
export const NavElem = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8rem;
  padding-bottom: 1rem;
  color: var(--primary);
  transition: 0.2s all ease-in-out;
  &:hover {
    color: var(--bright);
  }
  &.active {
    color: var(--bright);
    border-bottom: 0.2rem solid var(--bright);
  }
`;

export const Title = styled.h4`
  color: var(--primary);
  font-size: 1.2rem;
  margin-left: 0.6rem;
  margin-top: -0.5rem;
`;

export const NavBtn = styled.a`
  align-self: center;
  color: var(--primary);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--bright);
  }
  @media screen and (min-width: 721px) {
    display: none;
  }
`;
export const Btn = styled(FaBars)`
  font-size: 2.7rem;
`;
