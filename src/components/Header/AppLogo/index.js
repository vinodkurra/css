import React from "react";
import Logo from "ui/icons/logo";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={`${styles["App-logo"]}`}>
      <Logo />
    </div>
  );
};
