import React, { useEffect, useState } from "react"

export default function Item(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {setProducts(data);})
    }, []);

    return (
        <div className="product__lista">
            {products.map( product  => (
                <div className="product__list" key={product.id}>
                    
                        <img src={product.image} />
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <input type="number" />
                        <button>Adicionar ao carrinho</button>            
                </div>
                
            ))}
        </div>
    )
};