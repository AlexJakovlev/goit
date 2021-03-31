import styles from "./ContactForm.module.css";
function ContactForm({ onSubmit, onChange }) {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label>
          Name
          <input
            onChange={onChange}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={onChange}
            type="tel"
            name="number"
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
}

export default ContactForm;
