import React, { ReactElement } from "react";
import Head from "next/head";
import { Button, Stack } from "@mui/material";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </>
  );
}
