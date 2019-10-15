import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CustomProperties from "react-custom-properties";

import "./Grid.css";

export default class Grid extends Component {
  static propTypes = {
    /** Pass in the children that will be rendered within the form */
    children: PropTypes.node,
    /** Specify an optional className that will be applied to the container node */
    className: PropTypes.string,
    /** Gap string */
    gap: PropTypes.string
  };

  static defaultProps = {
    customColumns: "4",
    customGrid: false,
    gap: "24px"
  };
  render() {
    const { children, className, gap, customGrid, customColumns } = this.props;
    console.log(children.length);
    const gridClasses = classNames("u-grid", className, {
      "u-grid--custom": customGrid
    });
    return (
      <CustomProperties
        properties={{
          "--grid-columns": children.length,
          "--grid-gutter": gap,
          "--grid-template-columns": customColumns
        }}
      >
        <div className={gridClasses}>{children}</div>
      </CustomProperties>
    );
  }
}
