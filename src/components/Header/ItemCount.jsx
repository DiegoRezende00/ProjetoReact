import React, { useState } from "react";

// function ItemCount({ stock, initial,  onAdd }){
//     <div>
//         <ItemCount stock="5" initial="1" />
//         <input type="button" id="aumentaQuantidade" value="+"/>
//         <input type="button" id="aumentaQuantidade" value="-"/>
//     </div>
// }

// export default ItemCount

const Contador = () => {
    const [somar, setSomar] = useState(0);
    const stock = 5;
    
    const somando = () =>{
        somar < stock ? setSomar(somar + 1) : null;
    };
    const subtrair = () =>{
        somar > 0 ? setSomar(somar - 1) : null
    }

    return(
        <div className="cart-sum">
            <div className="btn-sum" onClick={somando}>
                +
            </div>
            <p className="value">{somar}</p>
            <div className="btn-sub" onClick={subtrair}>
                -
            </div>
        </div>
    )
}

export default Contador
