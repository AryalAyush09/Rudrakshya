import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/data";

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="group relative bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    {/* Image container */}
    <div className="relative aspect-square overflow-hidden bg-secondary/50">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      
      {/* Sale badge */}
      {product.originalPrice && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary/80 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg tracking-wider shadow-lg">
          SALE
        </span>
      )}
      
      {/* Quick add button on hover */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
      >
        <button className="w-full flex items-center justify-center gap-2 bg-background/95 backdrop-blur-sm text-foreground py-3 rounded-xl font-body font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
          <ShoppingBag size={16} />
          <span>Quick Add</span>
        </button>
      </motion.div>
    </div>
    
    {/* Content */}
    <div className="relative p-5 lg:p-6">
      {/* Category */}
      <p className="text-[10px] font-body font-medium tracking-[0.2em] text-primary uppercase mb-2">
        {product.category.replace("-", " ")}
      </p>
      
      {/* Name */}
      <h3 className="font-heading text-base lg:text-lg text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
        {product.name}
      </h3>
      
      {/* Price */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl lg:text-2xl font-body font-bold text-gradient-gold">
          £{product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">
            £{product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      
      {/* View Details button */}
      <Link
        to={`/products/${product.id}`}
        className="block w-full text-center bg-secondary/80 text-secondary-foreground py-3 rounded-xl text-sm font-body font-medium hover:bg-primary hover:text-white transition-all duration-300 group/btn"
      >
        <span className="group-hover/btn:relative">View Details</span>
      </Link>
    </div>
  </motion.div>
);

export default ProductCard;