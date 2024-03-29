import React from 'react';
import { Card } from './ProductCard.style';

function ProductCard({data,index}) {
    const {title,cost,userView}=data;

    return (
        <Card>
            <div className='cardCostWithLogo'>
                <div className='logo-image'>
                    #{index+1}
                </div>
                <div className='cardDesc'>
                    <div className='cardTitle'>{title}</div>
                    <div className='cardCost'>{cost}</div>
                </div>
            </div> 
            <div className='views'>{userView}</div>
        </Card>
    );
}

export default ProductCard;