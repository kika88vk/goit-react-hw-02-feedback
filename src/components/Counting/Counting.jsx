import React, { Component } from 'react';
import css from './Counting.module.css';
import { Controls } from './Controls';
import { FeedbackCount } from './FeedbackCount';
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

  countTotalFeedback = ({ good, neutral, bad }) => {
    console.log(good + neutral + bad);
  };
  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <h1 className={css.heading}>Please leave feedback</h1>
        <Controls
          onGoodClick={this.handleGoodClick}
          onNeutralClick={this.handleNeutralClick}
          onBadClick={this.handleBadClick}
          good={good}
          neutral={neutral}
          bad={bad}
        />
        <h2 className={css.statistics}>Statistics</h2>
        <FeedbackCount
          countGood={this.state.good}
          countNeutral={this.state.neutral}
          countBad={this.state.bad}
        />
        <ul className={css.list}>
          <li className={css.item}>Total: {this.countTotalFeedback}</li>
          <li className={css.item}>Positive feedback: </li>
        </ul>
      </div>
    );
  }
}

export default CountFeedback;
