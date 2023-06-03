import Main from "@/components/Main";
import Banner from "@/components/Banner";
import { get_products } from "@/api/products";

export default function Home({ title, description, newsletter, products }) {
  return (
    <div className="container">
      <div className="mt-5 p-2">
        <Banner
          title={title}
          description={description}
          newsletter={newsletter}
        />
      </div>
      <Main products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await get_products();

  return {
    props: {
      title: "Welcome to E-TECH",
      description:
        "Find in our Technology E-commerce great prices and several options to you!",
      newsletter:
        "Keep update in our last offers, do not miss chance to get our products.",
      products,
    },
  };
}
