import React from 'react';
import { Card } from './ProfitCard.style';

function ProfitCard({data}) {
    const {title,url,profit,cost}=data;
    return (
        <Card>
            <div className='cardCostWithLogo'>
                <div className='logo-image'>
                    {url}
                </div>
                <div className='cardDesc'>
                    <div className='profitTitle'>{title}</div>
                    <div className='profitCost'>{cost}</div>
                </div>
            </div> 
            <div className={profit>0 ? 'high' : 'low'}>{profit>0 && '+'} {profit}%</div>
        </Card>
    );
}

export default ProfitCard;