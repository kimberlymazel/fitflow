import React from 'react'
import Box from '@mui/material/Box'
import logo from '../../icons/logo.png'
import logout from '../../icons/log-out.png'
import '../../style/general.css'

function Header() {
  return (
    <div>
      <Box 
        sx={{
          height: 40,
          display: 'flex',
          alignItems: "center",
        }}
        p={2}
      >

        <div>
          <img 
            src={logo}
            height={40}
          ></img>
        </div>

        <div className="righticon">
          <img 
            src={logout}
            height={40}
          ></img>
        </div>
        
      </Box>
      <div style={{width:"100%", height:"2px", background:'linear-gradient(to right, #5B1AB9, #FFFFFF)', marginTop:"-5px"} }>

      </div>
    </div>
    
  )
}

export default Header