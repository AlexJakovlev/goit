import { combineReducers } from "redux";
import shortid from "shortid";

const phonebook = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const phoneBook = (state = phonebook, action) => {
  // console.log(state);
  switch (action.type) {
    case "phoneBook/add":
      return [...state, { id: shortid(), ...action.payload.value }];
    case "phoneBook/dell":
      console.log(action.payload.value);
      return state.filter((contact) => {
        return contact.id !== action.payload.value;
      });
    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case "phoneBook/filter":
      return action.payload.value;
    default:
      return state;
  }
};
const alert = (state = "", action) => {
  switch (action.type) {
    case "phoneBook/alert":
      return action.payload.value;
    default:
      return state;
  }
};

export default combineReducers({
  phonebook: phoneBook,
  filter: filter,
  alert: alert,
});
