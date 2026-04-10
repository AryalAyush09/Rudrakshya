import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      {(["name", "email"] as const).map((field) => (
        <div key={field}>
          <label className="block text-xs font-body tracking-wider text-muted-foreground uppercase mb-2">{field}</label>
          <input
            type={field === "email" ? "email" : "text"}
            required
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder={`Your ${field}`}
          />
        </div>
      ))}
      <div>
        <label className="block text-xs font-body tracking-wider text-muted-foreground uppercase mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Your message"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all glow-gold"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
