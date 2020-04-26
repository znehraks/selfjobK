import React from "react";
import styled from "styled-components";
import logo from "./imgs/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 154px;
  margin: 0 auto;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const UpperBar = styled.div`
  width: 1260px;
  height: 102px;
  background-color: #eee;
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
  height: 51px;
  background-color: #888;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div`
  flex: 1;
`;

export default () => {
  return (
    <Wrapper>
      <UpperBar>
        <UpperBaritem><img src={logo}/></UpperBaritem>
        <UpperBaritem>검색창</UpperBaritem>
        <UpperBaritem>검색버튼</UpperBaritem>
        <UpperBaritem>상세보기버튼</UpperBaritem>
      </UpperBar>

      <Nav>
        <NavItem>햄버거</NavItem>
        <NavItem>2</NavItem>
        <NavItem>3</NavItem>
        <NavItem>4</NavItem>
        <NavItem>5</NavItem>
        <NavItem>6</NavItem>
        <NavItem>7</NavItem>
        <NavItem>8</NavItem>
      </Nav>
    </Wrapper>
  );
};
