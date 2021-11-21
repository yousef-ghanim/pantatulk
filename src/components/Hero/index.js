import React from "react";
import {
  Wrapper,
  HeroContainer,
  HeroImage,
  HeroText,
  HeroTitle,
  HeroBg,
  HeroBtn,
} from "./Hero.styled";
import Logo from "../../images/logo.png";
import Image from "../../images/ball.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <HeroBg src={Image} alt="hero-image"></HeroBg>
      <HeroContainer>
        <HeroText>
          <HeroImage src={Logo} alt="logo"></HeroImage>
          <HeroTitle>Túlkaþjónustan slf </HeroTitle>
          <HeroBtn to="/contact">Pantaðu túlk</HeroBtn>
        </HeroText>
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
