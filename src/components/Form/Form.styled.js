import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 5rem 0 10rem 0;
`;
export const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 124rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;
export const FormContainer = styled.div`
  width: 70rem;
  padding: 3rem;
  text-align: center;
  background-color: lightblue;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const FormTitle = styled.h3`
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
export const FormWrapper = styled.form`
  margin: 5rem 0;
`;
export const InputDiv = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 38rem;
  align-items: center;
  @media screen and (max-width: 520px) {
    flex-direction: column;
    width: unset;
    justify-content: right;
    align-items: flex-end;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: start;
  }
`;
export const InputWrapperTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-left: 0.3rem;
  color: var(--primary);
`;

export const Input = styled.input`
  padding: 1.5rem 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.4rem;
  height: 3rem;
  width: 50rem;
  background-color: var(--bg-color);
  border: none;
  font-size: 1.5rem;
  color: var(--primary);

  &:focus {
    outline: 0.1rem solid var(--secondary);
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const InputTime = styled.input`
  padding: 1.5rem 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  height: 3rem;
  width: 12rem;
  background-color: var(--bg-color);
  border: none;
  font-size: 1.5rem;
  color: var(--primary);
  &:focus {
    outline: 0.1rem solid var(--primary);
  }
`;

export const Textarea = styled.textarea`
  min-width: 50rem;
  min-height: 7rem;
  max-width: 50rem;
  max-height: 7rem;
  padding: 1rem;
  margin: 0.5rem 0 4rem 0;
  background-color: var(--bg-color);
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  &:focus {
    outline: 0.1rem solid var(--secondary);
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
export const FormBtn = styled.button`
  padding: 1.5rem 2rem;
  color: var(--bg-color);
  background-color: var(--btn);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  transition: 0.2s all ease-in-out;
  float: right;

  &:hover {
    background-color: var(--btnhover);
  }
`;

export const Span = styled.span`
  color: var(--btnhover);
`;

export const AlertText = styled.h5`
  color: ${(props) => (props.green ? "green" : "red")};
  font-size: 1.5rem;
  float: left;
  margin-top: -3rem;
  @media screen and (max-width: 460px) {
    margin-top: 0rem;
  }
`;

export const ContactWrapper = styled.div``;
export const ContactDiv = styled.div`
  max-width: 25rem;
`;
export const ContactItem = styled.div`
  text-align: center;
  margin-bottom: 7rem;
  font-size: 2rem;
  padding: 2rem;
`;
export const ContactIcon = styled.div`
  font-size: 4rem;
  color: var(--bright);
`;
export const ContactInfo = styled.div`
  color: var(--primary);
`;
