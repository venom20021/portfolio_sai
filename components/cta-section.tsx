"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--grid)/0.04)_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TiltCard tiltDegree={4} scaleOnHover={1.0} glareOpacity={0.3}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative p-8 sm:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl shadow-2xl text-center"
          >
          {/* Sparkle icon */}
          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
            <div className="p-3 rounded-2xl bg-primary shadow-lg shadow-primary/20">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you&apos;re looking for a full-stack developer, cloud architect, or technical leader — I&apos;m open to new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="/sai-prabhat-resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 cursor-pointer"
            >
              Download Resume
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
