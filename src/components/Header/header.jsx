import React from 'react'
import { NavLink } from 'react-router-dom';

import c from "./Header.module.css";

const Header = (props) => {
   return (
        <header className={c.header}>
        <img src="https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg"></img>
         <div className={c.loadingBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
           
            </div>      
      </header>
   );
}
export default Header;