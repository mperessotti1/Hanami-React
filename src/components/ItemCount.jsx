import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
    const [qty, setQty] = useState(1);

    const add = () => qty < stock && setQty(qty + 1);
    const subtract = () => qty > 1 && setQty(qty - 1);

    return (
        <div>
            <button onClick={subtract}>-</button>
            <span>{qty}</span>
            <button onClick={add}>+</button>
        </div>
    );
};

export default ItemCount;