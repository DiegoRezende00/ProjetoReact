import React, { useEffect, useState } from "react"
import Contador from "./ItemCount"

export default function Item(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {setProducts(data);});
    }, []);

    return (
        <div>
            {products.map( product  => (
                <div className="product__list">
                    
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