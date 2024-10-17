import { useContext, useState } from "react";
import CartContext from "../CartContext/CartContext";

function CartItem({ id, title, quantity }) {
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
      {`${title}`}
      {!editando && ` X ${quantity}`}
      {editando && (
        <input onChange={handleChangeQuantity} value={quantity} type="number" />
      )}
      <button
          onClick={() => {
          handleRemoveItem(id);
        }}
      >
        Remover
      </button>
      <button
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