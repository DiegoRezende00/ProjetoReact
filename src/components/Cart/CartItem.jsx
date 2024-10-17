import { useContext, useState } from "react";
import CartContext from "../CartContext/CartContext";

function CartItem({ id, name, quantity }) {
  const [editando, setEditando] = useState(false);
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    dispatch({
      type: "removeItem",
      productId,
    });
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);

    dispatch({
      type: "changeItemQuantity",
      product: {
        id,
        newQuantity,
      },
    });
  };

  return (
    <li>
      {`${name}`}
      {!editando && ` X ${quantity}`}
      {editando && (
        <input onChange={handleChangeQuantity} value={quantity} type="number" />
      )}
      <button
        // className="border-red-500 border-2 rounded-md p-1"
        onClick={() => {
          handleRemoveItem(id);
        }}
      >
        Remover
      </button>
      <button
        // className="border-blue-700 border-2 rounded-md p-1"
        onClick={() => {
        setEditando(!editando);
        }}
      >
        {!editando ? "Editar" : "Confirmar"}
      </button>
    </li>
  );
}

export { CartItem };