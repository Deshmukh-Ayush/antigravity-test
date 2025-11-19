import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is Cloff?",
        answer:
            "Cloff is an AI agentic workflow product that allows you to manage, simulate, and deploy independent agents to complete complex goals.",
    },
    {
        question: "Do I need coding skills to use Cloff?",
        answer:
            "No! Cloff features a drag-and-drop interface and a text-to-workflow builder, making it accessible to everyone.",
    },
    {
        question: "Can I integrate Cloff with other tools?",
        answer:
            "Yes, Cloff offers native integrations with GitHub, Zapier, and more, along with a custom connector SDK.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "We offer a free tier for you to explore the platform and get started with basic features.",
    },
    {
        question: "How secure is my data?",
        answer:
            "We take security seriously. All data is encrypted in transit and at rest, and we follow industry best practices.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-20">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
