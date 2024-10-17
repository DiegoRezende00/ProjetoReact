import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../CartContext/CartContext";


//Página onde carregamos o produto selecionado! 

export default function ProductDetail(){


    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    
    const{ cart, dispatch } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
        }, 1000);
        }, [])


    const handleChangeQuantity = (e) => {
            const newQuantity = Number(e.target.value);
        
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
        };
        
    const handleAddItem = () => {
    dispatch({
        type: "addItem",
        item: { ...product, quantity },
    });
    };
        
    return(
        <>
        {loading && <div>Carregando...</div>}
        {!loading && ( 
            <div>
                <h1>{product.title}</h1>
                <h2>R$ {product.price?.toFixed(2)}</h2>
                <img src={product.image} />
                <input 
                value={quantity}
                type="number" 
                onChange={handleChangeQuantity}
                />
                <button onClick={handleAddItem}>Adicionar ao carrinho</button>
            </div>        
        )}
        </>
    )

}

// const myComponent = () => {
//     const [item, setItem] = useState(null)
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         getItem()
//             .then(data => {
//                 setItem(data);
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);
//     if (loading) return <div>Carregando...</div>;
//     if (error) return <div>Erro: {error}</div>;

//     return (
//         <div>
//             <h1>Item:</h1>
//             {item && <itemDetail item={item} />}
//         </div>
//     );
// };
// }