import '../styles/CardProp.css'

export default function CardProp(props) {
  let badgeText
  if (props.openSlot === 0) {
    badgeText = 'SOLD OUT'
  }else if (props.location == 'online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className='card'>
      {badgeText && <div className='badge'>{badgeText}</div>}
      <div className='img__container'>
        <img src={props.coverImg} className='card__img' />
      </div>
      <div className='card__stat'>
        <span>{props.stats.rating}</span>
        <span className='grey'>({props.stats.reviewCount}) &#x2022;</span>
        <span className='grey'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>from ${props.price}</span> / person</p>
    </div>
  )
}

