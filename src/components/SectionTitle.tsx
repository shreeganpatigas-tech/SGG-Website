interface SectionTitleProps {
  id?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  id,
  tag,
  title,
  subtitle,
  align = "left"
}: SectionTitleProps) {
  const isLeft = align === "left";

  return (
    <div id={id} className={`flex flex-col gap-3 max-w-4xl text-left ${isLeft ? "" : "md:mx-auto md:text-center text-left"}`}>
      {tag && (
        <div className={`flex items-center gap-2 ${isLeft ? "justify-start" : "md:justify-center justify-start"}`}>
          <span className="w-6 h-[2px] bg-[#B5121B]" />
          <span className="font-mono text-[10px] text-[#B5121B] font-bold tracking-[0.25em] uppercase">
            {tag}
          </span>
         <span className="w-1.5 h-1.5 bg-[#B5121B] rotate-45" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-black tracking-tighter uppercase text-white leading-tight md:leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed tracking-wide mt-1">
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] bg-gradient-to-r from-[#B5121B]/40 to-transparent w-40 mt-1 ${isLeft ? "" : "md:mx-auto"}`} />
    </div>
  );
}
