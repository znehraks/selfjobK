import React from "react";
import styled from "styled-components";
import Main from "./Main";

const LeftBox = styled.div`
  background-color: #E8ECEF;
  position: absolute;
  top: 162px;
  width: 160px;
  height: 640px;
  margin: 0 auto;
  img {
    margin-top: 20px;
    width: 100%;
  }
`;
const CenterBox = styled.div`
  width: 70%;
  margin: 0 175px;
  background-color: #E8ECEF;
`;
const RightBox = styled.div`
  background-color: #E8ECEF;
  top: 162px;
  left: 1444px;
  width: 160px;
  height: 606px;
  margin: 0 auto;
`;

export default () => {
  return (
    <>
      <LeftBox><img src="https://img.jobkorea.co.kr/images/JK_Bnnr/TimeBoard/bann_190x250.jpg"></img>
      </LeftBox>
      <CenterBox>
        <Main />
      </CenterBox>
      <RightBox></RightBox>
    </>
  );
};
