import { cn } from "@/lib/cn";
import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export default function BrandMark({ className, title = "BuenAire" }: BrandMarkProps) {
  return (
    <span className={cn("relative inline-block h-8 w-8 shrink-0", className)}>
      <Image
        src="/logo.png"
        alt={title}
        fill
        sizes="(max-width: 768px) 52px, 56px"
        className="object-contain scale-[1.18] translate-y-[1px]"
        priority
      />
    </span>
  );
}

