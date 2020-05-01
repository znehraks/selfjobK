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
  align-items: center;
  position: relative;
`;
const UpperBaritem = styled.div`
  flex: 1;
  position: relative;
  img {
    width: 50%;
  }
  input {
    width: 344px;
    height: 35px;
    border: 3px solid #3399ff;
  }
  :nth-child(2) {
    left: -130px;
  }
  :nth-child(3) {
    top: 2px;
    left: -133px;
    img {
      width: 37px;
      border: 3px solid #3399ff;
      background-color: #3399ff;
    }
  }
  :last-child {
    left: -380px;
    button {
      width: 100px;
      height: 42px;
      background-color: #fff;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
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
        <UpperBaritem>
          <input></input>
        </UpperBaritem>
        <UpperBaritem>
          <img src="data:image/jpeg;base64,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"></img>
        </UpperBaritem>
        <UpperBaritem>
          <button>상세보기</button>
        </UpperBaritem>
      </UpperBar>

      <Nav>
        <NavItem>메뉴</NavItem>
        <NavItem color={"#3399FF"}>채용정보</NavItem>
        <NavItem color={"#3399FF"}>신입공채</NavItem>
        <NavItem color={"#3399FF"}>헤드헌팅</NavItem>
        <NavItem color={"#000"}>TOP100</NavItem>
        <NavItem color={"#000"}>연봉</NavItem>
        <NavItem color={"#000"}>뉴스.자료</NavItem>
        <NavItem color={"#000"} flex={1}>
          커리어패스
        </NavItem>
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
