import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";
import db from "../../Firestore";
import ProductLink from "../Cart/ItemList";


export default function Category() {
  const { categoryId } = useParams();
  const [productsCategory, setProductsCategory] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    (async function () {
      const productsCol = collection(db, "products");

      const q = query(productsCol, where("category", "==", categoryId));

      const productPrint = await getDocs(q);

      const products = productPrint.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProductsCategory(products);
      setLoading(false);
    })();
  }, [categoryId]);

  return (
    <div className="product__lista">
      {loading && <h1>Carregando...</h1>}
          {!loading &&
            productsCategory.map((product) => (
              <ProductLink key={product.id} {...product} />
            ))}
    </div>
  );
}