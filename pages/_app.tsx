/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { OpenAPIProvider } from "react-openapi-client";

import defaultSEOConfig from "../next-seo.config";
import "lib/styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import Layout from "lib/layout";
import { UserProvider } from "lib/Utils/MainContext";
import Cookies from "js-cookie";
import SimpleReactLightbox from "simple-react-lightbox";
import NextNProgress from "nextjs-progressbar";
import { OpenAPI } from "Services";
import ErrorBoundary from "lib/components/Utilities/ErrorBoundary";
import customTheme from "lib/styles/customTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  OpenAPI.TOKEN = Cookies.get("adminToken") as string;
  console.log(OpenAPI.TOKEN);

  let headers: HeadersInit;

  headers = {
    cor: "no-cors",
  };
  if (typeof window !== "undefined") {
    const token = Cookies.get("adminToken");
    headers = {
      cor: "no-cors",
      Authorization: `Bearer ${token}`,
    };
  }

  return (
    <ChakraProvider theme={customTheme}>
      <OpenAPIProvider
        definition={process.env.NEXT_PUBLIC_API_DEFINITION as string}
        axiosConfigDefaults={{
          withCredentials: true,
          headers,
          baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
        }}
      >
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <link rel="icon" href="/assets/pm.png" type="image/x-icon" />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        {/* <Layout> */}
        <UserProvider>
          <ToastProvider>
            <SimpleReactLightbox>
              <Layout>
                <NextNProgress color="#0042ff" />
                <ErrorBoundary>
                  <Component {...pageProps} />
                </ErrorBoundary>
              </Layout>
            </SimpleReactLightbox>
          </ToastProvider>
        </UserProvider>
      </OpenAPIProvider>
    </ChakraProvider>
  );
};
export default MyApp;
