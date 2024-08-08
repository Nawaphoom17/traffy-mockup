import React from 'react'
import './HomeContentStyle.css'

function HomeContent() {
  return (
    <div className='home-content'>
        <div className='report-image'>
            <div className='before'>
                <p>แจ้งปัญหา</p>
                <div className='beforeimg'>
                    <img src="https://storage.googleapis.com/traffy_public_bucket/attachment/2023-11/d0e4573860ae81c3f4316ab5a3d9163246639042.jpg" alt="" />
                </div>
            </div>
            <div className='after'>
                <p>แก้ไขเสร็จสิ้น</p>
                <div className='afterimg'>
                    <img src='https://storage.googleapis.com/traffy_public_bucket/attachment/2023-11/1700634447582.jpeg' alt="" />
                </div>
            </div>

        </div>
        <div className='the-cards'>
            <div className='content-card'>
                <div className='head-card'>
                    <div className='-about'>
                        <div className='-detail'>
                            <p>Test</p>
                        </div>
                        <div className='-comment'>
                            <p>ยังไม่มีคอมเมนต์</p>
                        </div>
                    </div>
                    <div className='-map'>
                        <img src='src\assets\Traffy_brown_icon-FDga12KB.png' />
                    </div>
                </div>
                <div className='tail-card'>
                    <p>#2023-EM3RWM</p>
                </div>
            </div>

            <div className='hist-card'>
                <div className='head-card'>
                    <p>NULL</p>
                </div>
                <div className='tail-card'>
                    <p>ผลประเมินความพึงพอใจ</p>
                    <div className='-star'>
                        Star
                    </div>
                    <a href='/' className='report-again'>
                        <p className='-text'>แจ้งปัญหานี้อีกครั้ง(Reopen)</p>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeContent