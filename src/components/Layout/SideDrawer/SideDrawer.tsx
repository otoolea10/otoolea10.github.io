import React from "react";
import { NavLink } from "react-router-dom";
import SideDrawerStyles from "./SideDrawerStyles";

//Typed properties
interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}
const SideDrawer = ({ open, closed }: SideDrawerProps) => {
  return (
    //If open is set to true then store SideDrawer is open
    //Custom styling is implemented using styled components
    <SideDrawerStyles
      className={`SideDrawer ${open ? "Open" : "Close"}`}
      onClick={closed}
    >
      {/*Display close button top right and onClick closes the side drawer */}
      <h1 onClick={closed}>X</h1>
      {/*Create Navigational List for SideDrawer menu*/}
      <nav>
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/">
              <NavLink to="/home">Home &gt</NavLink>
            </NavLink>
          </li>
          {/*When Films is clicked redirect to the Films page */}
          <li>
            <NavLink to="/products">
              <NavLink to="/products">Products &gt</NavLink>
            </NavLink>
          </li>
          {/*When Subscribe is clicked redirect to the Subscribe page */}
          <li>
            <NavLink to="/about-us">
              <NavLink to="/about-us">About Us &gt</NavLink>
            </NavLink>
          </li>
          {/*If the user is an admin then the Users link will be displayed. If clicked it will re-direct to the Users page */}
        </ul>
      </nav>
    </SideDrawerStyles>
  );
};

export default SideDrawer;
