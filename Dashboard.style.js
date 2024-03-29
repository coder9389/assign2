import styled from "styled-components";

export const Container=styled.div`
    background-color:#f1f3f7;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    padding:1rem;
    flex:1;
    border-top-left-radius: 1.563rem;

    .dashboard-head{
        display:flex;
        justify-content:space-between;
        font-weight: 600;
        font-size: 1.2rem;
    }

    .select,.month,.valueText,.earning,.product,.designation,.profitTitle,.cardTitle,.activity{
        font-size:0.8rem;
        color:#8d9198; 
    }

    .dashboard-tools{
        font-weight:400;
        display:flex;
        gap:1rem;
    }

    .high{
        background-color:#eff7f0;
        color:#6cb278;
        padding:0.1rem 0.4rem;
        border-radius:0.875rem;
        font-size:0.6rem;
    }

    .profilePic{
        width:1.875rem;
    }

    .card-head,.activity-card{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:1.5rem;
    }

    .month-values{
        margin-top:0.313rem;
    }

    .data-table,.month-values{
        display:flex;
    }

    .card{
        border-radius:0.625rem;
        padding:1rem;
        background-color:#ffffff;
    }

    .product-card{
        width: -webkit-fill-available;
    }

    @media only screen and (max-width:680px){
        .cardsFlex{
            flex-direction:column;
        }

        // .monthValuesFlex .monthValue{
        //     flex:1;
        // }

        .overview-data{
            align-items:center;
        }

        .overview-data .graphImg{
            width:70%;
        }
    }
`;

export const MainHome=styled.div`
    display:flex;
    margin-top: 2rem;
    gap:1rem;

    .bottom-card{
        flex: 1 0 27%;
    }

    .profitCards{
        display:flex;
        justify-content:space-between;
        flex:1;
        gap:1rem;
    }

    .left-dashboard{
        flex:1;
    }

    .cardsFlex{
        display:flex;
        gap:1rem;
    }

    .ua-flex{
        gap:1rem;
    }

    .pieGraph{
        display:block;
        margin:0 auto;
        width:8.313rem;
    }

    .activity-card{
        margin-bottom:1rem;
        gap:0.7rem;
    }

    .date{
        background-color:#f5f6f8;
        border-radius: 0.438rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        display:flex;
        align-items:center;
        flex-direction:column;
    }
`;

export const Profile=styled.div`
    flex:0.35;
    padding:0 !important;

    @media only screen and (max-width:680px){
        flex:0.45;
    }
    
    .profile-background{
        padding:1rem;
        background: linear-gradient(to bottom, #5b8ce2 44%, #3867bc 100%);
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
        height: 8.5%;
        position:relative;
    }

    .profileImg{
        position:absolute;
        left: 37%;
        border-radius:50%;
        border:0.188rem solid #f1f3f7;
        width:4.375rem;
        top: 60%;
    }

    .illustration{
        float:right;
    }

    .profileDesc{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:2rem;
        padding:1rem;
    }

    .pName{
        font-size:1rem;
        font-weight:600;
    }

    .profileNo{
        display:flex;
        margin:1.5rem;
        justify-content:space-between;
        width: -webkit-fill-available;
    }

    .Noflex{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .hrline{
        margin-top: 0;
        margin-bottom: 0;
    }

    .designation{ 
        margin-top:0.3rem;
    }

    .earning-head{
        margin-top:0.7rem;
        display:flex;
        justify-content:space-between;
        width: -webkit-fill-available;
        margin-bottom:0.7rem;
    }

    .number{
        font-weight:600;
    }

    .product{
        margin-top:0.3rem;
    }
    
    .CircularProgressbar{
        width:40%;
    }

    .CircularProgressbar .CircularProgressbar-text{
        dominant-baseline: no-change;
    }

    .high{
        align-self: flex-end;
    }

    .earnFlex{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top: -1.563rem;
        gap: 0.625rem;
        width: -webkit-fill-available;
    }

    .earningPrev{
        display:flex;
        gap:0.3rem;
    }

    .profitCost{
        font-weight:600;
    }

    .horiLine{
        display: block;
        margin-top: 0;
        margin-bottom: 0;
        width: -webkit-fill-available;
    }

    .recentActivity{
        margin-top:1rem;
        width: -webkit-fill-available;
    }

`;

export const OverviewCard=styled.div`
    margin-top: 1rem;
    border-radius:0.625rem;
    margin-bottom:1rem;

    .overview-data{
        display:flex;
        gap: 0.6rem;
    }

    .data-table{
        flex-direction:column;
    }

    .cost-values{
        gap: 0.625rem;
        align-items: center;
    }

    .graphImg{
        width:74%;
    }

    .select{
        margin-left:0.188rem;
    }

    .selectFlex{
        font-size:0.8rem;
    }

    .profitCost{
        font-weight:500;
        font-size:1.1rem;
    }

    .monthValuesFlex{
        display:flex;
        flex-wrap:wrap;
        margin-top:0.5rem;
    }

    .monthValuesFlex .no-margin{
        border-right:0;
    }

    .value{
        font-size:0.86rem;
        margin-top:0.3rem;
    }
    
    .monthValue{
        flex:1 0 35%;
        border-bottom:1px solid #f1f3f7;
        padding:0.6rem;
        border-right:1px solid #f1f3f7;
    }
`;
