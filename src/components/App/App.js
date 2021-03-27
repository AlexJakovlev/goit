import Profile from "./Social_profile";
import Friend from "./Friend_list";
import Statistics from "./Statistica";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <h1 className={styles.title}>hello react </h1>
      <Profile />
      <Friend />
      <Statistics title={"Upload stats"} />
      <Statistics />
      <TransactionHistory />
    </>
  );
}

export default App;
