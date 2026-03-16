"use client";

import { motion } from "framer-motion";

import { INTEGRATION_SCENE_DELAYS } from "./data";
import type { IntegrationArchitectureModel } from "./types";

type IntegrationArchitectureTabletProps = {
  animateSequence: boolean;
  architecture: IntegrationArchitectureModel;
  revealed: boolean;
};

export function IntegrationArchitectureTablet({
  animateSequence,
  architecture,
  revealed,
}: IntegrationArchitectureTabletProps) {
  return (
    <div className="space-y-7">
      <motion.div
        animate={
          animateSequence ? { opacity: 1, scale: 1, y: 0 } : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.96, y: revealed ? 0 : 14 }
        }
        className="mx-auto max-w-[17rem] rounded-[1.9rem] border border-[color:var(--brand-accent)]/30 bg-slate-950/84 px-6 py-6 text-center shadow-[0_28px_90px_-52px_rgba(37,99,235,0.68)]"
        initial={false}
        transition={
          animateSequence
            ? { delay: INTEGRATION_SCENE_DELAYS.core, duration: 0.82, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]/82">
          {architecture.copy.eyebrow}
        </p>
        <p className="mt-3 text-xl font-semibold tracking-tight text-white">{architecture.core.label}</p>
      </motion.div>

      <div className="mx-auto h-12 w-px bg-gradient-to-b from-[color:var(--brand-accent)]/72 via-white/20 to-white/5" />

      <div className="grid gap-4 lg:grid-cols-3">
        {architecture.primaryNodes.map((node, index) => (
          <motion.div
            animate={
              animateSequence
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.97, y: revealed ? 0 : 16 }
            }
            className="rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_22px_70px_-50px_rgba(15,23,42,0.86)] backdrop-blur"
            initial={false}
            key={node.id}
            transition={
              animateSequence
                ? {
                    delay: INTEGRATION_SCENE_DELAYS[node.scene] + index * 0.08,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0 }
            }
          >
            <p className="text-sm font-semibold tracking-tight text-white">{node.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {node.subnodes.slice(0, 3).map((subnode) => (
                <span
                  className="rounded-full border border-white/10 bg-slate-950/62 px-2.5 py-1 text-[0.68rem] font-medium leading-5 text-slate-200"
                  key={subnode.id}
                >
                  {subnode.label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
