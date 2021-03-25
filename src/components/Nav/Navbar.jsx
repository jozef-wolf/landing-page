import React from "react";
import styled from "styled-components";

import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #c9c9c9;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Nav bar</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
