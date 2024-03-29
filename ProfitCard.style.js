import styled from "styled-components";

export const Card=styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#ffffff;
    padding:0.7rem;
    border-radius:0.625rem;
    flex:1;

    .logo-image{
        background-color:#487fe3;
        border-radius:0.438rem;
        color:#ffffff;
        padding: 0.1rem 0.5rem;
        font-size:1.8rem;
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

    .profitCost{
        font-weight:500;
        font-size:1rem;
    }

    .high{
        background-color:#eff7f0;
        color:#6cb278;
        align-self: flex-end;
        padding:0.1rem 0.4rem;
        border-radius:0.875rem;
        font-size:0.6rem;
    }

    .low{
        background-color:#fdf0f0;
        color:#f47878;
        align-self: flex-end;
        padding:0.1rem 0.4rem;
        border-radius:0.875rem;
        font-size:0.6rem;
    }
`;