import React from 'react'
import './LoginBoxStyle.css'
import { Outlet, Link } from "react-router-dom";

function LoginBox() {
  return (
    <div className='login'>
      <div className='loginbox'>
        <div className='detail'>
          <p className='title'>กรุณากรอกรหัสผ่านเพื่อดูข้อมูล</p>
          <p className='label'>Ticket ID</p>
          <input type='text' id='ticketID' className='-input' placeholder='กรอก Ticket ID เช่น 2023-ABCOP'></input>
          <p className='label'>รหัสเข้าดู</p>
          <input type='text' id='password' className='-input' placeholder='กรอกรหัสเข้าดู'></input>
          
          <Link to={'/Home'} className='summit'><p>ยืนยัน</p></Link>
        </div>
        
      </div>
      
    </div>
  )
}

export default LoginBox