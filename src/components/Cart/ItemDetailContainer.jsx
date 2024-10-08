import React, { useState } from "react";
import { useParams } from "react-router-dom";

const getItem = () => {

}

export default function myComponent(){


const itemDetail = ({item}) => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

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
        
    return(
        <>
        {loading && <div>Carregando...</div>}
        {!loading && <h1>{product.title}</h1>}
        </>
    )
}
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