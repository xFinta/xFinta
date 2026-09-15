"use client";

import { stats } from "@/config";
import { useCountUp } from "@/hooks/useCountUp";
import { useLocaleContext } from "@/context/LocaleProvider";

function StatItemDisplay({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-start">
      <span className="font-display text-4xl text-text sm:text-5xl">
        {animatedValue}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-wide text-text-muted">{label}</span>
    </div>
  );
}

export function StatsCounter() {
  const { t } = useLocaleContext();

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <StatItemDisplay
          key={stat.id}
          value={stat.value}
          suffix={stat.suffix}
          label={t.statsLabels[stat.id]}
        />
      ))}
    </div>
  );
}
