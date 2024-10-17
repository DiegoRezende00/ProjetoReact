import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import { CartItem } from "./CartItem";

function Cart(){
    const { carrinho } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {carrinho?.length === 0 && "Seu carrinho está vazio!"}
        {carrinho?.map(({ id, name, quantity }) => (
          <CartItem key={id} id={id} name={name} quantity={quantity} />
        ))}
      </ul>
    </>
  );
}

export { Cart };
