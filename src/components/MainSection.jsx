import React from "react";
import styled from "styled-components";

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
    border: 1px solid black;
  }
`;

const MainSection = () => {
  return (
    <Main>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Main>
  );
};

export default MainSection;
