import React from "react";
import {
  Wrapper,
  PdfContainer,
  PdfImage,
  PdfLink,
  PdfText,
} from "./Pdf.styled";
import Image from "../../images/form.jpg";
const Pdf = () => {
  return (
    <Wrapper>
      <PdfContainer>
        <PdfText>ALMENNT EYÐUBLAÐ FYRIR TÚLKAÞJÓNUSTU</PdfText>
        <PdfLink href="https://12e9e53e-3439-14d7-f85c-1e09fe342845.filesusr.com/ugd/4e087e_08906e9302df4ddaa0a81987d9234a05.pdf">
          <PdfImage src={Image} alt="pdf-form"></PdfImage>
        </PdfLink>
      </PdfContainer>
    </Wrapper>
  );
};

export default Pdf;
