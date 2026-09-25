import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", align === "center" && "text-center items-center", className)}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-brand-deep-navy tracking-tight text-balance leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-brand-text-muted max-w-3xl text-lg md:text-xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}
