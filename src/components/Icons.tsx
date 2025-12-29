import { cn } from "@/lib/cn";

type IconProps = { className?: string };

export function SnowflakeIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M4.9 4.9l14.2 14.2" />
      <path d="M19.1 4.9L4.9 19.1" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 2l-2.5 2.5a4.5 4.5 0 0 1-6.4 6.4L5 18l-3 1 1-3 6.1-6.1a4.5 4.5 0 0 1 6.4-6.4L18 1" />
      <path d="M7 17l2 2" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h8l-1 8 11-14h-8l1-6z" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z" />
    </svg>
  );
}

export function FridgeIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M5 10h14" />
      <path d="M8 6v2" />
      <path d="M8 14v2" />
    </svg>
  );
}

export function StoreIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7l2-4h12l2 4" />
      <path d="M4 7h16v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3 3 3 3 0 0 1-3-3V7z" />
      <path d="M5 13v8h14v-8" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

