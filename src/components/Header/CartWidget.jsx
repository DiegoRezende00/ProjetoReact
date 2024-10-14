import React from "react";
import { BiCart } from "react-icons/bi";

//Função da figurinha do carrinho que está na navbar

function CartWidget() {
  return (
    <div>
      <button>
        <BiCart />
      </button>
    </div>
  );
}
export default CartWidget;

//     return (
//         <div>Teste</div>
//     )
// }
