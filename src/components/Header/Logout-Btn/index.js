import React from "react";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={`${styles["App-logout"]}`}>
      <button className={`${styles["logout-btn"]}`} type="button">
        Log Out
      </button>
    </div>
  );
};
