/**
 * Even though we don't write code in class components,
 * there is a lot of legacy code in the project that we have to work with.
 * We want to make sure that you are familiar with class components.
 *
 * Rewrite this functional component as a class-based component.
 * This component contains multiple useEffect hooks with different dependencies
 * and an additional state that influences rendering.
 *
 * Make sure the class-based component mirrors the behavior of the provided functional component.
 *
 * Task:
 * - Rewrite this functional component as a class-based component.
 * - Implement component lifecycle methods in place of useEffect hooks.
 * - Ensure that initial values of `count` and `clicks` are logged upon mounting.
 * - Maintain correct behavior when props or state change.
 */

import React, { Component, useEffect, useState } from "react";

const FunctionalCounter = ({ count, initialName }) => {
  const [name, setName] = useState(initialName || "Anonymous");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Clicks have been updated: ${clicks}`);
  }, [clicks]);

  useEffect(() => {
    console.log("Setting up observers");

    return () => {
      console.log("Clear observers");
    };
  }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <div>Name: {name}</div>
      <div>Count: {count}</div>
      <div>Clicks: {clicks}</div>
      <button onClick={handleClick}>Increment Clicks</button>
    </div>
  );
};

export class ClassCounter extends Component {
  state = {
    name: this.props.initialName || "Anonymous",
    clicks: 0,
  };

  componentDidMount() {
    console.log("Setting up observers");
    console.log(`Count has changed to: ${this.props.count}`);
    console.log(`Clicks have been updated: ${this.state.clicks}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.count !== prevProps.count) {
      console.log(`Count has changed to: ${this.props.count}`);
    }

    if (this.state.clicks !== prevState.clicks) {
      console.log(`Clicks have been updated: ${this.state.clicks}`);
    }
  }

  componentWillUnmount() {
    console.log("Clear observers");
  }

  handleNameChange = (e) => {
    const name = e.target.value;

    this.setState({
      name,
    });
  };

  handleClickChange = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>Name: {this.state.name}</div>
        <div>Count: {this.props.count}</div>
        <div>Clicks: {this.state.clicks}</div>
        <button onClick={this.handleClickChange}>Increment Clicks</button>
      </div>
    );
  }
}
