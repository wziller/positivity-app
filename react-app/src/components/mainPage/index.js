import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_affirmations } from "../../store/affirmations";
import MainPageBg from "./main_page_bg";

import "./main_page.css";
export default function MainPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(get_all_affirmations(user.id));
  }, []);

  return (
    <div>
      <MainPageBg id="main_page" />
    </div>
  );
}
