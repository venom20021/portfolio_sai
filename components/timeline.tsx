"use client";

import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  period: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
            className="relative pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-3.5 top-1.5 h-3.5 w-3.5 rounded-full bg-primary border-2 border-background shadow-sm shadow-primary/20 z-10" />

            {/* Content card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
