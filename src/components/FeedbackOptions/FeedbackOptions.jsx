import { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback} = this.props;
    return <button onClick={options}>{onLeaveFeedback}</button>
  }
}
