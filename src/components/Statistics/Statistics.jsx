import { Component } from "react";

export class Statistics extends Component {
  render() {
    const {good, neutral, bad, total, poPercentage} = this.props;
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {poPercentage}%</p>
      </div>
    );
  }
}
