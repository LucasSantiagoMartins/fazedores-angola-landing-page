export const PlanSkeleton = () => (
  <div className="h-full p-8 rounded-3xl glass flex flex-col animate-pulse">
    <div className="h-8 w-2/3 bg-foreground/10 rounded-lg mb-4" />
    <div className="h-10 w-1/2 bg-foreground/10 rounded-lg mb-4" />
    <div className="h-4 w-full bg-foreground/5 rounded-md mb-2" />
    <div className="h-4 w-full bg-foreground/5 rounded-md mb-6" />
    <div className="space-y-3 flex-1 mb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-4 w-full bg-foreground/5 rounded-full" />
      ))}
    </div>
    <div className="h-11 w-full bg-foreground/10 rounded-full" />
  </div>
);
