import BannerHome from "@/components/banner-home";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <main className="pb-17">
      <section>
        <BannerHome />
      </section>
      <section>
        <ProductList />
      </section>
    </main>
  );
}
