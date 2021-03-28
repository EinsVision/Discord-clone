import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h3>EinsVision</h3>
        <ExpandMoreIcon />  
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon /> 
            <h4>Text Channel</h4>
          </div>

          <AddIcon className='sidebar__addChannel' /> 
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>  

      <div className="sidebar__voice">
        <SignalCellularAltIcon 
          className='sidebar__voiceIcon'
          fontSize='large'
        />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <HelpOutlineIcon />
          <CallIcon />
        </div>

      </div>

      <div className="sidebar__profile">
        <Avatar onClick={ () => auth.signOut()} src={user.photo}/>
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <h2>{user.email}</h2>
          <p>#{user.uid.substring(0,5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
