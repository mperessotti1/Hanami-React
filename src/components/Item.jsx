import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>

            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;