import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

export const Wrapper = styled.section`
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
`;
export const StaffContainer = styled.div`
  display: grid;
  align-content: space-around;
  grid-template-columns: repeat(3, 20rem);
  justify-content: space-between;
  max-width: 124rem;
  width: 100%;
  padding: 0 3rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 20rem);
    grid-row-gap: 8rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 20rem);
    justify-content: center;
  }
`;
export const Profile = styled.article``;
export const ProfilePic = styled.div`
  width: 100%;
  height: 25rem;
  margin-bottom: 2rem;
`;
export const Picture = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.5rem var(--secondary);
`;
export const ProfileInfo = styled.div`
  color: var(--primary);
`;

export const ProfileTitle = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
`;
export const ProfilePosition = styled.p`
  font-size: 1.3rem;
  color: var(--bright);
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Phone = styled(FaPhoneAlt)`
  font-size: 1.3rem;
  margin-right: 0.2rem;
`;
export const Mobile = styled(FaMobileAlt)`
  font-size: 1.3rem;
  margin-right: 0.2rem;
`;

export const Envelope = styled(FaEnvelope)`
  font-size: 1.3rem;
  margin-right: 0.2rem;
`;

export const Span = styled.span`
  color: var(--primary);
  font-size: 1.3rem;
`;
export const Email = styled.span`
  font-size: 1.3rem;
`;
export const Icon = styled(BsPersonFill)`
  font-size: 20rem;
  height: 25rem;
  color: var(--bg-color);
  background-color: var(--shadow);
  border: 0.3rem solid var(--shadow);
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.5rem var(--secondary);
`;
