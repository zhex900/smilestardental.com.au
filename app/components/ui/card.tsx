import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-black hover:text-white rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-r to-sky-300/20 via-sky-400/20 from-blue-700/20 border border-transparent group-hover:border-slate-100 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-md md:text-2xl text-center md:text-start font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 tracking-wide leading-relaxed text-md md:text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
