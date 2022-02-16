import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './App.css';

function App() {
  const user = useSelector(state=> state.session.user)
  return(
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact={true}>
          {user ?  <MainPage/>:<LandingPage/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
