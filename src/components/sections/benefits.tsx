import { CheckCircle2 } from "lucide-react";
import { BenefitsVisual } from "@/components/ui/visualizations";

const benefits = [
    "Launch faster",
    "Iterate rapidly",
    "Scale smarter",
    "Reuse intelligence",
    "Prevent breakdowns",
    "Automate more",
];

export function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Why Choose Cloff?
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We provide the tools you need to build reliable, scalable, and intelligent agentic workflows.
                        </p>
                        <div className="grid gap-4 pt-4">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-[300px] md:h-[400px]">
                        <BenefitsVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}
