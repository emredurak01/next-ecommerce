import type { NextPage } from "next";
import Head from "next/head";
import Storefront from "../components/Storefront";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name = "keywords" content = "ecommerce" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Storefront />
    </div>
  );
};

export default Home;
