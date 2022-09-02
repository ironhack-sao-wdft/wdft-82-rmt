import style from "./style.module.css";

import { useState } from "react";

export function Navlink(props) {
  const [renderStatus, setRenderStatus] = useState(style.hidden);

  function handleHover(e) {
    if (e._reactName === "onMouseOver") {
      setRenderStatus(style.show);
      return;
    }
    setRenderStatus(style.hidden);
  }

  // RENDERIZAÇÃO CONDICIONAL
  return props.hoverLinks ? (
    <div>
      <p
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
        className={style.noGap}
      >
        {props.name}
      </p>

      <div
        className={renderStatus}
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
      >
        {props.hoverLinks.map((currentLink) => {
          return <p>{currentLink}</p>;
        })}
      </div>
    </div>
  ) : (
    <p>{props.name}</p>
  );
}
