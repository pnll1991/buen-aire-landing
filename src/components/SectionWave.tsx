import { cn } from "@/lib/cn";

type SectionWaveProps = {
  className?: string;
};

export default function SectionWave({ className }: SectionWaveProps) {
  return (
    <div className={cn("relative h-10 sm:h-12", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,120 360,0 720,60 C1080,120 1200,10 1440,70 L1440,120 L0,120 Z"
          fill="rgba(11, 94, 215, 0.08)"
        />
        <path
          d="M0,60 C220,10 420,110 720,50 C1020,-10 1240,110 1440,40 L1440,120 L0,120 Z"
          fill="rgba(8, 75, 176, 0.06)"
        />
      </svg>
    </div>
  );
}

