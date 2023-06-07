import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  increGoog = ()=> {
    this.setState({good: this.state.good + 1});
  }

  increNeutral = ()=> {
    this.setState({neutral: this.state.neutral + 1});
  }

  increBad = ()=> {
    this.setState({bad: this.state.bad + 1});
  }
  countTotalFeedback = ()=> {
    let reviews = this.state.good + this.state.neutral + this.state.bad;
    return reviews;
  }

  countPositiveFeedbackPercentage = ()=> {
    let positiveReviews = (this.state.good / this.countTotalFeedback()) *100;
    return Math.round(positiveReviews);
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Section title={'Please leave feedback'}>
          <div style={{ display: 'flex', gap: '15px'}}>
            <FeedbackOptions options={this.increGoog} onLeaveFeedback={'Good'}/>
            <FeedbackOptions options={this.increNeutral} onLeaveFeedback={'Neutral'}/>
            <FeedbackOptions options={this.increBad} onLeaveFeedback={'Bad'}/>
          </div>

          {this.countTotalFeedback() > 0 && <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            poPercentage={this.countPositiveFeedbackPercentage()}
          />}
          {this.countTotalFeedback() === 0 && (<Notification message= 'There is no feedback'/>)}

        </Section>
      </div>
    )
  }
};
