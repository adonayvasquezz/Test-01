import Head from "next/head";
import HomeComponent from "@/components/home/HomeComponent";

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
