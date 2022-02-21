import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAffirmations } from "../../store/affirmations";
import MainPageBg from "./main_page_bg";
import { getRandomAffirmation } from "../../store/affirmations";
import PhotoCard from "./photo_card";
import TextCard from "./text_card";

import "./main_page.css";
export default function MainPage() {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.session.user);
  const randomAffirmation = useSelector((state) => state.affirmations.random);

  useEffect(() => {
    dispatch(getAllAffirmations());
    dispatch(getRandomAffirmation());
  }, []);

  return (
    <div id="main_page_container">
      <div>
        {randomAffirmation.image_url === "" ? (
          <TextCard randomAffirmation={randomAffirmation} />
        ) : (
          <PhotoCard
            randomAffirmation={randomAffirmation}
            sx={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 10,
            }}
          />
        )}
        <button>Create New Affirmation</button>
      </div>

        <MainPageBg id="main_page_bg" />
    </div>
  );
}
