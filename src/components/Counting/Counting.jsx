import React, { Component } from 'react';
import css from './Counting.module.css';

class CountFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = evt => {
    console.log('event', evt);
    console.log('this.props', this.props);
    console.log('target', evt.target);
  };

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <h1 className={css.heading}>Please leave feedback</h1>
        <div className={css.btnsContainer}>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleFeedbackClick}
          >
            Good {good}
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleFeedbackClick}
          >
            Neutral{neutral}
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleFeedbackClick}
          >
            Bad{bad}
          </button>
        </div>
        <h2 className={css.statistics}>Statistics</h2>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.state.good}</li>
          <li className={css.item}>Neutral: {this.state.neutral}</li>
          <li className={css.item}>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default CountFeedback;
