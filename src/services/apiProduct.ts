export const  options = {
    "X-Auth-Token": `${process.env.ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

export const getProducts = async () => {
  const API_PRODUCTS = `${process.env.API_URL}${process.env.PRODUCTS}`;
  const data = await fetch(API_PRODUCTS, { headers: options });
  const products = await data.json();

  return products.data;
};

export const getProductImage = (product_id: string) => {
    const IMAGE_ENDPOINT = `/catalog/products/${product_id}/images`

    console.log('en get Product Image')
    return 
}