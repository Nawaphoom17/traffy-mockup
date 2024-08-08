import React from 'react'
import "./ReportFooterStyle.css"

function ReportFooter() {
  return (
    <div className='re-footer'>
      <div className='about-office'>
        <p className='office-name'>NATIONAL SCIENCE AND TECHNOLOGY<br/>DEVELOPMENT AGENCY</p>
        <p className='office-add'>111 Thailand Science Park, Phahonyothin Road,<br/> Khlong Nueng, Khlong Luang, Pathum Thani 12120<br/> Thailand</p>
        <p className='time'>Mon-Fri 9:00-16:00</p>
      </div>
      <div className='contact'>
        <a href='/' className='facebook'>
          <img src='src/assets/facebook.png' />
          <p>Traffy</p>
        </a>
        <a href='/' className='line'>
          <img src='src/assets/line.png' />
          <p>@fonduehelp</p>
        </a>
        <a href='/' className='tiktok'>
          <img src='src/assets/tiktok.png' />
          <p>traffyfondue</p>
        </a>
        <a href='/' className='web'>
          <img src='src/assets/world.png' />
          <p>Traffy.in.th</p>
        </a>
      </div>
    </div>
  )
}

export default ReportFooter