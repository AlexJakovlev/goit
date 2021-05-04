import { TransitionGroup, CSSTransition } from "react-transition-group";
// import phoneBookActions from "../../../redux/phoneBookActions";
import { connect } from "react-redux";
import ContactItem from "./ContactItem/ContactItem";
import "./ContactList.css";

function filterCintact(visibleContacts, fil) {
  return visibleContacts.filter((contact) =>
    contact.name.toLowerCase().includes(fil.toLowerCase())
  );
}

function ContactsList({ visibleContacts, fil }) {
  // console.log(visibleContacts);

  return (
    <TransitionGroup component="ul" className={"ContactsList"}>
      {filterCintact(visibleContacts, fil).map((item) => {
        return (
          <CSSTransition key={item.id} timeout={250} classNames="itemFade">
            <li className="item">
              <ContactItem item={item} />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
const mapStateToProps = (state) => {
  return {
    visibleContacts: state.contacts.phonebook,
    fil: state.contacts.filter,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToprops)(ContactsList);
