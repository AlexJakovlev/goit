import transactions from "../../../dataJSON/transactions.json";
import styles from "./TransactionHistory.module.css";
import Headt from "./Table/head/head";
import Bodyt from "./Table/body/body";

function TransactionHistory() {
  return (
    <>
      <h2 className={styles.title}>Statistica</h2>
      <table className={styles[`transaction-history`]}>
        <Headt column1="Type" column2="Amount" column3="Currency" />
        <Bodyt transactions={transactions} />
      </table>
    </>
  );
}

export default TransactionHistory;
