import React from 'react'
import Box from '@mui/material/Box'
import logo from '../icons/logo.png'
import logout from '../icons/log-out.png'
import '../style/App.css'

function Header() {
  return (
    <div>
      <Box 
        sx={{
          height: 40,
          display: 'flex',
          alignItems: "center"
        }}
        p={2}
      >

        <div>
          <img 
            src={logo}
            height={40}
          ></img>
        </div>

        <div className="right">
          <img 
            src={logout}
            height={40}
          ></img>
        </div>
        
      </Box>
    </div>
    
  )
}

export default Header