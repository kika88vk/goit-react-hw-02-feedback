import React, { Component } from 'react';
import css from './Counting.module.css';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import PropTypes from 'prop-types';

class CountFeedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBadClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total > 0) {
      return total;
    }
    return 0;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good * 100) / total;

    if (good > 0) {
      console.log(percentage);
      return Math.round(percentage);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGoodClick={this.handleGoodClick}
            onNeutralClick={this.handleNeutralClick}
            onBadClick={this.handleBadClick}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default CountFeedback;
