export interface IProduct {
   products: IProductDetail[]
}


export interface IProductDetail {
    id: number,
    name: string,
    type: string,
    description: string,
    price: number,
  }