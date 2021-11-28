import React from "react";
import {
  SidebarContainer,
  Btn,
  CloseBtn,
  SidebarMenu,
  SidebarLink,
  SingleLink,
} from "./Sidebar.styled";
import { scrollTop } from "../ScrollHome";
import { siteLinks } from "../data";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <CloseBtn onClick={toggle}>
        <Btn />
      </CloseBtn>
      <SidebarMenu>
        {siteLinks.map((item) => {
          return (
            <SidebarLink key={item.id}>
              <SingleLink
                to={item.path}
                activeClassName={item.class}
                onClick={scrollTop}
              >
                {item.name}
              </SingleLink>
            </SidebarLink>
          );
        })}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
