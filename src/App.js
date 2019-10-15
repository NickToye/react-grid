import React, { Component } from "react";
import Grid from "./components/Grid/Grid";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      children: [1, 2, 3, 4]
    };
  }

  clearChildren = () => {
    this.setState({ children: [] });
  };

  addChildren = () => {
    this.setState(state => {
      const children = state.children.concat(state.children.length + 1);

      return {
        children
      };
    });
  };

  removeChildren = () => {
    this.setState(state => {
      const children = state.children.slice(1, state.children.length);

      return {
        children
      };
    });
  };

  render() {
    return (
      <div>
        <div className="u-buttons  u-margin-bottom">
          <button type="button" onClick={this.addChildren} className="c-btn">
            +
          </button>

          <button type="button" onClick={this.removeChildren} className="c-btn">
            -
          </button>
        </div>
        <Grid>
          {this.state.children.map(item => (
            <div className="cell">Cell</div>
          ))}
        </Grid>
      </div>
    );
  }
}
