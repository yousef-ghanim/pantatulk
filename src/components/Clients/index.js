import React from "react";
import { Wrapper, ClientsContainer, Client } from "./Clients.styled";
import Pic1 from "../../images/client1.jpg";
import Pic2 from "../../images/client2.jpg";

const Clients = () => {
  return (
    <>
      <Wrapper>
        <ClientsContainer>
          <Client src={Pic1} alt="Ríkiskaup"></Client>
          <Client src={Pic2} alt="Reykjavíkurborg"></Client>
        </ClientsContainer>
      </Wrapper>
    </>
  );
};

export default Clients;
