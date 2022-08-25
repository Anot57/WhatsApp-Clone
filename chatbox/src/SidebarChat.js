import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@mui/material'
function SidebarChat() {
  return (
    <div className="SidebarChat">
      <Avatar />
      <div className="SidebarChat__info">
          <h2>Room name</h2>
          <p>This the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;