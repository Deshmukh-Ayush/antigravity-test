import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
    {
        name: "Alice Johnson",
        role: "CTO at TechCorp",
        content:
            "Cloff has revolutionized how we manage our AI agents. The simulation feature is a game-changer.",
        avatar: "AJ",
    },
    {
        name: "Bob Smith",
        role: "Lead Developer at InnovateInc",
        content:
            "The drag-and-drop builder makes it so easy to visualize complex workflows. Highly recommended!",
        avatar: "BS",
    },
    {
        name: "Charlie Davis",
        role: "Product Manager at FutureSoft",
        content:
            "We've cut our development time in half since switching to Cloff. The real-time tracking is superb.",
        avatar: "CD",
    },
];

export function Testimonials() {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="bg-muted/50">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium leading-none">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
