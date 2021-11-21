import styled from "styled-components";
import { GiConversation } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";

export const Wrapper = styled.section`
  text-align: center;
  padding: 10rem 0;
  border-bottom: 0.1rem solid var(--shadow);
`;
export const ServicesTitle = styled.h3`
  color: var(--primary);
  display: inline-block;
  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 30%;
    padding-top: 1rem;
    border-bottom: 0.3rem solid var(--bright);
  }
  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
`;

export const ServicesContainer = styled.div`
  padding: 0 3rem;
  margin: 0 auto;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 124rem;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Service = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  background-color: var(--shadow);
  width: 50rem;

  @media screen and (max-width: 1140px) {
    width: 40rem;
  }

  @media screen and (max-width: 940px) {
    margin-bottom: 5rem;
    margin: 0 auto 5rem auto;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;
export const ServiceTitle = styled.h4`
  color: var(--secondary);
  margin: 2rem 0;
  font-weight: 300;
  color: var(--primary);
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;
export const ServiceIconGi = styled(GiConversation)`
  font-size: 7rem;
  color: var(--bright);
`;
export const ServiceIconCg = styled(CgNotes)`
  font-size: 7rem;
  color: var(--bright);
`;
export const ServiceText = styled.p`
  color: var(--secondary);
  line-height: 3rem;
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
