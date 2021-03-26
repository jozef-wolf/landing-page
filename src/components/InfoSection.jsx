import React from "react";
import styled from "styled-components";
import { IoCameraOutline } from "react-icons/io5";
import { RiCameraLensLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";

const Info = styled.div`
  background-color: #e4e4e4;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    font-size: 170px;
    text-align: center;
  }
  p {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      font-size: 100px;
    }
  }
`;

const InfoSection = () => {
  return (
    <Info>
      <div>
        <IoCameraOutline />
        <p>lorem picsum</p>
      </div>
      <div>
        <RiCameraLensLine />
        <p>picsum iksum</p>
      </div>
      <div>
        <BsHouseDoor />
        <p>fiksum diksum</p>
      </div>
    </Info>
  );
};

export default InfoSection;
