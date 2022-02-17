import React from 'react'
import LoginButton from './login_button'
import { useSelector } from 'react-redux'
import './navbar.css'
export default function NavBar() {
    const user = useSelector(state=> state.session.user)
  return (
    <div id='navbar_container'>
      <div>
        {/* <Logo></Logo> */}
      </div>
      <div id="navbar_buttons">
          {!user && <LoginButton/>}
          {/* {!user && <SignUpButton/>}
          {user && <ProfileButton/>} */}
      </div>
    </div>
  )
}
