import React from "react";
import styles from "./index.module.scss";

export default () => {
  return (
    <div className={`${styles["App-userinfo-container"]}`}>
      <div className={`${styles["userinfo-card"]}`}>
        <div className={`${styles["user-name"]}`}>
          <div className={`${styles["name"]}`}>Victoria Garcia</div>
          <div className={`${styles["created-date"]}`}>
            Client | Last updated 02/04/2021
          </div>
        </div>
        <div className={`${styles["user-details"]}`}>
          <div className={`${styles["details"]}`}>
            <div className={`${styles["detail-one"]}`}>Name</div>
            <div className={`${styles["detail-two"]}`}> victoria garcia</div>
          </div>
          <div className={`${styles["details"]}`}>
            <div className={`${styles["detail-one"]}`}>Email (Primary)</div>
            <div className={`${styles["detail-two"]}`}>
              victoriagarcia_12345@email.com
            </div>
          </div>
          <div className={`${styles["details"]}`}>
            <div className={`${styles["detail-one"]}`}>Phone</div>
            <div className={`${styles["detail-two"]}`}>(890) 567-1234</div>
          </div>
          <div className={`${styles["details"]}`}>
            <div className={`${styles["detail-one"]}`}>Address</div>
            <div className={`${styles["detail-two"]}`}>
              123 Kingsland Avenue, 3R Brooklyn, NY 11222
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
