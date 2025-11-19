import {
    Figma,
    Github,
    Gitlab,
    Slack,
    Trello,
    Twitter,
} from "lucide-react";

export function Companies() {
    return (
        <section className="py-12 border-y bg-slate-50/50 dark:bg-slate-900/20">
            <div className="container px-4 md:px-6">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8">
                    TRUSTED BY INNOVATIVE TEAMS
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <Figma className="h-8 w-8" />
                        <span className="font-bold text-xl">Figma</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Github className="h-8 w-8" />
                        <span className="font-bold text-xl">GitHub</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Gitlab className="h-8 w-8" />
                        <span className="font-bold text-xl">GitLab</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Slack className="h-8 w-8" />
                        <span className="font-bold text-xl">Slack</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Trello className="h-8 w-8" />
                        <span className="font-bold text-xl">Trello</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Twitter className="h-8 w-8" />
                        <span className="font-bold text-xl">Twitter</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
