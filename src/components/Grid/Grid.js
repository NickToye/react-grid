import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import useWindowSize from "../../hooks/use-window-size";
import useDimensions from "react-use-dimensions";

import CustomProperties from "react-custom-properties";

import "./Grid.css";

const Grid = ({
  children,
  className,
  gap,
  customColumns,
  customGrid,
  ...other
}) => {
  const gridClasses = classNames("u-grid", className, {
    "u-grid--custom": customGrid
  });

  const commonProps = {
    className: gridClasses
  };

  const [ref, { x, y, width, height }] = useDimensions();

  const gridWidth = width;
  const gridChildren = children.length;
  const gridGap = parseInt(gap, 10);

  const cellWidth =
    (gridWidth - (gridChildren - 1) * gridGap) / children.length;

  const grid = (
    <div {...other} {...commonProps} ref={ref}>
      {children}
    </div>
  );

  // const size = useWindowSize();

  return (
    <CustomProperties
      properties={{
        "--grid-columns": children.length > 12 ? 12 : children.length,
        "--grid-gutter": gap,
        "--grid-template-columns": customColumns
      }}
    >
      {grid}
      <p>Cell widths: {cellWidth}</p>
    </CustomProperties>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.string
};

Grid.defaultProps = {
  customColumns: "4",
  customGrid: false,
  gap: "24px"
};

export default Grid;
