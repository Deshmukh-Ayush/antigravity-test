import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Ready to Automate Your Workflow?
                </h2>
                <p className="max-w-[600px] mx-auto text-primary-foreground/80 md:text-xl mb-8">
                    Join thousands of teams using Cloff to build and deploy intelligent agents.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="gap-2">
                        Get Started for Free <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}
