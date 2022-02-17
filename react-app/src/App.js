import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navbar";
import { useEffect, useState } from "react";
import { authenticate } from "./store/session";

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
        <Route path="/" exact={true}>
          {/* {user ?  <MainPage/>:<LandingPage/>} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
