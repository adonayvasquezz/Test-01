import { IProduct } from "@/interfaces/Product";
import React, { FC, useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";

const HomeComponent: FC<IProduct> = ({ products }) => {
  const [renderProducts, setRenderProducts] = useState<JSX.Element[]>();

  useEffect(() => {
    const productsCard = products.map((product) => (
      <CardProduct key={product.id} product={product} />
    ));
    setRenderProducts(productsCard);
  }, [products]);

  return <div>{renderProducts}</div>;
};

export default HomeComponent;
