import styled from "styled-components";
import { Button } from "../Button";

export const Wrapper = styled.section`
  position: relative;
  height: 25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.9;
`;

export const ContactContaier = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContactTitle = styled.h2`
  color: var(--primary);
  margin-bottom: 3rem;
  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 470px) {
    font-size: 3rem;
  }
`;

export const ContactBtn = styled(Button)`
  @media screen and (max-width: 470px) {
    font-size: 1.5rem;
  }
`;
