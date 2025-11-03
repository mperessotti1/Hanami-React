export const products = [
    { id: 1, title: "Torta Oreo", category: "tortas", price: 5000 },
    { id: 2, title: "Lemon Pie", category: "postres", price: 4500 },
    { id: 3, title: "Medialunas", category: "masas", price: 1800 },
];

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(products), 800);
    });
};

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(products.find(p => p.id === Number(id))), 800);
    });
};