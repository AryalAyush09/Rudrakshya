import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingBag, Star } from "lucide-react";
import type { ProductResponse } from "@/lib/types";

const API_URL = "http://localhost:8090/api/products";

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&q=80",
];

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const json = await res.json();
        let data: ProductResponse[] = [];
        if (json.data && Array.isArray(json.data)) {
          data = json.data;
        } else if (Array.isArray(json)) {
          data = json;
        }
        setProducts(data.slice(0, 4));
      } catch (err) {
        setProducts([
          { id: 1, name: "5 Mukhi Rudraksha Mala", price: 79.99, category: "siddha-mala", description: "The most powerful Rudraksha for mental clarity and spiritual growth", discountPercentage: 20, discountedPrice: 49.99, images: ["https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&q=80"] },
          { id: 2, name: "Siddha Mala (1-14 Mukhi)", price: 899.99, category: "siddha-mala", description: "Complete spiritual mala with all 14 Mukhi", discountPercentage: 30, discountedPrice: 599.99, images: ["https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80"] },
          { id: 3, name: "Saraswati Mala Premium", price: 199.99, category: "saraswati-mala", description: "Divine wisdom mala for knowledge", discountPercentage: 25, discountedPrice: 149.99, images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"] },
          { id: 4, name: "Rudraksha Power Bracelet", price: 49.99, category: "bracelets", description: "Elegant bracelet with authentic beads", discountPercentage: 15, discountedPrice: 34.99, images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80"] },
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-3 w-20 bg-muted rounded mx-auto mb-2 animate-pulse" />
            <div className="h-8 w-48 bg-muted rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-4 animate-pulse">
                <div className="aspect-square bg-muted rounded-xl mb-4" />
                <div className="h-4 w-16 bg-muted rounded mb-2" />
                <div className="h-5 w-full bg-muted rounded mb-2" />
                <div className="h-4 w-20 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-2">Featured</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-gradient-gold">Sacred Collection</h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">Handpicked Rudraksha beads of exceptional quality</p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <ProductCardCompact product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-primary hover:text-primary/70 transition-colors group"
          >
            <span>View All Products</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface ProductCardCompactProps {
  product: ProductResponse;
}

const ProductCardCompact = ({ product }: ProductCardCompactProps) => {
  const images = product.images?.length ? product.images : DEFAULT_IMAGES;
  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
            -{product.discountPercentage}%
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-[9px] font-body font-medium tracking-[0.2em] text-primary uppercase mb-1.5">
          {product.category?.replace(/-/g, " ") || "Rudraksha"}
        </p>
        
        <h3 className="font-heading text-sm text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 h-8">
          {product.description}
        </p>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-body font-bold text-gradient-gold">
            ${hasDiscount ? product.discountedPrice?.toFixed(2) : product.price?.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">
              ${product.price?.toFixed(2)}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary/80 group-hover:text-primary transition-colors">
          <ShoppingBag size={12} />
          View Details
        </span>
      </div>
    </Link>
  );
};

export default FeaturedProductsSection;