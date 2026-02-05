import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import { Boxes } from "@/components/ui/background-boxes";
import { TypingText } from "@/components/ui/TypingText";
import { CinematicText } from "@/components/ui/ReadingModeScroll";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const aboutContent = [
    {
        type: 'p',
        content: [
            { text: "Forsee AI", className: "text-cyan-400 font-semibold" },
            " was built around a simple idea: most failures don't happen suddenly — ",
            { text: "they whisper first.", className: "italic text-amber-300" }
        ]
    },
    {
        type: 'p',
        content: [
            "Across critical systems like ",
            { text: "energy infrastructure", className: "text-emerald-400" },
            ", ",
            { text: "manufacturing lines", className: "text-violet-400" },
            ", and ",
            { text: "computing platforms", className: "text-sky-400" },
            ", small signals appear long before breakdowns occur. These signals are often dismissed as noise, thresholds are crossed too late, and action comes only after damage is done."
        ]
    },
    {
        type: 'p',
        className: "text-cyan-400 font-semibold text-2xl py-4",
        content: ["Forsee AI exists to change that."]
    },
    {
        type: 'p',
        content: [
            "Instead of predicting failures after they become obvious, ",
            { text: "Forsee AI", className: "text-cyan-400" },
            " focuses on ",
            { text: "near-failures", className: "text-rose-400 font-medium" },
            " — subtle shifts, precursors, and ",
            { text: "risk trajectories", className: "text-amber-300" },
            " that indicate something is about to go wrong. By analyzing how risk evolves over time, not just static values, ",
            { text: "Forsee AI", className: "text-cyan-400" },
            " gives engineers ",
            { text: "lead time", className: "text-emerald-400" },
            ", ",
            { text: "context", className: "text-violet-400" },
            ", and ",
            { text: "clarity", className: "text-sky-400" },
            "."
        ]
    },
    {
        type: 'p',
        content: [
            "The result is not just alerts, but ",
            { text: "understanding", className: "text-amber-300 font-medium" },
            " — what is changing, why it matters, and when to act."
        ]
    },
    {
        type: 'p',
        className: "italic text-base mt-8 border-t border-white/40 pt-8",
        content: [
            { text: "Forsee AI", className: "text-cyan-400" },
            " is designed as a ",
            { text: "decision companion", className: "text-emerald-400" },
            " for high-stakes systems, where ",
            { text: "foresight", className: "text-violet-400" },
            " matters more than hindsight."
        ]
    }
];

export default function InfoPage() {
    return (
        <main className="min-h-screen pt-24 bg-black relative overflow-hidden">
            <div className="fixed inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes className="fixed inset-0" />

            <div className="relative z-30 pointer-events-none">
                {/* Hero Header for Info Page */}
                {/* Hero Header for Info Page */}
                <section className="py-16 px-6 text-center pointer-events-none">
                    <div className="text-4xl md:text-5xl font-bold mb-8 flex justify-center gap-2 inline-block">
                        <TypingText text="About" className="text-white" />
                        <TypingText text="Forsee AI" className="text-red-500" delay={0.5} />
                    </div>

                    <div className="max-w-3xl mx-auto text-lg md:text-xl font-playfair leading-relaxed text-white/90 pointer-events-none">
                        {aboutContent.map((block, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.5, ease: "easeOut" }}
                                className={cn("mb-6", block.className)}
                            >
                                {block.content.map((segment, sIdx) => {
                                    if (typeof segment === 'string') return segment;
                                    return <span key={sIdx} className={segment.className}>{segment.text}</span>;
                                })}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* What it does */}
                <FeaturesSection />

                {/* How it works */}
                <HowItWorksSection />

                {/* Ready to predict the future */}
                <FooterCTA />
            </div>
        </main>
    );
}
