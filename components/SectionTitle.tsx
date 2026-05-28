import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionTitle({ eyebrow, title, body, align = "left" }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[.28em] text-industrial-oxygen">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-7 text-white/[.68] sm:text-lg">{body}</p> : null}
    </div>
  );
}
