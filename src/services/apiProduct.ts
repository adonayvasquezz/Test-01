import { IProductDetail } from "@/interfaces/Product";

export const options = {
  "X-Auth-Token": `${process.env.ACCESS_TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getProducts = async () => {
  const API_PRODUCTS = `${process.env.API_URL}${process.env.PRODUCTS}`;
  let products;
  try {
    const data = await fetch(API_PRODUCTS, { headers: options });
    products = await data.json();
  } catch (error) {
    console.error("Something went wrong in getProducts()", error);
  }
  
  return products.data;
};

export const getProductsWithImage = async (products: IProductDetail[]) => {
  const IMAGE_ENDPOINT = `${process.env.API_URL}${process.env.PRODUCTS}`;
  let productsWithImage = products;

  try {
    for (let i = 0; i < products.length; i++) {
      const data = await fetch(`${IMAGE_ENDPOINT}/${products[i].id}/images`, {
        headers: options,
      });
      const productImg = await data.json();
      productsWithImage[i].img_url_standard = productImg.data[0].url_standard;
      productsWithImage[i].img_url_thumbnail = productImg.data[0].url_thumbnail;
    }
  } catch (error) {
    console.error("Something went wrong in getProductsWithImage()", error);
  }
  
  return productsWithImage;
};
