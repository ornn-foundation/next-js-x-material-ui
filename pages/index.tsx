import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
    </>
  );
}
