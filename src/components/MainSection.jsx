import React from "react";
import styled from "styled-components";
import birds from "./imgs/birds.jpg";
import crane from "./imgs/crane.jpg";

const Main = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
  div {
  }
  div:nth-child(1),
  div:nth-child(4) {
    display: flex;
    padding: 30px;
    align-items: center;
  }
  div:nth-child(2) {
    background-image: url(${birds});
    background-size: cover;
    opacity: 60%;
  }
  div:nth-child(3) {
    background-image: url(${crane});
    background-size: cover;
    opacity: 60%;
  }
`;

const MainSection = () => {
  return (
    <Main>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio eos,
        pariatur natus quos, incidunt rerum assumenda dolores porro blanditiis,
        magni odit atque architecto vitae! Delectus laudantium sunt unde
        debitis.
      </div>
      <div></div>
      <div></div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora
        accusantium. Quasi corporis maxime ipsam iure similique quia, expedita
        eum, iste saepe dignissimos recusandae, fuga in dolorem quae rem
        eligendi.
      </div>
    </Main>
  );
};

export default MainSection;
