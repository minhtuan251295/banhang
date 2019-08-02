import React from "react";
import "../style/header.css";

//Stateless : functional component
// function Header() {
//   return (
//     <div>
//       Header
//     </div>
//   )
// }

const Header = () => {
  return (
    //JSX
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/* Brand */}
      <a className="navbar-brand" href="#abc">Logo</a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#abc">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#abc">Link 2</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#abc" id="navbardrop" data-toggle="dropdown">
            Dropdown link
      </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#abc">Link 1</a>
            <a className="dropdown-item" href="#abc">Link 2</a>
            <a className="dropdown-item" href="#abc">Link 3</a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Header;