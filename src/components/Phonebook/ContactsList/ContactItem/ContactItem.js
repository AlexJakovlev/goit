import styles from "./ContactItem.module.css";
import phoneBookActions from "../../../../redux/phoneBookActions";
import { connect } from "react-redux";

function ContacItem({ item, dell }) {
  console.log(dell, " Contact.item");
  return (
    <>
      <span className={styles.name}>{item.name}:</span>
      <span className={styles.tellnumber}>{item.number}</span>
      <div
        className={styles.delete}
        type="button"
        data-id={item.id}
        onClick={(e) => dell(e.target.dataset.id)}
      ></div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToprops = (dispatch) => {
  return {
    dell: (e) => dispatch(phoneBookActions.dell(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(ContacItem);
