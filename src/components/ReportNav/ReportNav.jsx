import React from 'react'
import './ReportNavStyle.css'

function ReportNav() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='src/assets/Logo_Traffy.a544b8953fbc2cb50d60.png' />
        <img src='src/assets/Fondue_App_Icon.781d15ada52b2682fb72.png' />
      </div>
      <div className='link'>
        <div>
          <a href='/report'>Report Issue</a>
        </div>
        <div>
          <a href='/report'>Follow Issue</a>
        </div>
        <div>
          <img/>
        </div>
      </div>
    </div>
  )
}

export default ReportNav