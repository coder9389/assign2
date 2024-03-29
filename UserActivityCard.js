import React from 'react';
import { Wrapper } from './UserActivityCard.style';
import graph from '../../images/userActivity-graph.png';

function UserActivityCard(props) {
    return (
        <Wrapper>
            <div className='card-head'>
                <div>User Activity</div>
                <span className='select'>Weekly</span>
            </div>
            <div className='month'>This Month</div>
            <div className='month-values'>16,453</div>
            <img src={graph} alt='graph' className='graphUA'/>
        </Wrapper>
    );
}

export default UserActivityCard;