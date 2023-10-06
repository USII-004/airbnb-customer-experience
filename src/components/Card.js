import '../styles/Card.css';
import CardProp from "./CardProp";
import sonic from '../images/sonic.png';
import boredApe from '../images/bored ape.png';


export default function Card() {
  return (
    <div className="card__container">
      <CardProp 
        img={sonic}
        message='Super Sonic autobot'
        price = '$80'
        rating= '3.5'
        country = ' CAN'
      />
      <CardProp 
        img={boredApe}
        message='Highly influential Bored Ape'
        price = '$350'
        rating= '5.5'
        country = ' NGA'
      />
    </div>
  )
}