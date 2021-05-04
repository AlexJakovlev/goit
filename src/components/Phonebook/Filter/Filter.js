import styles from "../ContactForm/ContactForm.module.css";
import phoneBookActions from "../../../redux/phoneBookActions";
import { connect } from "react-redux";

function Filter({ onChange, filter }) {
  return (
    <form className={styles.form}>
      <label>
        Find contact by name
        <input
          onChange={(e) => filter(e.target.value)}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToprops = (dispatch) => {
  return {
    filter: (e) => dispatch(phoneBookActions.filter(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Filter);
