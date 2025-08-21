// CSS Stylesheets
import "../Styles/appStyles.css";
import styles from "../Styles/appStyles.module.css";

// const heading = {
//   border: "1px solid crimson",
//   textDecoration: "underline",
// };

const InLine = () => {
  return (
    <div className="">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
};

export default InLine;
