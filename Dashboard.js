import React from 'react';
import { Container, MainHome, OverviewCard, Profile } from './Dashboard.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ProfitCard from '../../components/ProfitCard/ProfitCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupIcon from '@mui/icons-material/Group';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import proImg from '../../images/emmawatson.svg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import graph from '../../images/graph.png';
import UserActivityCard from '../../components/UserActivityCard/UserActivityCard';
import pieGraph from '../../images/pie-graph.png';
import ProductCard from '../../components/ProductCard/ProductCard';

function Dashboard() {
    const ProfitArr=[
        {
            title:"Revenue",
            url:<PieChartIcon sx={{fontSize:'1.2rem'}}/>,
            profit:+2.65,
            cost:"$21,456"
        },
        {
            title:"Orders",
            url:<LocalMallIcon sx={{fontSize:'1.2rem'}}/>,
            profit:-0.28,
            cost:"5,456"
        },
        {
            title:"Customers",
            url:<GroupIcon sx={{fontSize:'1.2rem'}}/>,
            profit:-1.65,
            cost:"45,456"
        }
    ];

    const percentage=76;

    const products=[
        {
            title:'Polo blue T-shirt',
            cost:'$25.4',
            userView:'3.82k'
        },
        {
            title:'Hoodie for men',
            cost:'$24.4',
            userView:'3.14k'
        },
        {
            title:'Red color cap',
            cost:'$22.4',
            userView:'2.82k'
        },
        {
            title:'Pocket T-shirt',
            cost:'$20.4',
            userView:'2.06k'
        }
    ];

    return (
        <Container>
                <div className='dashboard-head'>
                    <span>Dashboard</span>
                    <span className='dashboard-tools'>
                        <SearchOutlinedIcon/>
                        <DashboardOutlinedIcon/>
                        <NotificationsNoneOutlinedIcon/>
                        <SettingsOutlinedIcon/>
                        <img src={proImg} alt='profile' className='profilePic'/>
                    </span>
                </div>
            <MainHome>
                <div className='left-dashboard'>

                    <div className='profitCards'>
                        {ProfitArr.map((dept)=><ProfitCard data={dept}/>)}
                    </div>

                    <OverviewCard className='card'>
                        <div className='card-head'>
                            <div>Overview</div>
                            <div className='selectFlex'>
                                <span className='sortBy'>Sort By:</span>
                                <span className='select'>Yearly</span>
                            </div>
                        </div>
                        <div className='overview-data'>
                            <div className='data-table'>
                                <div>
                                    <div className='month'>This Month</div>
                                    <div className='month-values cost-values'>
                                        <div className='profitCost'>$26,256</div>
                                        <div className='high'>+ 2.56%</div>
                                    </div>
                                </div>
                                <div className='monthValuesFlex'>
                                    <div className='monthValue'>
                                        <div className='valueText'>Orders</div>
                                        <div className='value'>5,643</div>
                                    </div>
                                    <div className='monthValue no-margin'>
                                        <div className='valueText'>Sales</div>
                                        <div className='value'>15,643</div>
                                    </div>
                                    <div className='monthValue'>
                                        <div className='valueText'>Order Value</div>
                                        <div className='value'>12.3%</div>
                                    </div>
                                    <div className='monthValue no-margin'>
                                        <div className='valueText'>Customers</div>
                                        <div className='value'>25,643</div>
                                    </div>
                                    <div className='monthValue'>
                                        <div className='valueText'>Income</div>
                                        <div className='value'>$35,643</div>
                                    </div>
                                    <div className='monthValue no-margin'>
                                        <div className='valueText'>Expenses</div>
                                        <div className='value'>$15,643</div>
                                    </div>
                                </div>
                            </div>
                            <img src={graph} alt='graph' className='graphImg'/>
                        </div>
                    </OverviewCard>
                    <div className='cardsFlex'>
                        <UserActivityCard className='bottom-card'/>
                        <div className='card bottom-card'>
                            <div className='card-head ua-flex'>
                                <div>Order stats</div>
                                <MoreHorizIcon className='illustration'/>
                            </div>
                            <img src={pieGraph} alt='graph' className='pieGraph'/>
                        </div>
                        <div className='card product-card bottom-card'>
                            <div className='card-head'>
                                <div>Top Product</div>
                                <span className='select'>Monthly</span>
                            </div>
                            {products.map((product,i)=><ProductCard data={product} index={i}/>)}
                        </div>
                    </div>
                </div>

                <Profile className='card'>
                    <div className='profile-background'>
                        <MoreHorizIcon className='illustration' sx={{color:"#ffffff"}}/>
                        <img src={proImg} alt='profile' className='profileImg'/>
                    </div>
                    <div className='profileDesc'>
                        <div className='pName'>Bhawesh singh samaml</div>
                        <div className='designation'>Software developer</div>
                        <div className='profileNo'>
                            <div className='Noflex'>
                                <div className='number'>1,269</div>
                                <div className='product'>Products</div>
                            </div>
                            <hr className='hrline'/>
                            <div className='Noflex'>
                                <div className='number'>1.2k</div>
                                <div className='product'>Followers</div>
                            </div>
                        </div>
                        <hr className='horiLine'/>
                        <div className='earning-head'>
                            <span>Earning</span>
                            <InfoOutlinedIcon/>
                        </div>
                        <CircularProgressbar 
                            value={percentage} 
                            text="76%" 
                            circleRatio="0.5"
                            strokeWidth="6"
                            styles={{
                                trail:{
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(-92deg)',
                                    transformOrigin: 'center center',
                                    stroke:'#f5f4fa'
                                },
                                path:{
                                    strokeLinecap:'butt',
                                    transform: 'rotate(-92deg)',
                                    transformOrigin: 'center center',
                                    stroke:"#3b76e1"
                                },
                                text: {
                                    fill: '#000000',
                                    fontSize: '1.1rem',
                                    fontWeight:'600'
                                }
                            }} 
                            />
                            <div className='earnFlex'>
                                <div className='profitCost'>$26,256</div>
                                <div className='earning'>Earning this month</div>
                                <div className='earningPrev'>
                                    <div className='high'>+ 2.56%</div>
                                    <span className='earning'>From previous month</span>
                                </div>
                                <hr className='horiLine'/>
                            </div>
                            <div className='recentActivity'>
                                <div className='card-head activityTitle'>Recent Activity</div>
                                <div className='activity-card'>
                                    <div className='date'>
                                        <div>12</div>
                                        <div>Sep</div>
                                    </div>
                                    <div className='activity'>Responded to read 'Volunteer Activities'</div>
                                </div>
                                <div className='activity-card'>
                                    <div className='date'>
                                        <div>11</div>
                                        <div>Sep</div>
                                    </div>
                                    <div className='activity'>Responded to read 'Volunteer Activities'</div>
                                </div>
                            </div>
                    </div>
                </Profile>
            </MainHome>
        </Container>
    );
}

export default Dashboard;