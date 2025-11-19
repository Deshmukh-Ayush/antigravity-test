import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    MousePointerClick,
    Play,
    Settings,
} from "lucide-react";
import { DesignVisual, SimulateVisual, DeployVisual } from "@/components/ui/visualizations";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        How Cloff Works
                    </h2>
                    <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Build, simulate, and deploy agentic workflows in three simple steps.
                    </p>
                </div>
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 1 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

const items = [
    {
        title: "1. Design Workflows",
        description: "Use our drag-and-drop interface to connect agents, triggers, and tools.",
        header: <DesignVisual />,
        icon: <MousePointerClick className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "2. Simulate & Debug",
        description: "Run your workflows in a sandbox environment to test logic and interactions safely.",
        header: <SimulateVisual />,
        icon: <Play className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "3. Deploy & Scale",
        description: "Deploy your agents with one click and scale effortlessly.",
        header: <DeployVisual />,
        icon: <Settings className="h-4 w-4 text-neutral-500" />,
    },
];
