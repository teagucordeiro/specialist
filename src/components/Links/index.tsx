import "./styles.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";

export function Links() {
  return (
    <ul>
      <li>
        <a href="https://www.instagram.com/especialistasmart/" target="_blank">
          <AiOutlineInstagram /> Instagram
        </a>
      </li>
      <li>
        <a href="https://instagram.com/thiagoty52" target="_blank">
          <BsWhatsapp /> Especialista Smart - Nova Cruz RN
        </a>
      </li>
      <li>
        <a href="https://twitter.com/thiagoty52" target="_blank">
          <BsWhatsapp />
          Especialista Smart - Pedro Veho RN
        </a>
      </li>
      <li>
        <a href="https://github.com/ThiagoCordeiro52" target="_blank">
          <BsTiktok /> Especialista Smart (@especialistasmart) | TikTok
        </a>
      </li>
    </ul>
  );
}
