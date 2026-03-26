/** Dev-only: shows active Tailwind breakpoint (xs = default, under sm / 640px). */
export function BreakpointDebug() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      className="pointer-events-none fixed bottom-3 right-3 z-[99999] select-none rounded-md bg-neutral-900/90 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-lime-400 shadow-lg ring-1 ring-white/10"
      aria-hidden
    >
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline">2xl</span>
    </div>
  );
}
