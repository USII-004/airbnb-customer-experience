import heroImage from '../images/hero_img.png';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero__container">
      <section className='hero__section'>
        <img src={heroImage} className='hero__img'/>
        <h1 className='hero__header'>Online Experiences</h1>
        <p className='hero__text'>Join unique interactive activities led by one
         of a kind host-all without leaving home.</p>
      </section>
    </div>
  )
}