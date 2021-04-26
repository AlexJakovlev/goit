import styles from "../ContactForm/ContactForm.module.css";

function Filter({ onChange }) {
  return (
    <form className={styles.form}>
      <label>
        Find contact by name
        <input
          onChange={onChange}
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
export default Filter;
