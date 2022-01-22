import type { NextPage } from "next";
import Head from "next/head";

import { AuthHome } from "views";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Near</title>
        <meta name="description" content="Wallet by Next.js + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthHome />
    </div>
  );
};

export default Home;
