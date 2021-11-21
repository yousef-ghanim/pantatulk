import React from "react";
import {
  Wrapper,
  ContactContaier,
  ContactTitle,
  ContactImage,
  ContactBtn,
} from "./UpperFooter.styled";
import Image from "../../images/world.jpg";
const UpperFooter = () => {
  return (
    <>
      <Wrapper>
        <ContactImage src={Image} alt="bg-image"></ContactImage>
        <ContactContaier>
          <ContactTitle>Ertu að leita að túlk?</ContactTitle>
          <ContactBtn to="/contact">Pantaðu túlk núna</ContactBtn>
        </ContactContaier>
      </Wrapper>
    </>
  );
};

export default UpperFooter;
