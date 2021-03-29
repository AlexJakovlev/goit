import styles from "./Layout.module.css";

const Layout = ({ title, children }) => {
  return (
    <div className={styles.Layout}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
export default Layout;
