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

  // let filterWith = (word) => {
  //   let get = [];
  //   let filtered = names.filter((x) => {
  //     var str = word;
  //     let values;
  //     if (str && str !== "") {
  //       Array.from(str).map(() => {
  //         let isExist = x.toLowerCase().includes(str.toLowerCase());

  //         if (isExist) {
  //           get.push(x);
  //         } else {
  //           str = str.slice(0, -1);
  //         }
  //       });
  //     }
  //   });
  // };

  const workFilter = (string, withIncludes) => {
    let word = string;
    let returningList = [];
    let data;
    names.filter((x) => {
      if (withIncludes) {
        data = x.toLowerCase().includes(word.toLowerCase());
      } else {
        data = x.toLowerCase().startsWith(word.toLowerCase());
      }
      if (data) {
        returningList.push(x);
        // names.names = names.filter((e) => e !== x);
      }
    });
  };

  const filterWith = (str, method) => {
    let word = str;
    let list = [];
    if (word !== "") {
      names.filter((x) => {
        let data;
        if (method) {
          data = x.toLowerCase().includes(word.toLowerCase());
        } else {
          data = x.toLowerCase().startsWith(word.toLowerCase());
        }
        if (data) {
          list.push(x);
          names = names.filter((e) => e !== x);
        }
      });
    }

    debugger;
    if (list?.length === 0) {
      if (word === "") {
        filterWith(str, true);
      } else {
        filterWith(word.slice(0, -1));
      }
    } else return list;

    console.log("GGGGGGGGGGG", list);
    // if (list.length > 0) {
    //   return [...new Set(list)];
    // } else {
    //   filterWith(word, "includes");
    // }

    // return [...new Set(list)];
    //  return list;
  };
  let result = filterWith("rq");
  console.log("HHHHHHH", result);

  // let data = [
  //   "Xanthus Sykes",
  //   "Catn Chavez",
  //   "Illiana Ware",
  //   "eronica Giles",
  //   "Philip Rivera",
  //   "Patience Green",
  //   "Uma Noble",
  //   "CherGstopher Hugheis",
  //   "Zeph Boone",
  //   "Kevin Farrell",
  //   "Clare Cross",
  //   "Melinda Nicholson",
  //   "Uma Noble",
  //   "Christopher Hughes",
  //   "Zeph Boone",
  //   "Kevin Farrell",
  //   "Claere Cross",
  //   "Melinda Nicholson",
  //   "Ali Warner",
  //   "Nyssa Conley",
  //   "Arthur Monroe",
  //   "Daniel Alvarado",
  //   "Denton Rivas",
  //   "Ariel Hartman",
  //   "Candice Small",
  //   "Galena Pace",
  //   "Kermit Dickson",
  //   "Denise Rich",
  //   "Piper Bolton",
  //   "Molly Noble",
  // ];

  // const callMe = (input) => {
  //   debugger;
  //   let value = data.filter((item) => {
  //     let selected = Array.from(input).filter((each) => {
  //       if (item.toUpperCase().match(input.toUpperCase())) {
  //         return item;
  //       } else {
  //         input = input.slice(0, -1);
  //       }
  //     });
  //     return selected;
  //   });
  //   console.log("JJJJ", value);
  //   return value;
  // };
  // np;
  // callMe("car");
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
