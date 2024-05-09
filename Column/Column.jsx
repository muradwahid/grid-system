import React from "react";
import "./column.css";

const Column = ({ children, span, style, className, ...restProps }) => {
  const mxW = (100 / 12) * span;
  const {md=6,lg=12} =span
  return (
    <div
      style={{
        // maxWidth: `${mxW}%`,
        // flexWrap: "wrap",
        // gridColumn: `auto / span ${span}`,
        ...style,
      }}
      className={`bpl-custom-column column-lg-span-${lg} column-md-span-${md} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Column;
