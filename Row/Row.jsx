import React from 'react';

const Row = ({children,gap=10,style,...restProps}) => {
  return (
    <div
      style={{
        // display: "flex",
        // flexFlow: "row wrap",
        display: "grid",
        gridTemplateColumns: `repeat(12, 1fr)`,
        gap: `${gap}px`,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Row;