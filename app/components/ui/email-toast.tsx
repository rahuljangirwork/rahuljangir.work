"use client";

import { useToast } from "@/app/components/ui/use-toast";
import { Copy } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

export default function EmailToast({
  className,
  iconSize = 16,
  children,
}: {
  className?: string;
  iconSize?: number;
  children?: ReactNode;
}) {
  const { toast } = useToast();

  const email = "rahuljangir.works@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        description: "Email copied to clipboard ✓",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast({
        description: "Failed to copy email",
        variant: "destructive",
      });
    }
  };

  return (
    <button className={cn(className, "pl-1")} onClick={handleCopyEmail}>
      {children}
      <Copy size={iconSize} />
    </button>
  );
}
