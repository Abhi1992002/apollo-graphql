import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <RecoilRoot>
          <main className="dark text-foreground bg-background w-screen h-screen">
            <App />
          </main>
        </RecoilRoot>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>
);
