import { createStore, combineReducers } from "redux";
import phoneBookReducer from "./phoneBookReducer";
// import CalcReducer from "./CalcReducer";
// const reducer = (state = {}, action) => state;

// {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   }

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  //   timerValue /*свойство на стайте*/: timerReducer,
  //   calcData: CalcReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
