import css from './Counting.module.css';
import PropTypes from 'prop-types';

export const FeedbackCount = ({ countGood, countNeutral, countBad }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {countGood}</li>
      <li className={css.item}>Neutral: {countNeutral}</li>
      <li className={css.item}>Bad: {countBad}</li>
    </ul>
  );
};

FeedbackCount.propTypes = {
  countGood: PropTypes.number.isRequired,
  countNeutral: PropTypes.number.isRequired,
  countBad: PropTypes.number.isRequired,
};
