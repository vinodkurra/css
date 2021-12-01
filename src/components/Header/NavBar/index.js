import React from "react";
import styles from "./index.module.scss";
const href = () => {
  return false;
};
export default () => {
  return (
    <div className={`${styles["navbar"]}`}>
      <nav className={`${styles["stroke"]}`}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Users</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>More</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
