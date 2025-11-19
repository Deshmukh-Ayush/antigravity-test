import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    Bot,
    Cpu,
    Zap,
    LayoutDashboard,
    Lock,
    RefreshCw,
} from "lucide-react";
import {
    WorkflowVisual,
    ActivityVisual,
    ModelSelectorVisual,
    SandboxVisual,
    AuthVisual,
    SyncVisual,
} from "@/components/ui/visualizations";

export function Features() {
    return (
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Powerful Features
                    </h2>
                    <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Everything you need to build, test, and deploy agentic workflows.
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
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

const items = [
    {
        title: "LLM Model Selector",
        description: "Choose from a variety of state-of-the-art LLM models for your agents.",
        header: <ModelSelectorVisual />,
        icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Real-time Activity Tracking",
        description: "Track triggers, tools used, outcomes, and timestamps in real-time.",
        header: <ActivityVisual />,
        icon: <LayoutDashboard className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Text to Workflow Builder",
        description: "Describe your workflow in plain text and let AI build it for you.",
        header: <WorkflowVisual />,
        icon: <Bot className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Preview & Debug Sandbox",
        description:
            "Test your workflows in a safe sandbox environment before deploying to production.",
        header: <SandboxVisual />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "One Click Auth",
        description: "Seamless authentication for your agents and users.",
        header: <AuthVisual />,
        icon: <Lock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Realtime Sync",
        description: "Keep your workflows and data in sync across all devices.",
        header: <SyncVisual />,
        icon: <RefreshCw className="h-4 w-4 text-neutral-500" />,
    },
];
