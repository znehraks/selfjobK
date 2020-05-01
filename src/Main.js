import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import button from "./Components/imgs/jobkoreabutton.png";

const Wrapper = styled.div`
  width: ${(props) => props.theme.MainWidth};
  min-height: 1000vh;
  background-color: #fff;
`;

const FirstContainer = styled.div`
  width: 1260px;
  height: 640px;
  background-color: #e8ecef;
  display: flex;
  flex-direction: column;
`;

const ArticleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 1260px;
  height: 580px;
  background-color: #e8ecef;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 1260px;
  height: 60px;
  background-color: #e8ecef;
`;

const FCBottom = styled.div`
  width: 1260px;
  height: 60px;
  margin: 0px 0px 5px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

const FCBottomContent = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
`;

const FCArticle1 = styled.div`
  width: 900px;
  height: 640px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  width: 750px;
  height: 110px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url("https://apple.contentsfeed.com/RealMedia/ads/Creatives/jobkorea/200427_skhyfive_mb/200427_skhyfive_752x110_02_a.jpg");
`;

const FCNav = styled.div`
  width: 748px;
  height: 46px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  position: relative;
  left: 1px;
`;

const FCNavLi = styled.div`
  width: 57px;
  height: 43px;
  font-size: 13px;
  color: #3399ff;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #fff;
  cursor: pointer;
  :hover {
    color: #3399ff;
    border-bottom: 7px solid #3399ff;
  }
  :active {
    color: #3399ff;
    border-bottom: 7px solid #3399ff;
  }
`;

const FCNavSelect = styled.div`
  width: 57px;
  height: 46px;
  margin-left: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  cursor: pointer;
  font-size: 12px;
  :last-child {
    margin-left: 10px;
  }
  :active {
    background-color: #3399ff;
  }
  background-color: #fff;
`;

const FCGrid = styled.div`
  width: 750px;
  height: 358px;
  display: flex;
  flex-direction: column;
`;

const FCGridRow = styled.div`
  width: 750px;
  height: 160px;
  :last-child {
    margin-top: 0px;
  }
  display: flex;
  flex-direction: row;
`;

const FCGridColumn = styled.div`
  width: 25%;
  height: 100%;
  padding: 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`;

const FCGridColumnImgContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FCGridColumnSpanContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FCGridColumnSpan = styled.span`
  color: #000;
  font-size: 12px;
`;

const FCGridColumnCompanyName = styled.span`
  color: #000;
  font-size: 11px;
  text-align: left;
`;

const FCGridBottom = styled.div`
  width: 748px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  position: relative;
  left: 1px;
`;

const FCGridBottomContent = styled.div`
  width: 50px;
  height: 30px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8ecef;
  margin: 8px 10px;
  :last-child {
    position: absolute;
    background-color: #e8ecef;
    right: 0;
  }
  :hover {
    background-color: #3399ff;
    color: #fff;
  }
`;

const FCArticle2 = styled.div`
  width: 230px;
  height: 606px;
  margin-left: 20px;
  background-color: #e8ecef;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 230px;
  height: 110px;
  margin: 20px 0px;
`;

const LeftButton = styled.div``;
const RightButton = styled.div``;

const RankContainer = styled.div`
  width: 230px;
  height: 400px;
`;

const RankHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  font-weight: 800;
  background-color: #fff;
  align-items: center;
  width: 230px;
  height: 50px;
`;

const RankTitle = styled.div`
  margin: 0 60px 0px 20px;
`;

const Current = styled.div`
  margin-right: 5px;
`;
const LeftArrow = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.2);
  padding: 3px 4px;
`;
const RightArrow = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.2);
  padding: 3px 4px;
`;

const Rank = styled.div`
  width: 230px;
  height: 362px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const RankList = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;

const RankListSpan = styled.span`
  flex: 1;
  font-size: 12px;
  font-weight: 600;
`;

const RankListChange = styled.span`
  margin: 0px 20px 0px 40px;
`;

const More = styled.div``;

const FCArticle3 = styled.div`
  width: 200px;
  height: 606px;
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  display: flex;
  width: 200px;
  height: 110px;
  margin: 20px 0px;
  flex-direction: column;
  background-color: #f8f9fb;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 18px 7px;
`;

const NameSpan = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

const LinkSpan = styled.div`
  font-size: 10px;
  cursor: pointer;
  margin-top: 5px;

  color: #3399ff;
`;

const AuthButton = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px 10px;
  padding: 3px;
  text-align: center;
  font-size: 10px;
`;

const ProfileNav = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const ProfileNavContent = styled.div`
  flex: 1;
  font-size: 8px;
  padding: 10px 2px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  text-align: center;
`;

const ProfileGraph = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 220px;
  cursor: pointer;
  img {
    margin-top: 10px;
    margin-left: 3px;
    width: 90%;
    height: 30%;
  }
  span {
    font-size: 10px;
    margin-left: 3px;
  }
`;

const ProfileGraphContentRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const ProfileGraphContentColumn = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 185px;
  margin-top: 5px;
  background-color: #fff;
`;

const SecondContainer = styled.div`
  width: 1260px;
  height: 800vh;
  margin-top: 40px;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const SecondContainerDistruct = styled.div`
  width: 1260px;
  height: 1759px;
  background-color: navajowhite;
  margin-bottom: 40px;
`;

const SecondContainerBanner = styled.div`
  width: 1260px;
  height: 60px;
  background-color: #fff;
`;

const SecondContainerTitle = styled.div`
  width: 1260px;
  height: 50px;
  font-weight: 500;
  font-size: 16px;
  background-color: #fff;
`;

const SCGrid = styled.div`
  width: 1260px;
  height: 1750px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const SCGridRow = styled.div`
  width: 1260px;
  height: 15%;
  :first-child {
    margin-top: 20px;
  }
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

const SCGridColumn = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #3399ff;
  display: flex;
  flex-direction: column;
`;

const SCGridImgBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px 0px;
`;
const SCGridSpanBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
`;
const CompanyName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 17px;
  font-weight: 800;
`;
const SCGridSpanBottom = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DueDate = styled.div`
  color: rgba(0,0,0,0.4);
  font-size: 12px;
`;

const Star = styled.div``;

export default () => {
  return (
    <Wrapper>
      <Header />
      <FirstContainer>
        <ArticleBox>
          <FCArticle1>
            <Banner />
            <FCNav>
              <FCNavLi>공채속보</FCNavLi>
              <FCNavLi>기업분석</FCNavLi>
              <FCNavLi>직무분석</FCNavLi>
              <FCNavLi>채용설명회</FCNavLi>
              <FCNavLi>합격스펙</FCNavLi>
              <FCNavLi>합격자소서</FCNavLi>
              <FCNavLi>인적성.면접</FCNavLi>
              <FCNavSelect>신입</FCNavSelect>
              <FCNavSelect>경력</FCNavSelect>
            </FCNav>
            <FCGrid>
              <FCGridRow>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
              </FCGridRow>
              <FCGridRow>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
                <FCGridColumn>
                  <FCGridColumnImgContainer>
                    <img src="https://img.jobkorea.co.kr/Images/Logo/106/d/i/dichq007_106.gif"></img>
                  </FCGridColumnImgContainer>
                  <FCGridColumnSpanContainer>
                    <FCGridColumnSpan>
                      2020년도 상반기 각 부문 신입사원 채용
                    </FCGridColumnSpan>
                    <FCGridColumnCompanyName>
                      대림산업(주)
                    </FCGridColumnCompanyName>
                  </FCGridColumnSpanContainer>
                </FCGridColumn>
              </FCGridRow>
              <FCGridBottom>
                <FCGridBottomContent>#1000대기업 공채</FCGridBottomContent>
                <FCGridBottomContent>#인턴채용</FCGridBottomContent>
                <FCGridBottomContent>#공채달력</FCGridBottomContent>
                <FCGridBottomContent>#Live공채소식</FCGridBottomContent>
                <FCGridBottomContent>더보기></FCGridBottomContent>
              </FCGridBottom>
            </FCGrid>
          </FCArticle1>
          <FCArticle2>
            <ImageContainer>
              <img src="https://file1.jobkorea.co.kr/main/Bnnr/Imgs/%ED%99%88%EB%B0%B0%EB%84%88_top100.png"></img>
            </ImageContainer>
            <RankContainer>
              <RankHeader>
                <RankTitle>채용 TOP 100</RankTitle>
                <Current>1/4</Current>
                <LeftArrow>&lt;</LeftArrow>
                <RightArrow>&gt;</RightArrow>
              </RankHeader>
              <Rank>
                <RankList>
                  <RankListSpan>1. 동원그룹</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>2. 현대자동차</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>3. 팔렛티그룹</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>4. 팔렛티푸드</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>5. 현대그룹</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>6. DB그룹</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>7. 카카오</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>8. 네이버</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>9. 한국수자원공사</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
                <RankList>
                  <RankListSpan>10. 동원그룹</RankListSpan>
                  <RankListChange>-</RankListChange>
                </RankList>
              </Rank>
            </RankContainer>
          </FCArticle2>
          <FCArticle3>
            <ProfileContainer>
              <ProfileContent>
                <ProfileContentBox>
                  <NameSpan>유정민님</NameSpan>
                  <LinkSpan>이력서 작성하기</LinkSpan>
                </ProfileContentBox>
                <ProfileContentBox>
                  <AuthButton>로그아웃</AuthButton>
                </ProfileContentBox>
              </ProfileContent>
              <ProfileNav>
                <ProfileNavContent>지원현황</ProfileNavContent>
                <ProfileNavContent>열람기업</ProfileNavContent>
                <ProfileNavContent>스크랩</ProfileNavContent>
                <ProfileNavContent>스마트매치</ProfileNavContent>
              </ProfileNav>
            </ProfileContainer>
            <ProfileGraph>
              <ProfileGraphContentRow>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
              </ProfileGraphContentRow>
              <ProfileGraphContentRow>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
              </ProfileGraphContentRow>
              <ProfileGraphContentRow>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
                <ProfileGraphContentColumn>
                  <img src={button}></img>
                  <span>1000대기업</span>
                </ProfileGraphContentColumn>
              </ProfileGraphContentRow>
            </ProfileGraph>
            <EmptyBox></EmptyBox>
          </FCArticle3>
        </ArticleBox>
        <BottomBox>
          <FCBottom>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
            <FCBottomContent>
              <img src="http://img.jobkorea.co.kr/Images/Logo/160/m/e/medialog4k_160.gif"></img>
            </FCBottomContent>
          </FCBottom>
        </BottomBox>
      </FirstContainer>

      <SecondContainer>
        <SecondContainerDistruct>
          <SecondContainerTitle>VVIP 채용관</SecondContainerTitle>
          <SCGrid>
            <SCGridRow>
              <SCGridColumn>
                <SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox>
              </SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
              <SCGridColumn><SCGridImgBox>
                  <img src="https://img11.jobkorea.kr/Images/Logo/180/d/w/dwgroup_180.gif?20200501233009"></img>
                </SCGridImgBox>
                <SCGridSpanBox>
                  <CompanyName>동원그룹</CompanyName>
                  <Content>2020 상반기 채용연계형 인턴모집</Content>
                  <SCGridSpanBottom>
                    <DueDate>D-18</DueDate>
                    <Star>별</Star>
                  </SCGridSpanBottom>
                </SCGridSpanBox></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
          </SCGrid>
        </SecondContainerDistruct>
        <SecondContainerBanner></SecondContainerBanner>
        <SecondContainerDistruct>
          <SecondContainerTitle></SecondContainerTitle>
          <SCGrid>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
          </SCGrid>
        </SecondContainerDistruct>
        <SecondContainerDistruct>
          <SecondContainerTitle></SecondContainerTitle>
          <SCGrid>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
            <SCGridRow>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
              <SCGridColumn></SCGridColumn>
            </SCGridRow>
          </SCGrid>
        </SecondContainerDistruct>
        <SecondContainerBanner></SecondContainerBanner>
      </SecondContainer>
    </Wrapper>
  );
};
