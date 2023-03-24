import { IProductDetail } from "@/interfaces/Product";
import Image from "next/image";
import React, { FC } from "react";
import css from "./CardProduct.module.css";

interface Props {
  product: IProductDetail;
}

const CardProduct: FC<Props> = ({ product }) => {
  const { id, name, type, description, price, img_url_standard } = product;
  return (
    <div key={id} className={css.cardContainer}>
      <div className={css.imageContainer}>
        <Image src={img_url_standard} fill alt={name} className={css.image} />
      </div>
    </div>
  );
};

export default CardProduct;
