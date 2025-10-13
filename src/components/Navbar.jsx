import "./NavBar.css";
import CartWidget from "./CartWidget";
import logo from "../assets/img/logo.jpeg";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo de MiTienda" className="navbar-logo"/>
            </div>

            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <CartWidget />
        </nav>
    );
}

export default NavBar;