import React, { useEffect } from "react";
import {
  Wrapper,
  ServicesContainer,
  ServicesTitle,
  Service,
  ServiceIconGi,
  ServiceIconCg,
  ServiceTitle,
  ServiceText,
} from "./Services.styled";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <>
      <Wrapper>
        <ServicesTitle data-aos="fade-up">Þjónusta okkar</ServicesTitle>
        <ServicesContainer data-aos="fade-up">
          <Service>
            <ServiceIconGi></ServiceIconGi>
            <ServiceTitle>Túlkaþjónusta</ServiceTitle>
            <ServiceText>
              Hjá Túlkaþjónustunni slf eru rúmlega 60 túlkar á skrá sem tala
              yfir 35 tungumál. Fyrirtækið leggur áherslu á að hafa færri túlka
              á skrá en fleirri svo yfirsýn og eftirfylgni með þjónustunni sé
              eins best og á verður kosið. Fyrirtækið leggur mikla áherslu á
              stundvísi, áreiðanleika, trúnað og traust. Lykilorðin til að ná
              þeim árangri er að hafa "fámennt, en góðmennt" Við leggjum mikla
              áherslu á góðum starfsanda og með "litlum" hóp höfum við myndað
              faglegt teymi túlka sem eru ávallt reiðubúnir til að veita góða
              þjónustu.
            </ServiceText>
          </Service>

          <Service>
            <ServiceIconCg></ServiceIconCg>
            <ServiceTitle>Þýðendaþjónusta</ServiceTitle>
            <ServiceText>
              Túlkaþjónustan slf býður upp á faglega þýðingarþjónustu. Sá sem
              þýðir skjöl verður að vera gæddur þeim eiginleika að hafa
              tilfiningu yfir ritstíl, sér í lagi þegar verið er að þýða t.d
              fréttabréf, fræðslubæklinga eða fyrirlestra. Túlkaþjónustan slf
              hefur þýðendur í pólsku, þýsku. rússnesku og ensku sem hafa þýtt
              fjölmörg slík verkefni og hafa getið með sér orðspor fyrir
              sérstaka hæfni í þýðingu slíkra verkefna. Fyrirtækið býður einnig
              upp á þýðingarþjónustu á fleirri tungumálum en ofangreindum.
            </ServiceText>
          </Service>
        </ServicesContainer>
      </Wrapper>
    </>
  );
};

export default Services;
