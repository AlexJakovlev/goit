import styles from "./FeedbackOptions.module.css";

function FeedbackOptions({ onClick }) {
  return (
    <div className={styles.options}>
      <button onClick={onClick} type="button" data-type="good">
        good
      </button>
      <button onClick={onClick} type="button" data-type="neutral">
        neutral
      </button>
      <button onClick={onClick} type="button" data-type="bad">
        bad
      </button>
    </div>
  );
}
export default FeedbackOptions;
