import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: "sm" | "md" | "lg" | "xl";
}

const paddingMap = {
  sm: "py-10 sm:py-12 lg:py-16",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
  xl: "py-20 sm:py-24 lg:py-32",
} as const;

export function Section({
  children,
  className,
  padding = "lg",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(paddingMap[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
