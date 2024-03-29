import styled from "styled-components";

export const Wrapper=styled.div`
    background-color:#010422;
    color:#66677a;
    padding:0.5rem;
    font-family: "Roboto","Helvetica","Arial",sans-serif;

    .menuIconOpen{
        color:#66677a;
        margin-top:1rem;
        float:right;
        margin-top: 0.7rem;
        margin-bottom: 2rem;
        cursor:pointer;
    }

    .menuIcon{
        color:#66677a;
        cursor:pointer;
    }

    .menu{
        clear:right;
        width:12vw;
    }

    .menuHead{
        text-transform:uppercase;
        font-size:0.6rem;
        margin-bottom:1.3rem;
    }

    .menuCard{
        margin-bottom:1rem;
        font-size:1rem;
        display:flex;
        align-items:center;
    }

    .menuName{
        margin-left:0.5rem;
        font-size:0.9rem;
        color:#66677a;
        font-family:unset;
    }

    .css-10hburv-MuiTypography-root{
        font-size:0.9rem;
        line-height:normal;
    }

    a{
        text-decoration:none;
        width: -webkit-fill-available;
        color:#66677a;
    }

    .active{
        color:#ffffff;
    }
`;