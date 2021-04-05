import fbcss from './feedback.module.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={fbcss.feedback}>
      <button
        type="button"
        onClick={() => onLeaveFeedback('good')}
        className={fbcss.is_good}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
        className={fbcss.is_neutral}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback('bad')}
        className={fbcss.is_bad}
      >
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
