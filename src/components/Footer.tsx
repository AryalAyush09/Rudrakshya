import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-heading tracking-wider text-gradient-gold mb-4">SHAMBO</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Authentic, lab-certified Rudraksha beads sourced directly from Nepal and Indonesia. Serving spiritual seekers worldwide since 2010.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-4">QUICK LINKS</h4>
          <div className="flex flex-col gap-2">
            {["/", "/products", "/gallery", "/faq", "/contact"].map((path) => (
              <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-4">CATEGORIES</h4>
          <div className="flex flex-col gap-2">
            {["Siddha Mala", "Saraswati Mala", "Bracelets", "Rare Rudraksha", "Loose Beads"].map((cat) => (
              <Link key={cat} to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm tracking-wider text-foreground mb-4">CONTACT</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" /> +44 7XXX XXXXXX
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-primary" /> info@shamborudraksha.uk
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" /> London, United Kingdom
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Shambo Rudraksha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
