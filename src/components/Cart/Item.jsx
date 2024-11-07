import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite"; //Ajuda a especificar com qual coleção estamos querendo interagir
import { Link } from "react-router-dom";
import db from "../../Firestore";
import ProductLink from "./ItemList";


//Onde renderizamos todos os produtos e importamos o itemlist onde estamos fazendo com o id do produto selecionado

export default function Item(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch("https://fakestoreapi.com/products")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setProducts(data);
    //         setLoading(false)
    //     });
    // }, []);
    useEffect(() => {
        setLoading(true);
        (async function () {
            const productsCol = collection(db, "products")
            const productsPrint = await getDocs(productsCol) //Sempre retorna uma promise (snapshot), ou seja, sempre passar um await

            const products = productsPrint.docs.map((doc) => {
                return {
                    id: doc.id, //Este parametro traz a informação do ID
                    ...doc.data(), //Este parametro traz todos os dados do produto
                };
            });

            setProducts(products);
            setLoading(false);
        })();
    }, [])

    return (
        <div className="product__lista">
                {loading && <h1> CARREGANDO... </h1>}

                {!loading && 
                    products.map((product)  => (
                    <ProductLink key={product?.id} {...product} />               
                    
                ))}
        </div>
    )
};