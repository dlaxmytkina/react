import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item }>
        <NavLink to="/profile" activeClassName={c.activeLink}> Profile</NavLink>
      </div>
      <div className={c.item} >
        <NavLink to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink>
      </div>
      <div className={c.item} >
        <NavLink to="/users" activeClassName={c.activeLink}>Users</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="#" >News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="#" >Music</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="#"  v>Settings</NavLink>
      </div>
    </nav>
  )
}
export default Navbar;