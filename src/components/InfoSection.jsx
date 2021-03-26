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
  }
`;

const InfoSection = () => {
  return (
    <Info>
      <div>
        <IoCameraOutline />
      </div>
      <div>
        <RiCameraLensLine />
      </div>
      <div>
        <BsHouseDoor />
      </div>
    </Info>
  );
};

export default InfoSection;
