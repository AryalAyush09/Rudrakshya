import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TestimonialSection from "@/components/TestimonialSection";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import { products } from "@/lib/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Lab Certified", desc: "Every bead verified authentic" },
  { icon: Truck, title: "Worldwide Shipping", desc: "Tracked & insured delivery" },
  { icon: Award, title: "Vedic Energized", desc: "Blessed through sacred rituals" },
];

const Index = () => (
  <Layout>
    <HeroSection />

    {/* Trust Bar */}
    <section className="py-10 border-y border-border bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <f.icon size={20} className="text-primary" />
              <div>
                <p className="text-sm font-heading text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-3">Featured</p>
          <h2 className="text-3xl lg:text-4xl font-heading text-gradient-gold">Sacred Collection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter((p) => p.featured).slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-primary font-body font-medium hover:gap-3 transition-all">
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    <CategorySection />

    {/* About */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-3">About Rudraksha</p>
        <h2 className="text-3xl lg:text-4xl font-heading text-gradient-gold mb-6">The Sacred Seed</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-4">
          Rudraksha beads are the sacred seeds of the Elaeocarpus ganitrus tree, believed to have originated from the tears of Lord Shiva during deep meditation. For millennia, sages, monks, and spiritual seekers have worn these powerful beads to enhance meditation, promote healing, and connect with divine consciousness.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Each Rudraksha bead is unique, with varying numbers of Mukhis (faces) that determine its spiritual properties and the deity it represents. From the rare 1 Mukhi representing Lord Shiva himself, to the commonly available 5 Mukhi for general well-being, every bead carries profound spiritual significance.
        </p>
      </div>
    </section>

    <TestimonialSection />

    {/* CTA Banner */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-10 lg:p-16 text-center glow-gold"
        >
          <h2 className="text-2xl lg:text-4xl font-heading text-gradient-gold mb-4">Begin Your Spiritual Journey</h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
            Explore our curated collection of authentic Rudraksha beads and find the perfect companion for your spiritual practice.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all"
          >
            Explore Collection <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* FAQ Preview */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-heading text-gradient-gold">Common Questions</h2>
        </div>
        <FAQSection limit={3} />
        <div className="text-center mt-8">
          <Link to="/faq" className="inline-flex items-center gap-2 text-sm text-primary font-body font-medium hover:gap-3 transition-all">
            View All FAQs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
