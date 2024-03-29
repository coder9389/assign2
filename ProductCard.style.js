import styled from "styled-components";

export const Card=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.7rem 0;
    flex:1;

    .logo-image{
        background-color: #487fe3;
        border-radius: 0.438rem;
        color: #ffffff;
        padding: 0.5rem;
        font-size: 0.8rem;
    }

    .cardCostWithLogo{
        display:flex;
        gap:1rem;
    }

    .cardDesc{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cardCost{
        font-weight:500;
        font-size:0.8rem;
    }

    .views{
        font-size:0.8rem;
        padding: 0.1rem 0.4rem;
        background:#f5f6f8;
        border-radius:0.5rem;
    }
`;