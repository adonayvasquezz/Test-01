import Head from "next/head";
import HomeComponent from "@/components/home/HomeComponent/HomeComponent";
import { GetStaticProps, NextPage } from "next";
import { getProducts } from "@/services/getProducts";
import { IProduct, IProductDetail } from "@/interfaces/Product";

const Home: NextPage<IProduct> = ({ products }) => {
  return (
    <>
      <Head>
        <title>BigCommerce</title>
        <meta name="description" content="e-commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let products: IProductDetail[] = [];
  try {
    const productsArray = await getProducts();
    if (productsArray) {
      products = productsArray;
    }
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      products,
    },
  };
};

export default Home;
