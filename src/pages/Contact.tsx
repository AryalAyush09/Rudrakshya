import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-3">Get in Touch</p>
          <h1 className="text-3xl lg:text-4xl font-heading text-gradient-gold">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-lg font-heading text-foreground mb-6">Send a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-lg font-heading text-foreground mb-6">Contact Information</h2>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+44 7XXX XXXXXX" },
                { icon: Mail, label: "Email", value: "info@shamborudraksha.uk" },
                { icon: MapPin, label: "Location", value: "London, United Kingdom" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-foreground font-body">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178107698614075!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
