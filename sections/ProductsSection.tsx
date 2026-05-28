import IndustrialCard from "@/components/IndustrialCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/lib/data";

export default function ProductsSection() {
  return (
    <section id="products" className="industrial-section z-10 bg-black/[.24]">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Product Portfolio"
          title="Gas Manufacturing Portfolio for Enterprise Industry"
          body="A broad portfolio supporting oxygen-critical, inerting, fabrication, medical, process, and thermal applications."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <IndustrialCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
