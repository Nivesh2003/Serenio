'use client';
import { Ripple } from "@/components/ui/ripple";
import { motion } from 'framer-motion';
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
  const emotions = [
    { value: 0, label: "😓 Depressed", color: "from-slate-500/60" },
    { value: 25, label: "😔 Low", color: "from-blue-500/60" },
    { value: 50, label: "😐 Neutral", color: "from-sky-400/60" },
    { value: 75, label: "🙂 Happy", color: "from-emerald-400/60" },
    { value: 100, label: "😄 Excited", color: "from-amber-400/60" }
  ];

  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currEmotion = emotions.find((em) => Math.abs(emotion - em.value) < 15) || emotions[2];


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <section className="relative min-h-[90vh] mt-20 flex flex-col items-center justify-center py-12 px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute w-[500px] h-[500px] rounded-full blur-3xl top-0 -left-20 
            transition-all duration-700 ease-in-out bg-gradient-to-r ${currEmotion.color} 
            to-transparent opacity-60`} />

          <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse delay-700" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />


        </div>
        <Ripple className="opacity-60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative space-y-8 text-center">

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-primary/20
          bg-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
            <Sparkles className="h-4 w-4 animate-wave text-primary" />
            <span className="relative text-foreground/90 dark:text-foreground">
              Welcome to Serenio - Your AI-Powered Mental Wellness Companion!
            </span>
          </div> {/* The tagline div */}

          {/* Heading start */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-plus-jakarta tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-primary/90 to-secondary/90 bg-clip-text text-transparent [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]
            hover:to-primary transition-all duration-300">
              Let Your Mind
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-foreground via-foreground/50 to-primary bg-clip-text text-transparent">
              UnWind
            </span>
          </h1>
          <p className="max-w-[600px] mx-auto text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide">
          A space to slow down, breathe, and be heard. Serenio is your companion for calm conversations and emotional clarity
          </p>
        </motion.div>
      </section>
    </div>
  );
}
