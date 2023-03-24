import Head from "next/head";
import HomeComponent from "@/components/home/HomeComponent";
import { GetStaticProps } from "next";
import { getProducts } from "@/services/getProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>BigCommerce</title>
        <meta name="description" content="e-commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  let products: any[] = [];
  try {
    const productsArray = await getProducts();
    console.log("productos", productsArray);
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
