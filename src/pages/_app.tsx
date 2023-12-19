import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import MetaTag from "@/components/MetaTag";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { seo } = pageProps?.content ?? {};
  
  return (
    <Provider store={store}>
      <Layout>
        <MetaTag data={seo} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
