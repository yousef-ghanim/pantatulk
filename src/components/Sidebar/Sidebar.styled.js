import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  display: grid;
  align-items: center;
  justify-content: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width: 721px) {
    display: none;
  }
`;
export const CloseBtn = styled.a`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  color: var(--bg-color);
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--bright);
  }
`;
export const Btn = styled(FaTimes)`
  font-size: 3rem;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  height: 25rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8rem);
  text-align: center;
`;
export const SidebarLink = styled.li``;
export const SingleLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 1rem 1.5rem;
  transition: 0.2s ease-in-out;
  color: var(--bg-color);
  &:hover {
    color: var(--bright);
  }
  &.active {
    color: var(--bright);
  }
`;
