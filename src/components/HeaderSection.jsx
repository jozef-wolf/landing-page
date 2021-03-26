import React from "react";
import img from "./imgs/brick.jpg";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 85vh;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  justify-content: center;
  h1 {
    color: white;
    margin-top: 15%;
    font-size: 50px;
    letter-spacing: 15px;
    font-weight: bolder;
    text-align: center;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
      text-align: left;
      padding-left: 10px;
    }
  } ;
`;

const HeaderSection = () => {
  return (
    <Box className="section">
      <h1>Welcome to the Landing Page</h1>
    </Box>
  );
};

export default HeaderSection;
