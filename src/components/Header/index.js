import React from "react";
import styles from "./index.module.scss";
import AppLogo from "./AppLogo";
import NavBar from "./NavBar";
import LogoutBtn from "./Logout-Btn";

export default () => {
  return (
    <header className={`${styles["App-header"]}`}>
      <AppLogo />
      <NavBar />
      <LogoutBtn />
    </header>
  );
};
