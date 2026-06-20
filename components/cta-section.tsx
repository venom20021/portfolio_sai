"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Download, ArrowRight, Sparkles, Rocket, HeartHandshake } from 'lucide-react';
import { useRef } from 'react';
import TiltCard from '@/components/tilt-card';
import AnimatedGradient from '@/components/animated-gradient';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scaleIn = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacityIn = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Shader background */}
      <AnimatedGradient variant="section" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale: scaleIn, opacity: opacityIn }}
        >
          <TiltCard tiltDegree={4} scaleOnHover={1.0} glareOpacity={0.3}>
            <div className="relative p-8 sm:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl shadow-2xl text-center overflow-hidden">
              {/* Inner animated orbs */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />

              {/* Sparkle icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
              >
                <div className="p-3 rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
                  <Rocket className="h-3.5 w-3.5" />
                  Let&apos;s Collaborate
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Ready to Build Something Great?
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                Whether you&apos;re looking for a full-stack developer, cloud architect, or technical leader — I&apos;m open to new opportunities and collaborations.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <HeartHandshake className="h-4 w-4" />
                  </motion.span>
                </Link>
                <a
                  href="/sai-prabhat-resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Download Resume
                  <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
