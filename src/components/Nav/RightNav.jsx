import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
  }
  @media (min-width: 768px) {
    li:last-child,
    li:nth-child(4) {
      background-color: white;

      border-radius: 30px;
      border: none;
      padding: 10px;
      border: 2px solid #000000;
    }
    li:last-child {
      background-color: #000000;
      color: white;
      margin-left: 10px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default RightNav;
