import "../styles/globals.css";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
