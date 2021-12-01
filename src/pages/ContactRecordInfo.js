import React from "react";
import styles from "./ContactRecordInfo.module.scss";
import {
  Header,
  UserInfoCard,
  SideBar,
  DataCard,
  Footer,
} from "components/index.js";

export default () => {
  return (
    <div className={`${styles["App"]}`}>
      <Header />
      <UserInfoCard />
      <section className={`${styles["App-section"]}`}>
        <div className={`${styles["App-container"]}`}>
          <SideBar />
          <DataCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};
