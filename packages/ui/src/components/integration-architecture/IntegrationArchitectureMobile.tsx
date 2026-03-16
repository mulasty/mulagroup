"use client";

import { motion } from "framer-motion";

import { INTEGRATION_SCENE_DELAYS } from "./data";
import type { IntegrationArchitectureModel } from "./types";

type IntegrationArchitectureMobileProps = {
  animateSequence: boolean;
  architecture: IntegrationArchitectureModel;
  revealed: boolean;
};

export function IntegrationArchitectureMobile({
  animateSequence,
  architecture,
  revealed,
}: IntegrationArchitectureMobileProps) {
  return (
    <div className="space-y-6">
      <motion.div
        animate={
          animateSequence ? { opacity: 1, scale: 1 } : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.94 }
        }
        className="mx-auto max-w-[15rem] rounded-[1.75rem] border border-[color:var(--brand-accent)]/35 bg-slate-950/85 px-5 py-5 text-center shadow-[0_24px_80px_-44px_rgba(37,99,235,0.66)]"
        initial={false}
        transition={
          animateSequence
            ? { delay: INTEGRATION_SCENE_DELAYS.core, duration: 0.72, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/80">
          {architecture.copy.eyebrow}
        </p>
        <p className="mt-3 text-lg font-semibold tracking-tight text-white">{architecture.core.label}</p>
      </motion.div>

      <div className="mx-auto h-10 w-px bg-gradient-to-b from-[color:var(--brand-accent)]/70 to-white/5" />

      <div className="grid gap-4 sm:grid-cols-2">
        {architecture.mobileClusters.map((cluster, index) => (
          <motion.div
            animate={
              animateSequence
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96, y: revealed ? 0 : 18 }
            }
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.85)] backdrop-blur"
            initial={false}
            key={cluster.id}
            transition={
              animateSequence
                ? {
                    delay: INTEGRATION_SCENE_DELAYS.mainFirst + index * 0.22,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0 }
            }
          >
            <p className="text-sm font-semibold tracking-tight text-white">{cluster.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cluster.items.map((item) => (
                <span
                  className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[0.68rem] font-medium leading-5 text-slate-200"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
