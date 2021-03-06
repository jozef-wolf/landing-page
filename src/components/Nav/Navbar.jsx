import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { IoTriangle } from "react-icons/io5";

const Nav = styled.nav`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #c9c9c9;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 30;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <IoTriangle />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
