// 99.9% dos casos, os componentes vão ser funções

import style from "./style.module.css";

function Button() {
  // O retorno de um componente react normalmente é um JSX - uma sintaxe especial que a gente utiliza para escrever HTML dentro do JS

  return <button className={style.title}>Clica aqui!</button>;
}

export default Button;
