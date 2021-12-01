import React from "react";
import styles from "./index.module.scss";
import Home from "ui/icons/home";
import Settings from "ui/icons/settings";
import UserAvatar from "ui/icons/userAvatar";
import Scope from "ui/icons/scope";
import Plans from "ui/icons/plans";

export default () => {
  return (
    <div className={`${styles["App-sidebar"]}`}>
      <ul>
        <li>
          <Home />
          <span> Overview </span>
        </li>
        <li>
          <UserAvatar />
          <span> Details</span>
        </li>
        <li>
          <Plans />
          <span> Plan</span>
        </li>
        <li>
          <Scope />
          <span>Scope of Appointment</span>
        </li>
        <li>
          <Settings />
          <span>Preferences</span>
        </li>
      </ul>
    </div>
  );
};
