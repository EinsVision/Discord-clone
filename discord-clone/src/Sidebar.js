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

function Sidebar() {
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
          font-size='large'
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
        <Avatar src='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s83-c-mo'/>
        <div className="sidebar__profileInfo">
          <h3>@EinsVision</h3>
          <p>#This is My ID.</p>
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
