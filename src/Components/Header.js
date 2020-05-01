import React from "react";
import styled from "styled-components";
import logo from "./imgs/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 154px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const UpperBar = styled.div`
  width: 1260px;
  height: 102px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const UpperBaritem = styled.div`
  flex: 1;
`;

const Nav = styled.div`
  width: 1260px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 15px;
  color: ${(props) => props.color};
  font-weight: 800;
  font-size: 14px;
  flex: ${(props) => props.flex};
  text-align: center;
  :hover {
    background-color: #3399ff;
    color: #fff;
  }
`;

export default () => {
  return (
    <Wrapper>
      <UpperBar>
        <UpperBaritem>
          <img src={logo} />
        </UpperBaritem>
        <UpperBaritem>검색창</UpperBaritem>
        <UpperBaritem>검색버튼</UpperBaritem>
        <UpperBaritem>상세보기버튼</UpperBaritem>
      </UpperBar>

      <Nav>
        <NavItem>햄버거</NavItem>
        <NavItem color={"#3399FF"}>채용정보</NavItem>
        <NavItem color={"#3399FF"}>신입공채</NavItem>
        <NavItem color={"#3399FF"}>헤드헌팅</NavItem>
        <NavItem color={"#000"}>TOP100</NavItem>
        <NavItem color={"#000"}>연봉</NavItem>
        <NavItem color={"#000"}>뉴스.자료</NavItem>
        <NavItem color={"#000"}flex={1}>커리어패스</NavItem>
        <NavItem color={"#000"} flex={1}>
          선배에게 질문하기
        </NavItem>
        <NavItem color={"#000"}>인재검색</NavItem>
        <NavItem color={"#000"}>종</NavItem>
        <NavItem color={"#000"}>MYpage</NavItem>
        <NavItem color={"#000"}>기업회원 홈></NavItem>
      </Nav>
    </Wrapper>
  );
};
