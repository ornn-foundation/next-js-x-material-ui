import { AppProps } from "next/app";
import React from "react";
import { Context, initialState } from "../src/lib/context";
import { reducer } from "../src/lib/reducers";

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
