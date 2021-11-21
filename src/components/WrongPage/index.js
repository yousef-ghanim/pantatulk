import React from "react";
import { Wrapper, ErrorContainer, ErrorText } from "./WrongPage.styled";
import { Button } from "../Button";
const WrongPage = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <ErrorText>Við fundum ekki þessa síðu.</ErrorText>
        <Button to="/">Heimasiða</Button>
      </ErrorContainer>
    </Wrapper>
  );
};

export default WrongPage;
