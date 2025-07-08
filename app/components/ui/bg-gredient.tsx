import { cn } from "@/app/lib/utils";

export const Component = ({
    className,
    gradientFrom = "#fff",
    gradientTo = "#63e",
    gradientSize = "125% 125%",
    gradientPosition = "50% 10%",
    gradientStop = "40%"
}: ComponentProps) => {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full -z-10 bg-white",
                className
            )}
            style={{
                background: `radial-gradient(${gradientSize} at ${gradientPosition}, ${gradientFrom} ${gradientStop}, ${gradientTo} 100%)`
            }}
        />
    );
};
export interface ComponentProps {
    className?: string;
    gradientFrom?: string;
    gradientTo?: string;
    gradientSize?: string;
    gradientPosition?: string;
    gradientStop?: string;
}