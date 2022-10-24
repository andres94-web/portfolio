import "../styles/Navbar.scss"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="menu-wrap">

      <input type="checkbox" className="toggler"/>

      <div className="hamburger">
        <div></div>
      </div>

      <div className="menu">
          <div className='container'>
            <Link to="/" className="direction">Home</Link>
            <Link to="/certificados" className="direction">certificados</Link>
            <Link to="/proyectos" className="direction">proyectos</Link>
            <Link to="/contacto" className="direction">contacto</Link>
          </div>
      </div>
      
    </div>
  )
}

export default Navbar