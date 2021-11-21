import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 15rem 0;
`;
export const AboutContainer = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  padding: 0 3rem;
`;

export const AboutTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 8rem;
  display: inline-block;

  &:after {
    content: "";
    display: block;
    width: 30%;
    padding-top: 1rem;
    border-bottom: 0.3rem solid var(--bright);
  }
  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
`;

export const AboutImage = styled.img`
  height: 40rem;
  object-fit: cover;
  opacity: 0.4;
  @media screen and (max-width: 1000px) {
    height: 30rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const AboutText = styled.p`
  line-height: 3rem;
  color: var(--secondary);
  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 505px) {
    line-height: 2rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.2rem;
  }
`;
