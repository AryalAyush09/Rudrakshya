import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

const FAQSection = ({ limit }: { limit?: number }) => {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30 transition-colors"
          >
            <AccordionTrigger className="text-sm font-body font-medium text-foreground hover:text-primary py-4 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground font-body leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
