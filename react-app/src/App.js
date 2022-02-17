import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import NavBar from "./components/navbar";



function App() {
  const user = useSelector(state=> state.session.user)



  return(

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' exact={true}>
            {/* {user ?  <MainPage/>:<LandingPage/>} */}
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
