'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Portfolio Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-6">
        {/* Error icon */}
        <div className="mx-auto h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Something went wrong</h2>
          <p className="text-muted-foreground">
            An unexpected error occurred. Please try again or return to the homepage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/30 transition-all duration-200"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="text-xs text-muted-foreground/50 pt-4">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
