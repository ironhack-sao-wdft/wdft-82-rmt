import { Navlink } from "../Navlink";

import logo from "../../images/logo.png";

import style from "./style.module.css";

export function Navbar() {
  const links = [
    "Categorias",
    "Ofertas",
    "Moda",
    "Histórico",
    "Vender",
    "Contato",
  ];

  return (
    <div>
      {/* Entra no mundo JSX/HTML */}
      {/* Para voltar para o mundo JS, a gente coloca uma chave */}

      <h1 id={style.h1}>Minha loja </h1>

      <img src={logo} alt="Logo" className={style.logo} />

      <div className={style.container}>
        {links.map((currentElement) => {
          return currentElement === "Categorias" ? (
            <Navlink name={currentElement} hoverLinks={links} />
          ) : (
            <Navlink name={currentElement} />
          );
        })}
      </div>
    </div>
  );
}
