import { Card } from "./components/Card";

import { useState } from "react";

import Cao from "./images/cao.jpeg";

function App() {
  // useState é uma função que retorna uma array com 2 elementos
  // 1- Estado
  // 2- Função que muda o estado

  const [counter, setCounter] = useState(0);

  console.log(counter);

  // let counter = 0;

  function acres() {
    setCounter(counter + 1);
  }

  function decres() {
    setCounter(counter - 1);
  }

  return (
    <>
      <Card title="Titulo do card" text="Lorem Ipsum" img={Cao} />
      <Card title="Card 2" text="Algo :)" />

      <h1>{counter}</h1>
      <button onClick={acres}>+</button>
      <button onClick={decres}>-</button>
    </>
  );
}

export default App;
