import LogoImage from "../../assets/logo.jpeg";

import "./styles.css";

export function Header() {
  return (
    <>
      <img className="avatar" src={LogoImage} alt="Thiago profile image" />
      <h1>@especialistasmart</h1>
      <p className="subtitle">Vem Pra Especialista... Vem Pra Melhor!!!</p>
    </>
  );
}
