import React, {Component} from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  increGood = ()=> {
    this.setState({good: this.state.good + 1})
  }

  increNeutral = ()=> {
    this.setState({neutral: this.state.neutral + 1})
  }

  increBad = ()=> {
    this.setState({bad: this.state.bad + 1})
  }

  countTotalFeedback = ()=> {
    let reviews = this.state.good + this.state.neutral + this.state.bad;
    return reviews;
  }

  countPositiveFeedbackPercentage = ()=> {
    let positiveReviews = (this.state.good / this.countTotalFeedback())*100;
    return Math.round(positiveReviews);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.increGood}>Good</button>
          <button onClick={this.increNeutral}>Neutral</button>
          <button onClick={this.increBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    )
  }
};
