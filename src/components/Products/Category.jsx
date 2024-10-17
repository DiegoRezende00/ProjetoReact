import React, { useEffect, useState } from "react";

export default function Categoria (){
    const [products, setProducts] = useState([]);
    const [categorySelected, setCategorySelected] = useState(['men'])

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${category}`)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false)
        });
    }, []);
    const filteredProducts = products.filter(product => product.category === categorySelected);

    return(
        <div>
            <h2>Produtos da categoria {categorySelected}</h2>
            <button onClick={() => setCategorySelected('electronics')}>Eletronicos</button>
            <button onClick={() => setCategorySelected('jewelery')}>Joalheria</button>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{products.id}</li>
                ))}
            </ul>
        </div>
    )
}

