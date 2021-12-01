import React from "react";
import styles from "./index.module.scss";
import Add from "ui/icons/add";
import Calendar from "ui/icons/calendar";

export default () => {
  return (
    <div className={`${styles["App-card"]}`}>
      <div className={`${styles["card-header"]}`}>
        <div className={`${styles["header-title"]}`}>Reminders</div>
        <div className={`${styles["header-btn"]}`}>
          <button type="button" className={`${styles["icon-btn"]}`}>
            <Add />
            <div className={`${styles["btn-name"]}`}>Add New</div>
          </button>
        </div>
      </div>
      <div className={`${styles["card-body"]}`}>
        {[1, 2, 3, 4, 5].map((item, i) => {
          return (
            <div className={`${styles["card-item"]}`} key={`card-${i}`}>
              <div className={`${styles["date-time"]}`}>
                <div className={`${styles["date"]}`}>
                  <Calendar /> <span> 03/02 </span>{" "}
                </div>

                <div className={`${styles["time"]}`}>
                  Last Updated 03/04/2021 1:24 PM EST
                </div>
              </div>
              <div className={`${styles["description"]}`}>
                <div className={`${styles["note"]}`}>
                  8 Days Overdue
                  <p>Call and ask about quote on Tuesday between 11-2 EST.</p>
                </div>
                <div className={`${styles["btn-complete"]}`}>
                  <button
                    type="button"
                    className={`${styles["btn-secondary"]}`}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
