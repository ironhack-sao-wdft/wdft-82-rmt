import style from "./style.module.css";

import cao from "../../images/cao.jpg";

function Card() {
  return (
    <div>
      <h2 className={style.title}>Esse é meu card</h2>
      <p className="title">Texto do meu card</p>
      <img src={cao} alt="Cão" />
    </div>
  );
}

export default Card;
