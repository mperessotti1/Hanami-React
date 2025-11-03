import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>

            <ItemCount stock={10} />
        </div>
    );
};

export default ItemDetail;