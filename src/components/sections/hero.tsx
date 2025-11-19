"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Layers } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32 lg:py-40">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                        <span className="mr-2">🚀</span> Introducing Cloff 1.0
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight lg:text-6xl max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                    >
                        Manage and simulate <br className="hidden md:block" />
                        <span className="text-primary">agentic workflows</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
                    >
                        Agents operate independently and coordinate tasks to complete complex goals together.
                        Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="gap-2">
                            Get Started <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Visual Representation of Agents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 relative w-full max-w-5xl mx-auto h-[400px] border rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center"
                >
                    <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-1 opacity-10 pointer-events-none">
                        {[...Array(200)].map((_, i) => (
                            <div key={i} className="border-r border-b border-primary/20"></div>
                        ))}
                    </div>

                    {/* Animated Nodes */}
                    <FloatingNode icon={<Bot />} label="Agent A" x={-150} y={-50} delay={0} />
                    <FloatingNode icon={<Zap />} label="Trigger" x={0} y={-100} delay={1} />
                    <FloatingNode icon={<Layers />} label="Workflow" x={150} y={-50} delay={2} />
                    <FloatingNode icon={<Bot />} label="Agent B" x={0} y={50} delay={3} />

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path
                            d="M 50% 38% L 35% 45%" // Trigger to Agent A (Approx)
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/50"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.path
                            d="M 50% 38% L 65% 45%" // Trigger to Workflow
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/50"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.path
                            d="M 35% 55% L 50% 65%" // Agent A to Agent B
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/50"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.path
                            d="M 65% 55% L 50% 65%" // Workflow to Agent B
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary/50"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                    </svg>

                </motion.div>
            </div>
        </section>
    );
}

function FloatingNode({ icon, label, x, y, delay }: { icon: React.ReactNode, label: string, x: number, y: number, delay: number }) {
    return (
        <motion.div
            className="absolute flex flex-col items-center gap-2 p-4 bg-card border rounded-lg shadow-lg z-10"
            style={{ x, y }}
            animate={{
                y: [y - 10, y + 10, y - 10],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            <div className="p-2 bg-primary/10 rounded-full text-primary">
                {icon}
            </div>
            <span className="text-xs font-medium">{label}</span>
        </motion.div>
    )
}
