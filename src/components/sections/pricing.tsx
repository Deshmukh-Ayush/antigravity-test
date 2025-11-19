import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Growth",
        price: "$8",
        description: "For individuals and small teams getting started.",
        features: [
            "Up to 5 active agents",
            "50 simulation runs",
            "Visual builder access",
            "GitHub + Zapier integration",
            "Basic support",
            "1 team workspace",
            "Workflow APIs",
            "Community Slack access",
        ],
    },
    {
        name: "Scale",
        price: "$19",
        description: "For growing teams needing more power.",
        features: [
            "Up to 25 active agents",
            "150 simulation runs",
            "Visual builder access",
            "GitHub + Zapier integration",
            "Priority support",
            "3 team workspace",
            "Workflow APIs",
            "Priority Slack access",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$30",
        description: "For large organizations with custom needs.",
        features: [
            "Unlimited active agents",
            "Unlimited simulation runs",
            "Visual builder access",
            "GitHub + Zapier integration",
            "Priority support",
            "Unlimited team workspace",
            "Workflow APIs",
            "Priority Slack access",
            "Access to Fight Club",
        ],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`flex flex-col ${plan.popular
                                    ? "border-primary shadow-lg scale-105 z-10"
                                    : ""
                                }`}
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-4xl font-bold mb-6">
                                    {plan.price}
                                    <span className="text-sm font-normal text-muted-foreground">
                                        /month
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="h-4 w-4 text-primary mr-2" />
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
