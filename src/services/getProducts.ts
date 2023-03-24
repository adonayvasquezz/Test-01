export const getProducts = async () => {
  const API_URL =
    "https://api.bigcommerce.com/stores/s9ye4xe3x0/v3/catalog/products";

  const options = {
    "X-Auth-Token": "wo9e40w72wf7f21kpz3xfgfiwmeffz",
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  const data = await fetch(API_URL, { headers: options });
  const products = await data.json();

  return products;
};