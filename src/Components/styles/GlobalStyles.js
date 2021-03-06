import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    @import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Jua|Noto+Sans+KR&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background-color: ${props => props.theme.bgColor};
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        font-size: 14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Jua', 'Noto Sans KR';
    }
    a{
        color: ${props => props.theme.lightGreyColor};
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;
