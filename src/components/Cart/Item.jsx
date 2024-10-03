import React from "react"
import Contador from "./ItemCount"

const productsNike = [
    {id : 1, produto : 'Chuteira Nike Tiempo 10 Academy Futsal'},
    {id : 2, produto: 'Nike SB Dunk Low'},
    {id : 3, produto: 'Tênis Nike Air Zoom Pegasus 40 Premium'},
    {id : 4, produto: 'Chinelo Nike Calm'},
    {id : 5, produto: 'Tênis Nike Vaporfly 3'},
    {id : 6, produto: 'Tênis Nike Metcon 8'},
    {id : 7, produto: 'Chuteira Nike Zoom Superfly 9 Elite KM'},
    {id : 8, produto: 'Tênis Nike Air Max Portal Feminino'},
    {id : 9, produto: 'Chuteira Nike Phantom GX Academy Dynamic Fit Society'},
    {id : 10, produto: 'Tênis Nike Invincible 3 Feminino'},
]

const Item = () => {
    return (
        <div>
            <ul className="lista-produtos">
            {productsNike.map(products => (
                            <li key={products.id} id={products.produto}>
                                <a href={products.id}><button>{products.produto}</button></a>
                                <Contador />
                            </li>
                        ))}
            </ul>
        </div>
    );
};

export default Item;