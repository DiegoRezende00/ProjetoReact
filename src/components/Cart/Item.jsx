import React, { useEffect, useState } from "react";
import ProductLink from "./ItemList";


//Onde renderizamos todos os produtos e importamos o itemlist onde estamos fazendo com o id do produto selecionado

export default function Item(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false)
        });
    }, []);

    return (
        <div className="product__lista">
            {loading && <h1> CARREGANDO... </h1>}
            {!loading && 
                products.map(({id, title})  => (
                <ProductLink key={title} id={id} title={title} />               
                
            ))}
        </div>
    )
};