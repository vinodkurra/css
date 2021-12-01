import React from "react";
import styles from "./contactList.module.scss";
import Logo from "../ui/icons/logo";
import Home from "../ui/icons/home";
import Settings from "../ui/icons/settings";
import UserAvatar from "../ui/icons/userAvatar";
import Scope from "../ui/icons/scope";
import Plans from "../ui/icons/plans";
import Add from "../ui/icons/add";
import Calendar from "ui/icons/calendar";
export default () => {
  return (
    <div className={`${styles["App"]}`}>
      <header className={`${styles["App-header"]}`}>
        <div className={`${styles["App-logo"]}`}>
          <Logo />
        </div>
        <div className={`${styles["navbar"]}`}>
          <nav className={`${styles["stroke"]}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Users</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles["App-logout"]}`}>
          <button className={`${styles["logout-btn"]}`} type="button">
            Log Out
          </button>
        </div>
      </header>
      <div className={`${styles["App-userinfo-container"]}`}>
        <div className={`${styles["user-name"]}`}>
          <div className={`${styles["name"]}`}>Victoria Garcia</div>
        </div>
      </div>
      <section className={`${styles["App-section"]}`}>
        <div className={`${styles["App-container"]}`}>
          <div className={`${styles["container-header"]}`}>
            <div className={`${styles["search"]}`}></div>
            <div className={`${styles["actions"]}`}>
              <div className={`${styles["table-view-toggle"]}`}></div>
              <div className={`${styles["sort"]}`}></div>
              <div className={`${styles["filters"]}`}></div>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>12345</th>
                  <th>12345</th>
                  <th>12345</th>
                  <th>12345</th>
                  <th>12345</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>aaa</td>
                  <td>aaa</td>
                  <td>aaa</td>
                  <td>aaa</td>
                  <td>aaa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className={`${styles["App-footer"]}`}>Copy rights 2022...</div>
    </div>
  );
};
