import styled, { keyframes } from "styled-components";
import { Button } from "../Button";

const text = keyframes`
  from {
    transform: translateY(40rem);
    
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const bgImage = keyframes`
from {
  transform: scale(1.1);
}
  to {
    transform: scale(1);
  }
`;

export const Wrapper = styled.section`
  height: calc(100vh - 10rem);
  max-height: 65rem;
  overflow: hidden;
  position: relative;
`;
export const HeroBg = styled.img`
  height: 100%;
  width: 100%;

  position: absolute;
  object-fit: cover;
  z-index: -10;
  animation: ${bgImage} 5s;
  opacity: 1;
`;
export const HeroContainer = styled.div`
  height: 100%;
  max-width: 124rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: left;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`;

export const HeroText = styled.div`
  text-align: center;
`;

export const HeroImage = styled.img`
  height: 15rem;
  animation: ${text} 1s 0.5s forwards;
  opacity: 0;
  @media screen and (max-width: 1220px) {
    height: 10rem;
  }
  @media screen and (max-width: 380px) {
    height: 7rem;
  }
`;

export const HeroTitle = styled.h1`
  color: var(--primary);
  margin-bottom: 5rem;
  margin-top: -2rem;
  font-weight: 900;
  /* text-shadow: 0.2rem 0.2rem 0.1rem var(--secondary); */
  animation: ${text} 1s 0.7s forwards;
  opacity: 0;
  @media screen and (max-width: 1220px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 3rem;
    margin-top: 0;
  }
`;

export const HeroBtn = styled(Button)`
  animation: ${text} 1s 2s forwards;
  opacity: 0;
  /* box-shadow: 0.2rem 0.2rem 0.1rem var(--secondary); */
  &:active {
    box-shadow: unset;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.4rem;
  }
`;
