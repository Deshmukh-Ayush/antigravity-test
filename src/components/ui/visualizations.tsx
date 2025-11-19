"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const WorkflowVisual = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="bg-slate-200 dark:bg-slate-800 rounded-sm" />
                ))}
            </div>
            <svg className="w-full h-full absolute inset-0 pointer-events-none">
                <motion.path
                    d="M 50 100 Q 150 50 250 100 T 450 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </svg>
            <motion.div
                className="w-12 h-12 bg-primary rounded-lg shadow-lg z-10 flex items-center justify-center text-white font-bold"
                animate={{
                    x: [0, 50, 0, -50, 0],
                    y: [0, -20, 0, 20, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                AI
            </motion.div>
        </div>
    );
};

export const ActivityVisual = () => {
    const [lines, setLines] = useState<number[]>([1, 2, 3]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLines((prev) => [...prev.slice(1), Math.random()]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-2 p-4 w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden font-mono text-xs">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <span className="text-slate-400">{new Date().toLocaleTimeString()}</span>
                    <span className={i % 2 === 0 ? "text-green-500" : "text-blue-500"}>
                        {i % 2 === 0 ? "TRIGGER" : "ACTION"}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">
                        {i % 2 === 0 ? "User input received" : "Processing data..."}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export const ModelSelectorVisual = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
            <div className="w-3/4 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 p-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-600 rounded" />
                    <div className="h-4 w-4 bg-slate-200 dark:bg-slate-600 rounded-full" />
                </div>
                <div className="space-y-1">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="h-8 w-full bg-slate-100 dark:bg-slate-700 rounded flex items-center px-2 cursor-pointer"
                            whileHover={{ scale: 1.02, backgroundColor: "var(--primary)", color: "white" }}
                        >
                            <div className="h-2 w-1/2 bg-slate-300 dark:bg-slate-500 rounded" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const SandboxVisual = () => {
    return (
        <div className="flex w-full h-full bg-slate-900 rounded-xl overflow-hidden text-xs font-mono">
            <div className="w-1/2 border-r border-slate-700 p-2 text-slate-400">
                <div className="text-purple-400">function run() {"{"}</div>
                <div className="pl-4 text-blue-400">const agent = new Agent();</div>
                <div className="pl-4 text-blue-400">await agent.think();</div>
                <div className="text-purple-400">{"}"}</div>
            </div>
            <div className="w-1/2 p-2 bg-black text-green-400">
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    &gt; Initializing...
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    &gt; Agent ready.
                </motion.div>
            </div>
        </div>
    );
};

export const AuthVisual = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
            <motion.div
                className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </motion.div>
        </div>
    );
};

export const SyncVisual = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                >
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 21h5v-5" />
                </svg>
            </motion.div>
        </div>
    );
};

export const BenefitsVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 overflow-hidden rounded-2xl">
            {/* Central Node */}
            <motion.div
                className="absolute z-20 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <span className="text-white font-bold text-xl">Cloff</span>
            </motion.div>

            {/* Orbiting Nodes */}
            {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md flex items-center justify-center z-10"
                    style={{ rotate: degree }}
                    animate={{
                        rotate: [degree, degree + 360],
                        x: [120, 120], // Orbit radius
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-6 h-6 bg-slate-200 dark:bg-slate-600 rounded-full" />
                </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none animate-spin-slow">
                {[0, 60, 120, 180, 240, 300].map((degree, i) => {
                    const rad = (degree * Math.PI) / 180;
                    const x2 = 50 + 35 * Math.cos(rad); // 35% radius
                    const y2 = 50 + 35 * Math.sin(rad);
                    return (
                        <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-300 dark:text-slate-700"
                        />
                    )
                })}
            </svg>
        </div>
    )
}

export const DesignVisual = () => {
    return (
        <div className="w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 opacity-10 pointer-events-none">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="bg-slate-400 rounded-full w-0.5 h-0.5" />
                ))}
            </div>

            {/* Sidebar */}
            <div className="absolute left-2 top-2 bottom-2 w-12 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col gap-2 p-1 shadow-sm">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-full aspect-square bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center">
                        <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-sm" />
                    </div>
                ))}
            </div>

            {/* Canvas Area */}
            <div className="ml-16 relative w-48 h-32">
                {/* Node 1 */}
                <motion.div
                    className="absolute top-4 left-4 w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm flex items-center justify-center z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-4 h-4 bg-blue-400 rounded-sm" />
                </motion.div>

                {/* Node 2 (Dragged in) */}
                <motion.div
                    className="absolute top-16 right-8 w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm flex items-center justify-center z-10"
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "backOut" }}
                >
                    <div className="w-4 h-4 bg-purple-400 rounded-sm" />
                </motion.div>

                {/* Connection */}
                <svg className="absolute inset-0 pointer-events-none">
                    <motion.path
                        d="M 35 35 C 60 35, 60 80, 135 80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-300 dark:text-slate-600"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                    />
                </svg>

                {/* Cursor */}
                <motion.div
                    className="absolute w-4 h-4 z-20"
                    initial={{ x: 10, y: 100, opacity: 0 }}
                    animate={{
                        x: [10, 140, 140, 10],
                        y: [100, 80, 80, 100],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-white fill-black dark:fill-white">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}

export const SimulateVisual = () => {
    return (
        <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden flex flex-col font-mono text-[10px] p-3">
            <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="ml-2 text-slate-500">simulation.log</div>
            </div>
            <div className="flex-1 space-y-1 overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <span className="text-green-400">✓</span> Workflow validated
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <span className="text-blue-400">ℹ</span> Agent "SupportBot" initialized
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                    <span className="text-yellow-400">⚠</span> Rate limit check: OK
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
                    <span className="text-blue-400">ℹ</span> Processing user request...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
                    <span className="text-green-400">✓</span> Output generated successfully
                </motion.div>
                <motion.div
                    className="mt-2 p-1 bg-green-900/20 border border-green-900/50 text-green-400 rounded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2 }}
                >
                    Simulation Complete (240ms)
                </motion.div>
            </div>
        </div>
    )
}

export const DeployVisual = () => {
    return (
        <div className="w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center relative overflow-hidden rounded-xl">
            {/* Central Hub */}
            <motion.div
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/20"
                animate={{ boxShadow: ["0 0 0 0 rgba(var(--primary), 0)", "0 0 0 10px rgba(var(--primary), 0.1)", "0 0 0 20px rgba(var(--primary), 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </motion.div>

            {/* Connected Nodes */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-24 h-1 bg-gradient-to-r from-primary to-transparent origin-left"
                    style={{ rotate: deg, left: "50%", top: "50%" }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                    <motion.div
                        className="absolute right-0 -top-1.5 w-3 h-3 bg-green-500 rounded-full shadow-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.2 + 0.4, type: "spring" }}
                    />
                </motion.div>
            ))}

            <div className="absolute bottom-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                Deploying to Edge
            </div>
        </div>
    )
}
