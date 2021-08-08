import React from 'react';
import "../css/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />

            </IconButton>
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
                alt=""
            />
            <IconButton>
            <ChatIcon />
            </IconButton>
        </div>
    )
}

export default Header
