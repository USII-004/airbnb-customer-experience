import '../styles/CardProp.css'

export default function CardProp(props) {
  return (
    <div className='card'>
      <div className='img__container'>
        <img src={props.img} className='card__img' />
      </div>
      <div className='card__stat'>
        <span>{props.rating}</span>
        <span className='grey'>(6) &#x2022;</span>
        <span className='grey'>{props.country}</span>
      </div>
      <p>{props.message}</p>
      <p><span className='bold'>from {props.price}</span> / person</p>
    </div>
  )
}

