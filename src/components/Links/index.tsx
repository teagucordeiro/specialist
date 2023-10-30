import "./styles.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";

export function Links() {
  return (
    <ul>
      <li>
        <a href="https://www.instagram.com/especialistasmart/" target="_blank">
          <AiOutlineInstagram /> <span>Instagram - Nova Cruz RN</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/especialistasmartpedrovelho/"
          target="_blank"
        >
          <AiOutlineInstagram /> <span>Instagram - Pedro Velho RN</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/especialistasmartextremoz/"
          target="_blank"
        >
          <AiOutlineInstagram /> <span>Instagram - Extremoz RN</span>
        </a>
      </li>
      <li>
        <a href="https://wa.me/5584988150905" target="_blank">
          <BsWhatsapp /> <span>WhatsApp - Nova Cruz RN</span>
        </a>
      </li>
      <li>
        <a href="https://wa.me/5584981876850" target="_blank">
          <BsWhatsapp />
          <span>WhatsApp - Pedro Velho RN</span>
        </a>
      </li>
      <li>
        <a href="https://wa.me/5584988233498" target="_blank">
          <BsWhatsapp />
          <span>WhatsApp - Extremoz RN</span>
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@especialistasmart" target="_blank">
          <BsTiktok />
          <span> @especialistasmart | TikTok</span>
        </a>
      </li>
    </ul>
  );
}
