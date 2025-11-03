import CartWidget from "./CartWidget";
import logo from "../assets/img/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
const categories = [
{ id: 'tortas', label: 'Tortas' },
{ id: 'masas', label: 'Masas' },
{ id: 'postres', label: 'Postres' }
]


return (
<nav className="navbar navbar-expand-lg navbar-custom">
<div className="container">
<Link className="navbar-brand d-flex align-items-center" to="/">
<img src={logo} alt="logo" />
<span className="ms-2 fw-bold text-white">Pastelería</span>
</Link>


<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon" />
</button>


<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item">
<NavLink className="nav-link" to="/">Catálogo</NavLink>
</li>


{categories.map(cat => (
<li className="nav-item" key={cat.id}>
<NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to={`/category/${cat.id}`}>
{cat.label}
</NavLink>
</li>
))}


</ul>
</div>
</div>
</nav>
)
}


export default Navbar