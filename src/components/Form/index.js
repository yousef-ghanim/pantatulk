import React, { useState } from "react";
import axios from "axios";
import {
  Wrapper,
  ContactContainer,
  FormContainer,
  FormWrapper,
  FormTitle,
  FormBtn,
  InputWrapper,
  InputWrapperTime,
  Label,
  Input,
  InputTime,
  Textarea,
  InputDiv,
  Span,
  AlertText,
  ContactWrapper,
  ContactDiv,
  ContactItem,
  ContactIcon,
  ContactInfo,
} from "./Form.styled";
import { contact } from "../data";

const Form = () => {
  const formUrl = "https://www.pantatulk.is/_api/wix-forms/v1/submit-form";

  const intialFormState = {
    name: "",
    company: "",
    email: "",
    language: "",
    date: "",
    from: "",
    to: "",
    ID: "",
    message: "",
  };

  const [formState, setFormState] = useState(intialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [alert, SetAlert] = useState({ msg: "", green: true });

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };
    try {
      const result = await axios.post(formUrl, payload);
      console.log(result);
      SetAlert({
        msg: "Eyðublaðið var sent",
        green: true,
      });
      setFormState(intialFormState);
    } catch (error) {
      console.log(error);
      SetAlert({
        msg: "Villa, vinsamlegast reyndu aftur",
        green: false,
      });
    }
  };

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  return (
    <Wrapper>
      <ContactContainer>
        <FormContainer>
          <FormTitle>Pantaðu túlk</FormTitle>
          <FormWrapper onSubmit={submitForm}>
            <InputWrapper>
              <Label htmlFor="name">Nafn</Label>
              <Input
                type="text"
                id="name"
                value={formState.name}
                onChange={updateFormControl}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="company">
                Nafn stofnunar <Span>*</Span>
              </Label>
              <Input
                required
                type="text"
                id="company"
                value={formState.company}
                onChange={updateFormControl}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="email">
                Email <Span>*</Span>
              </Label>
              <Input
                required
                type="email"
                id="email"
                value={formState.email}
                onChange={updateFormControl}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="language">
                Tungumál <Span>*</Span>
              </Label>
              <Input
                required
                type="text"
                id="language"
                value={formState.language}
                onChange={updateFormControl}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="date">
                Dagsetning <Span>*</Span>
              </Label>
              <Input
                required
                type="date"
                id="date"
                value={formState.date}
                onChange={updateFormControl}
              />
            </InputWrapper>
            <InputDiv>
              <InputWrapperTime>
                <Label htmlFor="from">
                  Tími frá <Span>*</Span>
                </Label>
                <InputTime
                  required
                  type="time"
                  id="from"
                  value={formState.from}
                  onChange={updateFormControl}
                />
              </InputWrapperTime>
              <InputWrapperTime>
                <Label htmlFor="to">Tími til</Label>
                <InputTime
                  type="time"
                  id="to"
                  value={formState.to}
                  onChange={updateFormControl}
                />
              </InputWrapperTime>
            </InputDiv>
            <InputWrapper>
              <Label htmlFor="ID">Sjúklings kt</Label>
              <Input
                type="number"
                id="ID"
                value={formState.ID}
                onChange={updateFormControl}
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="message">Skilaboð</Label>
              <Textarea
                id="message"
                value={formState.message}
                onChange={updateFormControl}
              ></Textarea>
            </InputWrapper>
            <FormBtn disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </FormBtn>
          </FormWrapper>
          {alert && <AlertText green={alert.green}>{alert.msg}</AlertText>}
        </FormContainer>
        <ContactWrapper>
          <ContactDiv>
            {contact.map((item) => {
              return (
                <ContactItem key={item.id}>
                  <ContactIcon>{item.icon}</ContactIcon>
                  <ContactInfo>{item.text}</ContactInfo>
                </ContactItem>
              );
            })}
          </ContactDiv>
        </ContactWrapper>
      </ContactContainer>
    </Wrapper>
  );
};

export default Form;
