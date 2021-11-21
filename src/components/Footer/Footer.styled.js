import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Wrapper = styled.section`
  padding: 3rem 0 1rem 0;
  text-align: center;
  background-color: var(--primary);
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3rem auto;
  max-width: 124rem;
  padding: 0 3rem;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
export const FooterLogo = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;
export const FooterTitle = styled.h4`
  font-size: 2rem;
  color: var(--bg-color);
  margin-bottom: 3rem;
`;
export const Logo = styled.img`
  height: 5rem;
`;
export const FooterContact = styled.div`
  text-align: left;
`;
export const Contact = styled.div`
  display: flex;
  align-items: center;
  color: var(--bg-color);
  margin-bottom: 0.5rem;
`;
export const Span = styled.span`
  font-size: 1.4rem;
`;
export const Number = styled.span`
  font-size: 1.4rem;
  color: var(--bright);
  font-weight: 700;
`;

export const FooterMenu = styled.div`
  text-align: left;
  margin-top: 5rem;
  max-width: 25rem;
`;

export const LinksTitle = styled.h4`
  font-size: 1.8rem;
  color: var(--bg-color);
  margin-bottom: 5rem;
`;

export const SiteMap = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`;
export const FooterLink = styled.li`
  margin-bottom: 2rem;
`;
export const SingleLink = styled(LinkR)`
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--bg-color);
  transition: 0.2s all ease-in-out;
  &:hover {
    color: var(--bright);
  }
`;
export const DateLine = styled.span`
  font-size: 1.2rem;
  color: var(--bg-color);
  margin: 0 auto;
`;
