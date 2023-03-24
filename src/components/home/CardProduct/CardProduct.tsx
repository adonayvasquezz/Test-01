import { IProductDetail } from "@/interfaces/Product";
import React, { FC } from "react";

interface Props {
  product: IProductDetail;
}

const CardProduct: FC<Props> = ({ product }) => {
  const { id, name, type, description, price } = product;
  return <div key={id}>{name}</div>;
};

export default CardProduct;
