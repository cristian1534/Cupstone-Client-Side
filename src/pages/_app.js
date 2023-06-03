import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Cart_Context_Provider } from "@/context/cart_context";

export default function App({ Component, pageProps }) {
  return (
    <Cart_Context_Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Cart_Context_Provider>
  );
}
