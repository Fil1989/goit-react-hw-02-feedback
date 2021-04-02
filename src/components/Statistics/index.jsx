import statcss from './stats.module.scss';
import Notification from '../Notification';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return good === 0 && neutral === 0 && bad === 0 ? (
    <Notification message="No feedback given" />
  ) : (
    <div>
      <ul className={statcss.results}>
        <li className={statcss.result}>Good: {good}</li>
        <li className={statcss.result}>Neutral: {neutral}</li>
        <li className={statcss.result}>Bad: {bad}</li>
        <li className={statcss.result}>Total: {total}</li>
        <li className={statcss.result}>
          Positive feedback: {positiveFeedback}
        </li>
      </ul>
    </div>
  );
};
export default Statistics;
