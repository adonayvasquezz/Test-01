import { IProductDetail } from "@/interfaces/Product";
import { addProductToCart } from "@/services/apiCart";
import Image from "next/image";
import React, { FC } from "react";
import css from "./CardProduct.module.css";

interface Props {
  product: IProductDetail;
}

const CardProduct: FC<Props> = ({ product }) => {
  const { id, name, type, description, price, img_url_standard } = product;

  const addToCart = async (id: number, price: number, name: string) => {
    const product = {
      quantity: 1,
      product_id: id,
      list_price: price,
      name: name,
    };
    const response = await addProductToCart([product]);
    console.log("se agrego", id, response);
  };

  return (
    <div key={id} className={css.cardContainer}>
      <div className={css.imageContainer}>
        <Image src={img_url_standard} fill alt={name} className={css.image} />
      </div>
      <div className={css.title}>{name}</div>
      <div className={css.price}>{price}$</div>
      <div className={css.cartBtnContainer}>
        <button
          onClick={() => addToCart(id, price, name)}
          className={css.cartBtn}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
