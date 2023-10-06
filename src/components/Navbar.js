import logo from '../images/Airbnb.png';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar__container">
      <nav>
        <img src={logo} className='navbar__logo'/>
      </nav>
    </div>
  )
}