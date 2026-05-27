interface StatItemProps {
  number: string;
  label: string;
  suffix?: string;
}

export function StatItem({ number, label, suffix = "" }: StatItemProps) {
  return (
    <div className="relative rounded-xl border border-foreground/10 bg-background/50 p-6 text-center transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-2">
        <div className="text-4xl font-bold text-primary">
          {number}
          {suffix}
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
