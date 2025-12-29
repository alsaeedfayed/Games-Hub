import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <section
      className={cn("max-w-[1375px] w-full py-5 px-10", className || "")}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
