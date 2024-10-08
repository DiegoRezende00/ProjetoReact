import React, { useState } from "react";

const getItem = () => {

}

const itemDetail = ({item}) => {
    return(
        <div>
            <h1>{item.marca}</h1>
            <p>{item.produto}</p>
            <p>{item.preco}</p>
        </div>
    )
}

const myComponent = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getItem()
            .then(data => {
                setItem(data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div>
            <h1>Item:</h1>
            {item && <itemDetail item={item} />}
        </div>
    );
};
export default myComponent