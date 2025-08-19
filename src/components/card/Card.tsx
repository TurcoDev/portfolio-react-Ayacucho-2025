import type { CardProps } from "../../interfaces/cardProps";


function Card(props: CardProps) {
  return (
    <div className="card">
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
    </div>
  );
}

export default Card;


// props = {
//   title: "Card Title",
//   description: "This is a description of the card."
// }