import BannerHome from "@/app/_components/banner-home";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <main className="pb-16">
      <section>
        <BannerHome />
      </section>
      <section>
        <ProductList />
      </section>
    </main>
  );
}
