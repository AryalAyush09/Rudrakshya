import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(40 70% 50% / 0.1) 0%, transparent 70%)" }} />

    <div className="container relative mx-auto px-4 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-xs sm:text-sm font-body tracking-[0.3em] text-primary mb-6 uppercase">
          Authentic · Certified · Sacred
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading leading-tight mb-6">
          <span className="text-gradient-gold">Divine</span>{" "}
          <span className="text-foreground">Rudraksha</span>
          <br />
          <span className="text-foreground">Collection</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed">
          Discover the sacred power of genuine Rudraksha beads. Each bead is lab-certified, 
          energized through ancient Vedic rituals, and sourced from the purest origins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all glow-gold"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:border-primary hover:text-primary transition-all"
          >
            View Gallery
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
