import { cn } from "@/lib/utils";

export default function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("metal-panel laser-edge rounded-lg", className)}>{children}</div>;
}
