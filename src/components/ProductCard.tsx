import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
  >
    <div className="relative aspect-square overflow-hidden bg-secondary">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {product.originalPrice && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-md tracking-wide">
          SALE
        </span>
      )}
    </div>
    <div className="p-4 lg:p-5">
      <p className="text-[10px] text-primary font-body tracking-widest uppercase mb-1">
        {product.category.replace("-", " ")}
      </p>
      <h3 className="font-heading text-sm lg:text-base text-foreground mb-2 line-clamp-1">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-body font-bold text-primary">£{product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">£{product.originalPrice.toFixed(2)}</span>
        )}
      </div>
      <Link
        to={`/products/${product.id}`}
        className="block text-center bg-secondary text-secondary-foreground py-2.5 rounded-lg text-sm font-body font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  </motion.div>
);

export default ProductCard;
