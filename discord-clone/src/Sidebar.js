import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

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

        <div className="sidebar__voice">
          <SignalCellularAltIcon 
            className='sidebar__voiceIcon'
            font-size='large'
          />
          <div className="sidebar__voiceInfo">
            
          </div>
        </div>

      </div>    
    </div>
  )
}

export default Sidebar
