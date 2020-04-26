import React from "react";
import styled from "styled-components";
import Main from "./Main";

const LeftBox = styled.div`
  background-color: brown;
  position: absolute;
  top: 162px;
  width: 160px;
  height: 606px;
  margin: 0 auto;
`;
const CenterBox = styled.div`
  width: 70%;
  margin: 0 175px;
`;
const RightBox = styled.div`
  background-color: orange;
  position: fixed;
  top: 162px;
  left: 1444px;
  width: 160px;
  height: 606px;
  margin: 0 auto;
`;

export default () => {
  return (
    <>
      <LeftBox></LeftBox>
      <CenterBox>
        <Main />
      </CenterBox>
      <RightBox></RightBox>
    </>
  );
};
