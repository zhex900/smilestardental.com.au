import { cn } from "@/lib/utils";

export type AnimatedGradientTextProps = {
  text: string;
  className?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
};

export default function AnimatedGradientText({
  text,
  className,
  fromColor = "#ACACAC",
  viaColor = "#363636",
  toColor = "#ACACAC",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn("inline-flex bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
        backgroundSize: "200% auto",
        animation: "gradient 3s ease infinite",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
}
