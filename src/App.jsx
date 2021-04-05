import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  counter = key => {
    this.setState(currentState => {
      return { [key]: currentState[key] + 1 };
    });
  };

  countTotalFeedback(a, b, c) {
    return a + b + c;
  }
  countPositiveFeedbackPercentage(a, b, c) {
    const part = (a / (a + b + c)) * 100;
    return part.toFixed(0) + '%';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );
    return (
      <>
        <Section title={'PLEASE, LEAVE YOUR COMMENT'}>
          <FeedbackOptions onLeaveFeedback={this.counter} />
        </Section>
        <Section title={'STATISTICS'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}
export default App;
