import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";
import products from "../data/productData";

export const Home = () => {
  useTitle("Home");

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
