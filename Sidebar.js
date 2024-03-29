import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Wrapper } from './Sidebar.style';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function Sidebar(props) {
    const [menuOpen,setMenuOpen]=useState(false);
    const [openCommerceList,setOpenCommerceList]=useState(false);

    const clickToToggle=()=>{
        setMenuOpen(!menuOpen);
    };

    const handleClick=()=>{
        setOpenCommerceList(!openCommerceList);
    }

    return (
        <Wrapper className={menuOpen && "OpenMobile"}>
            {/* <NavLink to='/' activeStyle={{color:"white"}}>Hi</NavLink> */}
            <MenuIcon onClick={()=>clickToToggle()} className={menuOpen ? "menuIconOpen" : "menuIcon"}/>
            {menuOpen &&
            <div className='menu'>
                <div className='menuHead'>Menu</div>
                        <List sx={{margin:0,padding:0,fontFamily:"unset"}}>
                            <ListItemButton onClick={handleClick} sx={{padding:0}} className='menuCard'>
                                <ListItemIcon sx={{minWidth:0}}>
                                    <DashboardOutlinedIcon sx={{color:"#57596b",fontSize:'0.9rem'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Dashboards" className='menuName active' sx={{fontFamily:"unset",fontSize:'0.9rem',marginBottom:0}}/>
                                {openCommerceList ? <ExpandLess sx={{fontSize:'0.9rem',color:'white'}}/> : <ExpandMore  sx={{fontSize:'0.9rem',color:'white'}}/>}
                            </ListItemButton>
                            <Collapse in={openCommerceList} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItemButton sx={{  paddingLeft:'1.5rem',py:0}}>
                                    <ListItemText primary="Ecommerce" className='menuCard active' sx={{mt:0}}/>
                                </ListItemButton>
                                <ListItemButton sx={{ paddingLeft:'1.5rem',py:0 }}>
                                    <ListItemText primary="Sass" className='menuCard' sx={{mt:0}}/>
                                </ListItemButton>
                                <ListItemButton sx={{  paddingLeft:'1.5rem',py:0 }}>
                                    <ListItemText primary="Crypto" className='menuCard' sx={{mt:0}}/>
                                </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                <div className='menuHead'>Applications</div>
                <div>
                    <div className='menuCard'>
                        <CalendarMonthOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Calendar</span>
                    </div>
                    <div className='menuCard' >
                        <SmsOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Chat</span>
                    </div>
                    <div className='menuCard'>
                        <FolderOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>File Manager</span>
                    </div>
                    <div className='menuCard'>
                        <CardTravelOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Ecommerce</span>
                    </div>
                    <div className='menuCard'>
                        <EmailOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Email</span>
                    </div>
                    <div className='menuCard'>
                        <DescriptionOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Invoice</span>
                    </div>
                    <div className='menuCard'>
                        <AccountTreeOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Projects</span>
                    </div>
                    <div className='menuCard'>
                        <ContactPageOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                        <span className='menuName'>Contacts</span>
                    </div>
                </div>

                <div className='menuHead'>Layouts</div>

                <div className='menuHead'>Pages</div>
                <div className='menuCard'>
                    <VerifiedUserOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                    <span className='menuName'>Authentication</span>
                </div>
                <div className='menuCard'>
                    <ViewInArOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                    <span className='menuName'>Utility</span>
                </div>

                <div className='menuHead'>components</div>
                <div className='menuCard'>
                    <AutoAwesomeMotionOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                    <span className='menuName'>UI Elements</span>
                </div>
                <div className='menuCard'>
                    <DriveFileRenameOutlineOutlinedIcon sx={{fontSize:'0.9rem'}}/>
                    <span className='menuName'>Forms</span>
                </div>
            </div>
            }
        </Wrapper>
    );
}

export default Sidebar;