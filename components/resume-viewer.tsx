'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  Maximize2,
  Minimize2,
  ExternalLink,
  Loader2,
} from 'lucide-react';

export default function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    // Fallback: hide loader after 3s even if onLoad doesn't fire
    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
    >
      <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                Resume
              </h3>
              <p className="text-xs text-muted-foreground">
                Sai Prabhat &middot; Software Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/sai-prabhat-resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <a
              href="/sai-prabhat-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              title={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <motion.div
          animate={{ height: expanded ? 800 : 480 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-full bg-muted/5 overflow-hidden"
        >
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground">Loading resume...</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 z-10">
              <p className="text-sm text-muted-foreground text-center">
                Unable to preview the resume inline.
              </p>
              <a
                href="/sai-prabhat-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Open in new tab
              </a>
            </div>
          )}

          <object
            data="/sai-prabhat-resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full rounded-b-2xl"
            style={{ minHeight: expanded ? 800 : 480 }}
            onLoad={handleLoad}
            onError={handleError}
          >
            <p className="text-sm text-muted-foreground p-4 text-center">
              PDF cannot be displayed inline.{' '}
              <a
                href="/sai-prabhat-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Open in new tab
              </a>
            </p>
          </object>
        </motion.div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-border/30 bg-muted/5">
          <p className="text-xs text-muted-foreground">
            Resume &middot; 2026
          </p>
          <a
            href="/sai-prabhat-resume.pdf"
            download
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            <Download className="h-3 w-3" />
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}
