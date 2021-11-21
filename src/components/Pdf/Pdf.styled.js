import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 8rem 0;
  height: 90vh;
`;
export const PdfContainer = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 124rem;
  text-align: center;
`;
export const PdfImage = styled.img`
  width: 30rem;
  @media screen and (max-width: 350px) {
    width: 90%;
  }
`;
export const PdfLink = styled.a``;

export const PdfText = styled.p`
  margin-bottom: 3rem;
  font-weight: bold;
  color: var(--primary);
`;
