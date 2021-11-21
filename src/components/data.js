import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export const contact = [
  {
    id: 0,
    icon: <FaPhoneAlt />,
    text: "517-0606",
  },
  {
    id: 1,
    icon: <FaEnvelope />,
    text: "pantatulk@pantatulk.is",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    text: "Suðurlandsbraut 32, 108 Reykjavík",
  },
];

export const siteLinks = [
  {
    id: 0,
    name: "Heimasiða",
    desc: "Home",
    path: "/",
    class: "none",
  },
  {
    id: 1,
    name: "Hafa samband",
    desc: "Contact",
    path: "/contact",
    class: "active",
  },
  {
    id: 2,
    name: "Siðareglur",
    desc: "Rules",
    path: "/rules",
    class: "active",
  },
  {
    id: 3,
    name: "Eyðublað",
    desc: "form",
    path: "/form",
    class: "active",
  },
];
