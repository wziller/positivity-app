import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextCard from "./text_card";
import AffirmationBgMasonry from "./affirmation_bg_masonry";

//MUI Masonry Imports

export default function MainPageBg() {
  const affirmations  = useSelector((state) => state.affirmations.all);
  // let [displayElements, setDisplayElements] = useState([]);
  // if (affirmations)
  //     if (affirmations.length < 20) {
  //       displayElements = affirmations;
  //     } else {
  //       let newDisplay = []
  //       for (let i = 0; i <= 20; i++) {
  //       // setInterval(() => {
  //         let randomIndex = Math.floor(
  //           Math.random() * (affirmations.length - 1 - 0 + 1)
  //         );
  //         console.log(randomIndex);
  //         let ele = affirmations[randomIndex];
  //         newDisplay.push(ele);
  //       // }, []);
  //     }
  //   }
  //   setDisplayElements(newDisplay)
  return affirmations ? (
    <div>
      <div id="main_page_bg_shadow"></div>
      <AffirmationBgMasonry affirmations={affirmations} />
    </div>
  ) : (
    <div>Loading</div>
  );
}
