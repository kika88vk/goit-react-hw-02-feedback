import css from './Counting.module.css';

export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  good,
  bad,
  neutral,
}) => {
  return (
    <div className={css.btnsContainer}>
      <button className={css.btn} type="button" onClick={onGoodClick}>
        Good {good}
      </button>
      <button className={css.btn} type="button" onClick={onNeutralClick}>
        Neutral{neutral}
      </button>
      <button className={css.btn} type="button" onClick={onBadClick}>
        Bad{bad}
      </button>
    </div>
  );
};

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className={css.btnsContainer}>
//       {options.map(option => (
//         <button
//           key={option}
//           className={css.btn}
//           type="button"
//           onClick={onLeaveFeedback}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };
