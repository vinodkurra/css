import React, { useState } from "react";
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

  const filterWith = (str) => {
    return filterStartsWith(str);
  };

  const filterStartsWith = (str_starts) => {
    return names.filter((x) => x.startsWith(str_starts));
  };

  const filterIncludesWith = (str_inc) => {
    return names.filter((x) => x.includes(str_inc));
  };

  const fff = (aa) => {
    return names.filter((x) => x.startsWith(aa));
  };

  const mmm = fff("zi");
  console.log("KKKKKKKKKKKKKK", mmm);

  const [selected, setSelected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selection = (e, elm, index) => {
    if (e.ctrlKey) {
      let list = [...selected];
      let isExist = selected.findIndex((x) => x === elm);
      if (isExist > -1) {
        list.splice(isExist, 1);
        setSelected([...list]);
      } else {
        setSelected([...list, elm]);
      }
    } else if (e.shiftKey) {
      let list = [];
      if (selectedIndex && selectedIndex < index) {
        for (var i = selectedIndex; i <= index; i++) {
          list.push(names[i]);
        }
      } else if (selectedIndex > index) {
        for (var i = index; i <= selectedIndex; i++) {
          list.push(names[i]);
        }
      } else {
        for (var i = 0; i <= index; i++) {
          list.push(names[i]);
        }
      }
      setSelected([...list]);
    } else {
      setSelected([elm]);
      setSelectedIndex(index);
    }
  };

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
                  {names.map((elm, index) => {
                    return (
                      <td
                        onClick={(e) => selection(e, elm, index)}
                        className={
                          selected.includes(elm) ? `${styles["apply-bg"]}` : ""
                        }
                      >
                        {elm}
                      </td>
                    );
                  })}
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
