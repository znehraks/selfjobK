import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";

const Wrapper = styled.div`
  width: ${props => props.theme.MainWidth};
  min-height: 1000vh;
`;

const FirstContainer = styled.div`
  width: 1260px;
  height: 606px;
  background-color: red;
  display: flex;
  flex-direction: row;
`;

const FCArticle1 = styled.div`
  width: 900px;
  height: 606px;
  background-color: blue;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  width: 750px;
  height: 110px;
  background-color: paleturquoise;
`;

const FCNav = styled.div`
  width: 750px;
  height: 46px;
  background-color: firebrick;
  display: flex;
  flex-direction: row;
`;

const FCNavLi = styled.div`
  width: 57px;
  height: 46px;
  margin-right: 30px;
  background-color: goldenrod;
`;

const FCNavSelect = styled.div`
  width: 57px;
  height: 46px;
  margin-left: 40px;
  :last-child {
    margin-left: 10px;
  }
  background-color: goldenrod;
`;

const FCGrid = styled.div`
  width: 750px;
  height: 400px;
  background-color: oldlace;
  display: flex;
  flex-direction: column;
`;

const FCGridRow = styled.div`
  width: 750px;
  height: 170px;
  background-color: darkblue;
`;

const FCBottom = styled.div`
  width: 750px;
  height: 40px;
  margin: 10px 0px;
  background-color: salmon;
`;

const FCArticle2 = styled.div`
  width: 230px;
  height: 606px;
  margin-left: 20px;
  background-color: magenta;
`;
const FCArticle3 = styled.div`
  width: 260px;
  height: 606px;
  margin-left: 20px;
  background-color: violet;
`;
const SecondContainer = styled.div`
  width: 1260px;
  height: 900vh;
  background-color: green;
`;

export default () => {
  return (
    <Wrapper>
      <Header />
      <FirstContainer>
        <FCArticle1>
          <Banner />
          <FCNav>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavLi></FCNavLi>
            <FCNavSelect></FCNavSelect>
            <FCNavSelect></FCNavSelect>
          </FCNav>
          <FCGrid>
            <FCGridRow></FCGridRow>
            <FCGridRow></FCGridRow>
          </FCGrid>
          <FCBottom></FCBottom>
        </FCArticle1>
        <FCArticle2></FCArticle2>
        <FCArticle3></FCArticle3>
      </FirstContainer>
      <SecondContainer></SecondContainer>
    </Wrapper>
  );
};
