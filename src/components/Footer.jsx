import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 0 10px;
`;

const Footer = () => {
  return <Foot>{/* <div>© Józef Wolf</div> */}</Foot>;
};

export default Footer;
