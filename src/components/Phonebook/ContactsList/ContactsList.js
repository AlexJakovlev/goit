import { TransitionGroup, CSSTransition } from "react-transition-group";

import ContactItem from "./ContactItem/ContactItem";
import "./ContactList.css";

function ContactsList({ visibleContacts, onHandleDelete }) {
  return (
    <TransitionGroup component="ul" className={"ContactsList"}>
      {visibleContacts.map((item) => {
        return (
          <CSSTransition key={item.id} timeout={250} classNames="itemFade">
            <li className="item">
              <ContactItem item={item} HandleDelete={onHandleDelete} />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default ContactsList;
