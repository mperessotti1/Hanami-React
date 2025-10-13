import "./ItemListContainer.css";

function ItemListContainer({ saludo }) {
    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <p>Aquí pronto verás nuestros productos destacados.</p>
        </div>
    );
}

export default ItemListContainer;