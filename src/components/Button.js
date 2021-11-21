import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  text-decoration: none;
  font-size: 2rem;
  color: var(--bg-color);
  border: 0.2rem solid var(--btn);
  padding: 1rem 2rem;
  border-radius: 3rem;
  background-color: var(--btn);
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: transparent;
    color: var(--btn);
  }
`;
