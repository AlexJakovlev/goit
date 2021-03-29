function FeedbackOptions({ onClick }) {
  return (
    <>
      <button onClick={onClick} type="button" data-type="good">
        good
      </button>
      <button onClick={onClick} type="button" data-type="neutral">
        neutral
      </button>
      <button onClick={onClick} type="button" data-type="bad">
        bad
      </button>
    </>
  );
}
export default FeedbackOptions;
