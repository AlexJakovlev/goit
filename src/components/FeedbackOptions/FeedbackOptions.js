function FeedbackOptions({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <>
      <button onClick={onGoodClick} type="button">
        good
      </button>
      <button onClick={onNeutralClick} type="button">
        neutral
      </button>
      <button onClick={onBadClick} type="button">
        bad
      </button>
    </>
  );
}
export default FeedbackOptions;
