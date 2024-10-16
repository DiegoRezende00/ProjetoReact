import React from "react";
import {Link} from 'react-router-dom'

//Página onde renderizamos todos os produtos e passamos o link para o produto selecionado!

export default function ProductLink( {id, title} ){
    return (
        <div className="cursor-pointer">
            <Link to={`/product/${id}`}>{title}</Link>     
        </div>
    );
}