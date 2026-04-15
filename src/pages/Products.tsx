import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { motion } from "framer-motion";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">Collection</p>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-heading text-gradient-gold">Our Products</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Explore our curated collection of authentic Rudraksha beads
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setSearchParams({})}
              className={`px-5 py-2.5 rounded-xl text-sm font-body font-medium tracking-wide transition-all duration-300 ${
                activeCategory === "all" 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                className={`px-5 py-2.5 rounded-xl text-sm font-body font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;