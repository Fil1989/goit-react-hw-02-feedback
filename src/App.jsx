import { Component } from 'react';
import countcss from './styles.module.scss';
import Statistics from './components/Statistics';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  counterOfGood = () => {
    this.setState(currentState => {
      return { good: currentState.good + 1 };
    });
  };
  counterOfNeutral = () => {
    this.setState(currentState => {
      return { neutral: currentState.neutral + 1 };
    });
  };
  counterOfBad = () => {
    this.setState(currentState => {
      return { bad: currentState.bad + 1 };
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
        <h1 className={countcss.title}>PLEASE, LEAVE YOUR COMMENT</h1>
        <div className={countcss.feedback}>
          <button
            type="button"
            onClick={this.counterOfGood}
            className={countcss.is_good}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.counterOfNeutral}
            className={countcss.is_neutral}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.counterOfBad}
            className={countcss.is_bad}
          >
            Bad
          </button>
        </div>
        <h2 className={countcss.title}>STATISTICS</h2>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      </>
    );
  }
}
export default App;
