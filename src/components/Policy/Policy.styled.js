import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 8rem 0;
`;
export const PolicyContainer = styled.div`
  padding: 0 3rem;
  max-width: 124rem;
  margin: 0 auto;
`;
export const PolicyTitle = styled.h3`
  color: var(--primary);
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 30%;
    padding-top: 1rem;
    border-bottom: 0.3rem solid var(--bright);
  }
  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
`;
export const PolicyText = styled.p`
  margin-top: 5rem;
`;
export const Span = styled.span`
  font-weight: bold;
`;
