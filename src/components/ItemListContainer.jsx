import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products.js";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts().then(res => {
            const filtered = categoryId
                ? res.filter(item => item.category === categoryId)
                : res;

            setItems(filtered);
        });
    }, [categoryId]);

    return <ItemList items={items} />;
};

export default ItemListContainer;