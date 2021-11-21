import React, { useEffect } from "react";
import {
  Wrapper,
  AboutContainer,
  AboutTitle,
  AboutText,
  AboutContent,
  AboutImage,
} from "../About/About.styled";
import Image from "../../images/AboutImage.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <>
      <Wrapper>
        <AboutContainer>
          <AboutTitle data-aos="fade-up">Um Túlkaþjónustuna slf</AboutTitle>

          <AboutContent data-aos="fade-up">
            <AboutText>
              Túlkaþjónustan slf er rekin af mæðgunum Jolantu Polanska og Söndru
              Polanska. Jolanta hefur starfað við túlkun frá árinu 1998 og
              Sandra frá árinu 2006. Ágústa Katrín er fjármálastjóri
              fyrirtækisins og hefur hún yfir 10 ára reynslu af rekstri túlka og
              þýðingarþjónustu. Saman búa þær yfir þeirri þekkingu og reynslu
              sem nauðsynleg er til að starfrækja faglega túlkaþjónustu sem er
              hæf til þess að vera fremst á sínu sviði. <br /> <br />
              Túlkaþjónustan slf býður upp á túlkaþjónustu á yfir 35 tungumálum.
              Túlkaþjónustan hefur ávallt fagmennsku í fyrirrúmi og sérhæfir
              sína túlka á hverju sviði fyrir sig. Fyrirtækið sérhæfir sig í
              túlkun á heilbrigðissviði og hafa fjölmargir af þeim túlkum sem
              eru á skrá hjá fyrirtækinu menntun á heilbrigðissviði s.s
              sjúkraliðar og hjúkrunarfræðingar. Túlkaþjónustan slf hefur einnig
              menntaða kennara sem sérhæfa sig í túlkunum á skólasviði sem og
              lögfræðing og laganema sem sérhæfa sig í túlkun í
              réttarvörslukerfinu. Stærsti hluti þeirra túlka sem er á skrá búa
              yfir meira en 5 ára reynslu. Á hverju ári tekur fyrirtækið inn
              nýliða í starfsstéttina og hljóta þeir einstaklingsmiðaða þjálfun
              áður en þeir hefja störf hjá fyrirtækinu.
              <br /> <br />
              Fyrirtækið leggur ávallt áherslu á trúnað, áreiðanleika og traust
              og leggur kappkost á að vera í góðum tengslum við viðskiptavini og
              mannauð fyrirtækisins.
            </AboutText>
            <AboutImage src={Image} alt="about-image"></AboutImage>
          </AboutContent>
        </AboutContainer>
      </Wrapper>
    </>
  );
};

export default About;
