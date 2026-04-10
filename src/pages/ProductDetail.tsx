import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-heading text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary text-sm font-body">Back to Products</Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 font-body transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-xs text-primary font-body tracking-widest uppercase mb-2">{product.category.replace("-", " ")}</p>
              <h1 className="text-2xl lg:text-3xl font-heading text-foreground mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-body font-bold text-primary">£{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">£{product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <p className="text-muted-foreground font-body leading-relaxed mb-6">{product.description}</p>

              {product.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-heading tracking-wider text-foreground mb-3">BENEFITS</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <Check size={14} className="text-primary flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => toast.success(`${product.name} added to cart!`)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all glow-gold"
              >
                <ShoppingBag size={16} /> Buy Now
              </button>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 lg:mt-28">
              <h2 className="text-2xl font-heading text-gradient-gold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
