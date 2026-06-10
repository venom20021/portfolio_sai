export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="space-y-6 text-center">
        {/* Spinner */}
        <div className="relative mx-auto h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-muted" />
          <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground font-medium">Loading</p>
          <div className="flex justify-center gap-1">
            <span className="h-2 w-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
            <span className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
            <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
