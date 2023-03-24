export interface IProduct {
   products: IProductDetail[]
}


export interface IProductDetail {
    id: number,
    name: string,
    type: string,
    description: string,
    price: number,
    img_url_standard: string,
    img_url_thumbnail: string
  }