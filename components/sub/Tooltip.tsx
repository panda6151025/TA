import React, { ReactNode } from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={[
          styles.tooltipContainer,
          "absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        ].join(" ")}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
