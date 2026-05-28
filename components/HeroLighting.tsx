export default function HeroLighting() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-16 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-industrial-red/[.18] blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-industrial-oxygen/[.15] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-industrial-graphite to-transparent" />
    </div>
  );
}
