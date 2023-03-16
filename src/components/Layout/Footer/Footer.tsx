import React from "react";
import { NavLink } from "react-router-dom";
import FooterStyles from "./FooterStyles";
import Logo from "../../Logo/Logo";

const Footer = () => {
  return (
    <FooterStyles>
      <nav className="Footer">
        <Logo className="footer-logo" />
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/home">
              {" "}
              <NavLink to="/home">Home</NavLink>
            </NavLink>
          </li>
          <li>
            {/*When Products is clicked redirect to the Products page */}
            <NavLink to="/products">
              <NavLink to="/products">Products</NavLink>
            </NavLink>
          </li>
          <li>
            {/*When Blog is clicked redirect to the Blog page */}
            <NavLink to="/about">
              <NavLink to="/about">About Us</NavLink>
            </NavLink>
          </li>
        </ul>
      </nav>
    </FooterStyles>
  );
};
export default Footer;
