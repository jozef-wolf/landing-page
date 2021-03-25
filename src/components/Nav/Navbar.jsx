import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 20px 10px;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Nav bar</div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </Nav>
  );
};

export default Navbar;
