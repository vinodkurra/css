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
  let names = [
    "apple",
    "cat",
    "bat",
    "dog",
    "eat",
    "fat",
    "goat",
    "hulk",
    "irqonman",
    "knife",
    "looser",
    "mern",
    "node",
    "oops",
    "python",
    "query",
    "yeact",
    "socket",
    "url",
    "vuejs",
    "winning",
    "xerox",
    "yindex",
    "zindex",
  ];

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
