import React from "react";
import { useEffect } from "react";

function ItemListContainer() {
  useEffect(() => {
    fetch("https://oieoieoieoie.com.br")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}
export default ItemListContainer;
