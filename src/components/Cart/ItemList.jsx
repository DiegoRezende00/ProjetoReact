import React from "react";
import {Link} from 'react-router-dom'

//Página onde renderizamos todos os produtos e passamos o link para o produto selecionado!

export default function ProductLink( {id, name, image, price} ){
    return (
            <Link to={`/product/${id}`} className="group">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-white">{name}</h3>
                    <p className="mt-1 text-lg font-medium text-white">
                        ${Number(price)?.toFixed(2)}
                    </p>
                </div>
                </Link>
                
    );
}