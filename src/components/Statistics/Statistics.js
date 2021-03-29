function Statistic({ good, neutral, bad, total, positiveFeedBack }) {
  return (
    <>
      <p>
        <span>Good: {good}</span>
      </p>
      <p>
        <span>Neutral: {neutral}</span>
      </p>
      <p>
        <span>Bad: {bad}</span>
      </p>
      <p>
        <span>Total: {total}</span>
      </p>
      <p>
        <span>Positive Feedback: {positiveFeedBack}%</span>
      </p>
    </>
  );
}
export default Statistic;
