import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navbar";
import { useEffect, useState } from "react";
import { authenticate } from "./store/session";
import LandingPage from "./components/landingPage";
import MainPage from "./components/mainPage";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded){
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={user ? <MainPage /> : <LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
