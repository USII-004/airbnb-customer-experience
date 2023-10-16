import '../styles/Card.css';
import CardProp from "./CardProp";
import Data from './Data';

export default function Card() {
  const cards = Data.map(item => {
    return (
      <CardProp 
        {...item}
      />
    )
  })
  return (
    <div className="card__container">
      {cards}
    </div>
  )
}