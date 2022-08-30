export function Card(props) {
  //   const { title, text } = props;

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <img src={props.img} alt="foto" />
    </div>
  );
}

// export function AlgumaCoisa() {
//   return <h2>Oi!</h2>;
// }
