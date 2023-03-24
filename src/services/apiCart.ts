import { ICartItem } from "@/interfaces/CartItem";
import { options } from "./apiProduct";

export const addProductToCart = async (body: ICartItem[]) => {

    const API_CART = `https://api.bigcommerce.com/stores/s9ye4xe3x0/v3/carts`;
    const cart = {
        customer_id: 0,
        line_items: body
    }
    const parsedCart = JSON.stringify(cart);
    let cartResponse;
    try {
      const data = await fetch(API_CART, {method:'POST', headers: options, body: parsedCart });
  
      cartResponse = await data.json();
      console.log('la respuesta es', cartResponse)
    } catch (error) {
      console.error("Something went wrong in addProductToCart()", error);
    }
    
    return cartResponse;
  };