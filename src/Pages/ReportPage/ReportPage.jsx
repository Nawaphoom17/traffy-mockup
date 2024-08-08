import React from 'react'
import ReportNav from '../../components/ReportNav/ReportNav'
import ReportBox from '../../components/ReportBox/ReportBox'
import ReportFooter from '../../components/ReportFooter/ReportFooter'
import './ReportPageStyle.css'

function ReportPage() {
  return (
    <div className='report-page-all'>
        <ReportNav></ReportNav>
        <ReportBox></ReportBox>
        <ReportFooter></ReportFooter>
    </div>
  )
}

export default ReportPage