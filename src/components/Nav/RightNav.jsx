import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 20px 10px;
  }
`;

const RightNav = () => {
  return (
    <Ul>
      <li>Home</li>
      <li>About us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default RightNav;
